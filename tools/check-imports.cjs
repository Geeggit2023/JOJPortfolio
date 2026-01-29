const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repoRoot = process.cwd();
const srcDir = path.join(repoRoot, 'src');

function gitFiles() {
  const out = execSync('git ls-files', { encoding: 'utf8' });
  return out.split(/\r?\n/).filter(Boolean);
}

function walk(dir, exts = ['.js', '.jsx', '.ts', '.tsx']) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    const p = path.join(dir, it.name);
    if (it.isDirectory()) results.push(...walk(p, exts));
    else if (exts.includes(path.extname(it.name))) results.push(p);
  }
  return results;
}

function findImports(fileContent) {
  const imports = [];
  const importRegex = /import\s+(?:[^'";]+)\s+from\s+['"]([^'"]+)['"]/g;
  const sideRegex = /import\s+['"]([^'"]+)['"]/g;
  let m;
  while ((m = importRegex.exec(fileContent))) imports.push(m[1]);
  while ((m = sideRegex.exec(fileContent))) imports.push(m[1]);
  return imports;
}

function check() {
  const tracked = gitFiles();
  const files = walk(srcDir);
  const errors = [];

  for (const f of files) {
    const relFile = path.relative(repoRoot, f).replace(/\\/g, '/');
    const content = fs.readFileSync(f, 'utf8');
    const imports = findImports(content);
    for (const imp of imports) {
      if (!imp.startsWith('.')) continue;
      const resolvedBase = path.resolve(path.dirname(f), imp);
      const candidates = [];
      const exts = ['.js', '.jsx', '.ts', '.tsx', '/index.js', '/index.jsx', '/index.ts', '/index.tsx', ''];
      for (const e of exts) {
        const cand = resolvedBase + e;
        candidates.push(path.relative(repoRoot, cand).replace(/\\/g, '/'));
      }

      const found = candidates.find((c) => tracked.includes(c));
      if (!found) {
        errors.push({ file: relFile, import: imp, candidates });
      }
    }
  }

  if (errors.length === 0) {
    console.log('No unresolved relative imports found (case mismatch unlikely).');
    process.exit(0);
  }

  console.log('Unresolved relative imports:');
  for (const e of errors) {
    console.log(`\n- In: ${e.file}\n  import: ${e.import}\n  tried:`);
    for (const c of e.candidates) console.log(`    - ${c}`);
  }
  process.exit(2);
}

check();

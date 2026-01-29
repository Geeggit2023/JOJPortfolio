const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const srcDir = path.join(repoRoot, 'src');

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

function existsWithExactCase(p) {
  const rel = path.relative(repoRoot, p);
  const parts = path.normalize(rel).split(path.sep).filter(Boolean);
  let cur = repoRoot;
  for (const part of parts) {
    let found = false;
    try {
      const items = fs.readdirSync(cur);
      for (const it of items) if (it === part) { found = true; break; }
    } catch (err) {
      return false;
    }
    if (!found) return false;
    cur = path.join(cur, part);
  }
  return true;
}

function check() {
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
      const knownExts = ['.js', '.jsx', '.ts', '.tsx'];
      const impExt = path.extname(imp);
      let matched = false;
      if (knownExts.includes(impExt)) {
        const cand = resolvedBase;
        if (existsWithExactCase(cand)) matched = true;
        candidates.push(path.relative(repoRoot, cand).replace(/\\/g, '/'));
      } else {
        const exts = ['.js', '.jsx', '.ts', '.tsx', '/index.js', '/index.jsx', '/index.ts', '/index.tsx', ''];
        for (const e of exts) {
          const cand = resolvedBase + e;
          if (existsWithExactCase(cand)) { matched = true; break; }
          candidates.push(path.relative(repoRoot, cand).replace(/\\/g, '/'));
        }
      }
      if (!matched) errors.push({ file: relFile, import: imp, candidates });
    }
  }

  if (errors.length === 0) {
    console.log('No unresolved relative imports found (case mismatch unlikely).');
    process.exit(0);
  }
  console.log('Unresolved relative imports (no exact-case file found):');
  for (const e of errors) {
    console.log(`\n- In: ${e.file}\n  import: ${e.import}\n  tried:`);
    for (const c of e.candidates) console.log(`    - ${c}`);
  }
  process.exit(2);
}

check();

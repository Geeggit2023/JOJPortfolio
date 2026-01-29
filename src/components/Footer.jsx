import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">About Me</h3>
            <p>
              Front-end Developer and Cinematographer with a passion for
              creating stunning visuals and seamless user experiences.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#Contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-400">
                LinkedIn
              </a>
              <a href="#" className="hover:text-gray-400">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2026 John Oladepo-Jesuloba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

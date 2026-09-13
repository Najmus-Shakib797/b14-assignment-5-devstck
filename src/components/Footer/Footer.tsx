import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-100 px-8 py-10">
        {/* Top part: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            {/* Logo */}
            <div className="flex items-center mb-4">
              <img
                src="/public/logo-text.png"
                alt="Logo"
                className="h-10 mr-2"
              />
              <span className="text-lg font-semibold">Dev Stack</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Links in flex row */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Technologies
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Projects
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Careers
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">PRODUCT</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">COMPANY </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">LEGAL</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom part: 2 side texts */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

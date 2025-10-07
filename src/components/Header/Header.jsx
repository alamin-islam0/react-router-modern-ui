import React, { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-base-100/95 backdrop-blur-sm border-b border-base-300">
      <div className="navbar max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Mobile Logo */}
        <div className="navbar-start">
          <Link
            to="/"
            className="btn btn-ghost text-lg sm:text-xl font-bold text-primary px-2 sm:px-4"
          >
            <span className="text-xl sm:text-2xl">🚀</span>
            <span className="hidden xs:inline ml-1 sm:ml-2 text-sm sm:text-base">
              ReactRouter
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-end lg:hidden">
          <button
            className="btn btn-ghost btn-square btn-sm sm:btn-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1 xl:space-x-2">
            <li>
              <Link
                to="/"
                className="btn btn-ghost btn-sm hover:btn-primary transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="btn btn-ghost btn-sm hover:btn-primary transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                About
              </Link>
            </li>

            <li>
              <Link
                to="/blogs"
                className="btn btn-ghost btn-sm hover:btn-primary transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop CTA Button */}
        <div className="navbar-end hidden lg:flex">
          <Link to="/contact" className="btn btn-primary btn-sm">
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-base-100 border-t border-base-300">
          <div className="px-2 sm:px-4 py-2 space-y-1">
            <Link
              to="/"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-base-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
            <Link
              to="/about"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-base-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </Link>

            <Link
              to="/blogs"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-base-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              Blog
            </Link>
            <div className="pt-4 border-t border-base-300">
              <Link
                to="/contact"
                className="btn btn-primary btn-sm w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

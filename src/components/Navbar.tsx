import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from './Logo'

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Logo />
        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/puppies" className="text-gray-700 hover:text-purple-600">
            Puppies
          </Link>
          <Link to="/about-breeder" className="text-gray-700 hover:text-purple-600">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-purple-600">
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 hover:text-purple-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            to="/puppies"
            className="block px-4 py-2 text-gray-700 hover:bg-purple-50"
            onClick={() => setOpen(false)}
          >
            Puppies
          </Link>
          <Link
            to="/about-breeder"
            className="block px-4 py-2 text-gray-700 hover:bg-purple-50"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-purple-50"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-bold text-purple-600">
          <img src="/logo.svg" alt="Breeder Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/gallery" className="text-gray-700 hover:text-purple-600">
            Puppies
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-purple-600">
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
            to="/gallery"
            className="block px-4 py-2 text-gray-700 hover:bg-purple-50"
          >
            Puppies
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-purple-50"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-purple-50"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

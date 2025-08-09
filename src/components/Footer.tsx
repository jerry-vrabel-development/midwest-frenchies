import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';          // or `next/link` if you’re in Next.js

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* 1️⃣ Social links */}
        <div className="flex space-x-4 justify-center sm:justify-start">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-white transition-colors"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* 2️⃣ Legal / quick links */}
        <div className="flex flex-col items-center sm:items-start space-y-2 text-sm">
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
          <Link to="/sitemap" className="hover:text-white transition-colors">
            Sitemap
          </Link>
          <span className="text-xs">
            ©2025 Midwest Frenchies – All rights reserved
          </span>
        </div>

        {/* 3️⃣ Small map (Google Maps embed) */}
        <div className="w-full h-32 sm:h-32">
        </div>
      </div>
    </footer>
  );
}

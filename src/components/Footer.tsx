import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1️⃣ Social Links */}
        <div className="flex flex-wrap justify-start gap-4 sm:gap-6 mb-6">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* 2️⃣ Legal Links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
          <Link to="/sitemap" className="hover:text-white transition-colors">
            Sitemap
          </Link>
        </div>

        {/* 3️⃣ Map Section */}
        <div className="w-full h-40 sm:h-32 rounded-lg bg-gray-700 flex items-center justify-center">
          {/* Replace this with your Google Maps embed */}
          <div className="text-center">
            <p className="text-gray-400">📍 Location Map</p>
          </div>
        </div>

        {/* 4️⃣ Copyright */}
        <div className="mt-6 text-center text-xs">
          ©2025 Midwest Frenchies – All rights reserved
        </div>
      </div>
    </footer>
  );
}

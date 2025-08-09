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
            ©2025 DogSpot – All rights reserved
          </span>
        </div>

        {/* 3️⃣ Small map (Google Maps embed) */}
        <div className="w-full h-32 sm:h-32">
          <iframe
            title="DogSpot office location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093684!2d-122.4194152846827!3d37.77492977975src=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093684!2d-122.4194152846827!3d3777492977975993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b1b3d2d3%3A0xb9c0f0e5e9b9b7d0!2sSan%20Francisco%2C%293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b1b3d2d3%3A0xb9c0f0e5e9b9b7d0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

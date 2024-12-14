import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Brand */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-emerald-400">GameStore</h2>
            <p className="text-sm mt-2">
              Your ultimate destination for gaming needs.
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <a
              href="/about"
              className="text-sm hover:text-emerald-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-sm hover:text-emerald-400 transition-colors"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-sm hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} GameStore. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <Twitter className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

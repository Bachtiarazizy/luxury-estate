"use client";

import Link from "next/link";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="relative container mx-auto px-4 lg:px-6">
          {/* Main Footer Content */}
          <div className="py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
              {/* Company Info - Takes more space */}
              <div className="lg:col-span-5">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">LuxuryEstate</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">Redefining luxury real estate with exceptional service, premium properties, and unmatched expertise in the market.</p>
                </div>

                {/* Newsletter Signup */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 text-white">Stay Updated</h4>
                  <form onSubmit={handleNewsletterSubmit} className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                      required
                    />
                    <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <FiSend className="w-4 h-4" />
                    </button>
                  </form>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
                  <div className="flex space-x-3">
                    <SocialLink href="https://facebook.com" icon={<FaFacebookF />} label="Facebook" />
                    <SocialLink href="https://twitter.com" icon={<FaTwitter />} label="Twitter" />
                    <SocialLink href="https://instagram.com" icon={<FaInstagram />} label="Instagram" />
                    <SocialLink href="https://linkedin.com" icon={<FaLinkedinIn />} label="LinkedIn" />
                    <SocialLink href="https://youtube.com" icon={<FaYoutube />} label="YouTube" />
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-2">
                <h4 className="text-medium font-semibold mb-6 text-white">Navigation</h4>
                <ul className="space-y-3">
                  <FooterLink href="/" label="Home" />
                  <FooterLink href="/properties" label="Properties" />
                  <FooterLink href="/agents" label="Our Agents" />
                  <FooterLink href="/about" label="About Us" />
                  <FooterLink href="/blog" label="Blog & News" />
                  <FooterLink href="/contact" label="Contact Us" />
                </ul>
              </div>

              {/* Property Types */}
              <div className="lg:col-span-2">
                <h4 className="text-medium font-semibold mb-6 text-white">Property Types</h4>
                <ul className="space-y-3">
                  <FooterLink href="/properties?type=luxury-homes" label="Luxury Homes" />
                  <FooterLink href="/properties?type=penthouses" label="Penthouses" />
                  <FooterLink href="/properties?type=condos" label="Condominiums" />
                  <FooterLink href="/properties?type=estates" label="Estates" />
                  <FooterLink href="/properties?type=commercial" label="Commercial" />
                </ul>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-3">
                <h4 className="text-medium font-semibold mb-6 text-white">Contact Info</h4>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 mr-3 w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center">
                      <FiMapPin className="w-3 h-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors leading-relaxed">
                      123 Luxury Boulevard
                      <br />
                      Beverly Hills, CA 90210
                    </span>
                  </li>
                  <li className="flex items-center group">
                    <div className="flex-shrink-0 mr-3 w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center">
                      <FiPhone className="w-3 h-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <a href="tel:+13105551234" className="text-slate-300 hover:text-white transition-colors">
                      +1 (310) 555-1234
                    </a>
                  </li>
                  <li className="flex items-center group">
                    <div className="flex-shrink-0 mr-3 w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center">
                      <FiMail className="w-3 h-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <a href="mailto:info@luxuryestate.com" className="text-slate-300 hover:text-white transition-colors">
                      info@luxuryestate.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700/50 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-slate-400">
                <p>&copy; {currentYear} LuxuryEstate. All rights reserved.</p>
                <div className="flex space-x-6">
                  <Link href="/privacy" className="hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-white transition-colors text-sm">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="hover:text-white transition-colors text-sm">
                    Cookie Policy
                  </Link>
                </div>
              </div>
              <div className="text-slate-400 text-sm">Crafted with ❤️ for luxury living</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative w-11 h-11 bg-slate-800/50 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
    aria-label={label}
  >
    <span className="text-slate-300 group-hover:text-white transition-colors">{icon}</span>
  </a>
);

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink = ({ href, label }: FooterLinkProps) => (
  <li>
    <Link href={href} className="group flex items-center space-x-2 text-slate-300 hover:text-white transition-all duration-300 py-1">
      <span className="w-1.5 h-1.5 bg-slate-600 group-hover:bg-blue-400 rounded-full transition-colors"></span>
      <span>{label}</span>
    </Link>
  </li>
);

export default Footer;

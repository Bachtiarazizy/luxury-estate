"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiSearch, FiUsers, FiInfo, FiFileText, FiPhone } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    // Check if we're on the home page (Next.js routes)
    const checkHomePage = () => {
      setIsHomePage(window.location.pathname === "/" || window.location.pathname === "/index");
    };

    checkHomePage();

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Listen for route changes in Next.js
    const handleRouteChange = () => {
      checkHomePage();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Determine navbar styling based on page and scroll state
  const getNavbarClasses = () => {
    if (isScrolled || !isHomePage) {
      return "bg-gray-50/95 backdrop-blur-md shadow-lg border-b border-gray-200";
    }
    return "bg-transparent";
  };

  const getTextColor = () => {
    if (isScrolled || !isHomePage) {
      return "text-black";
    }
    return "text-white";
  };

  const getLogoColor = () => {
    if (isScrolled || !isHomePage) {
      return "text-blue-600";
    }
    return "text-white";
  };

  const getHoverStyles = () => {
    if (isScrolled || !isHomePage) {
      return "hover:bg-blue-50 hover:text-blue-600";
    }
    return "hover:bg-white/20 hover:text-white";
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${getNavbarClasses()}`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="group">
            <span className={`text-2xl lg:text-3xl font-bold transition-all duration-300 ${getLogoColor()} hover:scale-105`}>LuxuryEstate</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink href="/" icon={<FiHome />} label="Home" textColor={getTextColor()} hoverStyles={getHoverStyles()} />
            <NavLink href="/properties" icon={<FiSearch />} label="Properties" textColor={getTextColor()} hoverStyles={getHoverStyles()} />
            <NavLink href="/agents" icon={<FiUsers />} label="Agents" textColor={getTextColor()} hoverStyles={getHoverStyles()} />
            <NavLink href="/about" icon={<FiInfo />} label="About" textColor={getTextColor()} hoverStyles={getHoverStyles()} />
            <NavLink href="/blog" icon={<FiFileText />} label="Blog" textColor={getTextColor()} hoverStyles={getHoverStyles()} />
            <NavLink href="/contact" icon={<FiPhone />} label="Contact" textColor={getTextColor()} hoverStyles={getHoverStyles()} />
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
            {isMenuOpen ? <FiX className={`h-6 w-6 ${getTextColor()}`} /> : <FiMenu className={`h-6 w-6 ${getTextColor()}`} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />}

      {/* Mobile Navigation Panel - Always white background */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <span className="text-xl font-bold text-blue-600">Menu</span>
          <button onClick={closeMenu} className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50" aria-label="Close menu">
            <FiX className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col p-6 space-y-2">
          <MobileNavLink href="/" icon={<FiHome />} label="Home" onClick={closeMenu} />
          <MobileNavLink href="/properties" icon={<FiSearch />} label="Properties" onClick={closeMenu} />
          <MobileNavLink href="/agents" icon={<FiUsers />} label="Agents" onClick={closeMenu} />
          <MobileNavLink href="/about" icon={<FiInfo />} label="About" onClick={closeMenu} />
          <MobileNavLink href="/blog" icon={<FiFileText />} label="Blog" onClick={closeMenu} />
          <MobileNavLink href="/contact" icon={<FiPhone />} label="Contact" onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  textColor: string;
  hoverStyles: string;
}

const NavLink = ({ href, icon, label, textColor, hoverStyles }: NavLinkProps) => (
  <Link href={href} className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-300 ${hoverStyles} group ${textColor}`}>
    <span className="text-sm group-hover:scale-110 transition-transform duration-200">{icon}</span>
    <span className="font-medium">{label}</span>
  </Link>
);

interface MobileNavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const MobileNavLink = ({ href, icon, label, onClick }: MobileNavLinkProps) => (
  <Link href={href} className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group" onClick={onClick}>
    <span className="text-lg group-hover:scale-110 transition-transform duration-200">{icon}</span>
    <span className="font-medium">{label}</span>
  </Link>
);

export default Header;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiSearch, FiUsers, FiInfo, FiFileText, FiPhone } from "react-icons/fi";
import MobileNavbar from "./mobile-navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if current page is home page using Next.js pathname
  const isHomePage = pathname === "/" || pathname === "/index";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${getNavbarClasses()}`}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="group">
              <span className={`text-2xl lg:text-3xl font-bold transition-all duration-300 ${getLogoColor()} hover:scale-105`}>LuxuryEstate</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <NavLink href="/" icon={<FiHome />} label="Home" textColor={getTextColor()} hoverStyles={getHoverStyles()} isActive={pathname === "/"} />
              <NavLink href="/properties" icon={<FiSearch />} label="Properties" textColor={getTextColor()} hoverStyles={getHoverStyles()} isActive={pathname === "/properties"} />
              <NavLink href="/agents" icon={<FiUsers />} label="Agents" textColor={getTextColor()} hoverStyles={getHoverStyles()} isActive={pathname === "/agents"} />
              <NavLink href="/about" icon={<FiInfo />} label="About" textColor={getTextColor()} hoverStyles={getHoverStyles()} isActive={pathname === "/about"} />
              <NavLink href="/blog" icon={<FiFileText />} label="Blog" textColor={getTextColor()} hoverStyles={getHoverStyles()} isActive={pathname === "/blog"} />
              <NavLink href="/contact" icon={<FiPhone />} label="Contact" textColor={getTextColor()} hoverStyles={getHoverStyles()} isActive={pathname === "/contact"} />
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${isScrolled || !isHomePage ? "hover:bg-gray-100" : "hover:bg-gray-100/20"}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FiX className={`h-6 w-6 ${getTextColor()}`} /> : <FiMenu className={`h-6 w-6 ${getTextColor()}`} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Component */}
      <MobileNavbar isMenuOpen={isMenuOpen} isScrolled={isScrolled} isHomePage={isHomePage} closeMenu={closeMenu} />
    </>
  );
};

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  textColor: string;
  hoverStyles: string;
  isActive?: boolean;
}

const NavLink = ({ href, icon, label, textColor, hoverStyles, isActive }: NavLinkProps) => {
  // Override text color when active - always blue for active links
  const linkTextColor = isActive ? "text-blue-600" : textColor;
  const activeBg = isActive ? "bg-blue-100" : "";

  return (
    <Link href={href} className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-300 ${hoverStyles} group ${linkTextColor} ${activeBg} ${isActive ? "font-semibold" : ""}`}>
      <span className="text-sm group-hover:scale-110 transition-transform duration-200">{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default Header;

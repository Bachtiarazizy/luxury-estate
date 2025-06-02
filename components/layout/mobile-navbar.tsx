"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiX, FiHome, FiSearch, FiUsers, FiInfo, FiFileText, FiPhone } from "react-icons/fi";

interface MobileNavbarProps {
  isMenuOpen: boolean;
  isScrolled: boolean;
  isHomePage: boolean;
  closeMenu: () => void;
}

const MobileNavbar = ({ isMenuOpen, isScrolled, isHomePage, closeMenu }: MobileNavbarProps) => {
  const pathname = usePathname();

  // Mobile panel background styling
  const getMobilePanelClasses = () => {
    if (isScrolled || !isHomePage) {
      return "bg-gray-50/95 backdrop-blur-md";
    }
    return "bg-white";
  };

  return (
    <>
      {/* Mobile Navigation Overlay */}
      {isMenuOpen && <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />}

      {/* Mobile Navigation Panel - Dynamic background based on scroll state */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-100 ${getMobilePanelClasses()} shadow-2xl transform transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Mobile Header */}
        <div className={`flex items-center justify-between p-6 border-b ${isScrolled || !isHomePage ? "border-gray-200" : "border-gray-100"}`}>
          <span className="text-xl font-bold text-blue-600">Menu</span>
          <button onClick={closeMenu} className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50" aria-label="Close menu">
            <FiX className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col p-6 space-y-2">
          <MobileNavLink href="/" icon={<FiHome />} label="Home" isActive={pathname === "/"} onClick={closeMenu} />
          <MobileNavLink href="/properties" icon={<FiSearch />} label="Properties" isActive={pathname === "/properties"} onClick={closeMenu} />
          <MobileNavLink href="/agents" icon={<FiUsers />} label="Agents" isActive={pathname === "/agents"} onClick={closeMenu} />
          <MobileNavLink href="/about" icon={<FiInfo />} label="About" isActive={pathname === "/about"} onClick={closeMenu} />
          <MobileNavLink href="/blog" icon={<FiFileText />} label="Blog" isActive={pathname === "/blog"} onClick={closeMenu} />
          <MobileNavLink href="/contact" icon={<FiPhone />} label="Contact" isActive={pathname === "/contact"} onClick={closeMenu} />
        </nav>
      </div>
    </>
  );
};

interface MobileNavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const MobileNavLink = ({ href, icon, label, isActive, onClick }: MobileNavLinkProps) => (
  <Link
    href={href}
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 group ${isActive ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-700"}`}
    onClick={onClick}
  >
    <span className="text-lg group-hover:scale-110 transition-transform duration-200">{icon}</span>
    <span className="font-medium">{label}</span>
  </Link>
);

export default MobileNavbar;

import React from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({ scrollY, isMenuOpen, setIsMenuOpen }) => {
  // Smooth scroll handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen && setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Speakers", id: "speakers" },
    { label: "About", id: "about" },
    { label: "Register", id: "register" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 transition-all duration-500">
      <div
        className={`bg-black/90 backdrop-blur-xl border-b transition-all duration-500 ${
          scrollY > 50
            ? "border-red-600/30 shadow-2xl shadow-red-600/10"
            : "border-red-600/10"
        }`}
      >
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-1 animate-pulse select-none">
            <span className="text-red-600 drop-shadow-lg">TED</span>
            <span className="text-red-500 text-lg sm:text-xl align-top">x</span>
            <span className="text-white ml-1">CUSAT</span>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative group hover:text-red-500 transition-all duration-300 font-medium focus:outline-none px-2 py-1 rounded-lg focus-visible:ring-2 focus-visible:ring-red-600"
                onClick={(e) => handleNavClick(e, item.id)}
                tabIndex={0}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300 rounded"></span>
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 transition"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="text-red-600 w-7 h-7" /> : <Menu className="text-red-600 w-7 h-7" />}
          </button>
        </div>
      </div>
      {/* Mobile Nav Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-xl z-50 transition-all duration-500 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ transitionProperty: "opacity" }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-red-600/20">
            <div className="text-2xl font-bold tracking-tight flex items-center gap-1">
              <span className="text-red-600">TED</span>
              <span className="text-red-500 text-lg align-top">x</span>
              <span className="text-white ml-1">CUSAT</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 transition"
              aria-label="Close menu"
            >
              <X className="text-red-600 w-7 h-7" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="w-full max-w-xs text-center py-3 rounded-xl text-lg font-medium text-white hover:bg-red-600/10 hover:text-red-400 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                onClick={(e) => handleNavClick(e, item.id)}
                tabIndex={0}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
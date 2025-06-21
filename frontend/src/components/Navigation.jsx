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

  return (
    <nav className="fixed top-0 w-full z-40 transition-all duration-500">
      <div
        className={`bg-black/90 backdrop-blur-xl border-b transition-all duration-500 ${
          scrollY > 50
            ? "border-red-600/30 shadow-2xl shadow-red-600/10"
            : "border-red-600/10"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold tracking-tight">
            <span className="text-red-600 drop-shadow-lg">TED</span>
            <span className="text-red-500 text-xl align-top ml-1 animate-pulse">x</span>
            <span className="text-white ml-1">CUSAT</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {["Home", "Speakers", "About", "Register", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group hover:text-red-500 transition-all duration-300 font-medium focus:outline-none"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.toLowerCase());
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                      setIsMenuOpen && setIsMenuOpen(false);
                    }
                  }}
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            )}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
          >
            {isMenuOpen ? <X className="text-red-600" /> : <Menu className="text-red-600" />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-black/95 backdrop-blur-xl border-b border-red-600/20 transition-all duration-500 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-6 py-4 space-y-4">
          {["Home", "Speakers", "About", "Register", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block hover:text-red-500 transition-colors duration-300 font-medium focus:outline-none"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item.toLowerCase());
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen && setIsMenuOpen(false);
                  }
                }}
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
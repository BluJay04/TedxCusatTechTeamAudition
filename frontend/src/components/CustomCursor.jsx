import React from "react";

const CustomCursor = ({ mousePosition, isMenuOpen }) => (
  <div
    className="fixed pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
    style={{
      left: mousePosition.x - 20,
      top: mousePosition.y - 20,
      width: isMenuOpen ? 56 : 32,
      height: isMenuOpen ? 56 : 32,
      borderRadius: "50%",
      border: "3px solid #dc2626",
      background: "rgba(220,38,38,0.25)",
      boxShadow:
        "0 0 24px 6px #dc2626, 0 0 0 4px rgba(220,38,38,0.15)",
      transform: `scale(${isMenuOpen ? 1.3 : 1})`,
    }}
  />
);

export default CustomCursor;
// Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="mobile-header">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <button className="wallet-btn mobile">Connect to wallet</button>
      </div>

      {/* 导航菜单 */}
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Main</Link>
        <Link to="/marketplace" onClick={() => setIsMenuOpen(false)}>Marketplace</Link>
        <Link to="/creator" onClick={() => setIsMenuOpen(false)}>Creator</Link>
        <Link to="/community" onClick={() => setIsMenuOpen(false)}>Community</Link>
        <button className="wallet-btn desktop">Connect to wallet</button>
      </nav>
    </header>
  );
};

export default Header;

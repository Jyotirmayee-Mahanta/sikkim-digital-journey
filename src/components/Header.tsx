
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Culture", path: "/culture" },
    { name: "History", path: "/history" },
    { name: "Nature", path: "/nature" },
    { name: "People", path: "/people" },
    { name: "Experiences", path: "/experiences" },
    { name: "Getting Around", path: "/transport" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-sikkim-cream/90 backdrop-blur-md shadow-sm prayer-flag-border">
      <div className="sikkim-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-sikkim-charcoal">Sikkim Journey</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sikkim-charcoal hover:text-sikkim-red transition-colors duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-sikkim-red after:origin-left after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-sikkim-charcoal p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 animate-fade-in">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block px-2 py-1 text-sikkim-charcoal hover:bg-sikkim-cream hover:text-sikkim-red transition-colors duration-200 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

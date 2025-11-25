import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-amber-600 ">
          RecipeHub
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><Link to="/" className="hover:text-orange-100">Home</Link></li>
          
          {/* Dropdown */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-green-600 flex items-center"
            >
              Recipes ▼
            </button>

            {dropdownOpen && (
              <ul className="absolute bg-white shadow-lg mt-3 rounded-lg w-40">
                <li className="px-4 py-2 hover:bg-green-50">
                  <Link to="/breakfast">Breakfast</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-50">
                  <Link to="/lunch">Lunch</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-50">
                  <Link to="/dinner">Dinner</Link>
                </li>
              </ul>
            )}
          </li>

          <li><Link to="/about" className="hover:text-green-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className="md:hidden bg-white shadow-md text-lg font-medium px-6 py-4 space-y-4">
          <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>

          {/* Mobile Dropdown */}
          <li>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left"
            >
              Recipes ▼
            </button>

            {dropdownOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li><Link to="/breakfast">Breakfast</Link></li>
                <li><Link to="/lunch">Lunch</Link></li>
                <li><Link to="/dinner">Dinner</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

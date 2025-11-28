import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-600 ">
          RecipeHub
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-orange-600">
          <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
          
          {/* Dropdown */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-orange-600 flex items-center gap-1"
            >
              Recipes 
              <svg
            className={`w-4 h-4 transition ${dropdownOpen ? "rotate-180" : ""}`}
              fill="none"
            stroke="currentColor"
           strokeWidth="3"
             viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
            </button>

            {dropdownOpen && (
              <ul className="absolute bg-white shadow-lg mt-3 rounded-lg w-40">
                <li className="px-4 py-2 hover:bg-orange-50">
                  <Link to="/breakfast">Breakfast</Link>
                </li>
                <li className="px-4 py-2 hover:bg-orange-50">
                  <Link to="/lunch">Lunch</Link>
                </li>
                <li className="px-4 py-2 hover:bg-orange-50">
                  <Link to="/dinner">Dinner</Link>
                </li>
              </ul>
            )}
          </li>

          <li><Link to="/about" className="hover:text-orange-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-orange-600">Contact</Link></li>
         
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
  className="w-6 h-6"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
</svg>

        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className="md:hidden bg-white text-orange-600 shadow-md text-lg font-medium px-6 py-4 space-y-4">
          <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>

          {/* Mobile Dropdown */}
          <li>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left"
            >
              Recipes 
              <svg
  className={`w-5 h-5 transition ${dropdownOpen ? "rotate-180" : ""}`}
  fill="none"
  stroke="currentColor"
  strokeWidth="3"     // <-- BOLDER LINE
  viewBox="0 0 24 24"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
</svg>

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

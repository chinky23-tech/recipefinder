import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-orange-400 to-red-500 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white hover:text-orange-100 transition-colors">
          🍳 RecipeHub
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8">
          <Link to="/" className="text-white hover:text-orange-200 transition-colors font-medium">Home</Link>
          
          <div className="relative group">
            <button className="text-white hover:text-orange-200 transition-colors font-medium">Recipes</button>
            <div className="absolute left-0 mt-0 w-40 bg-white text-orange-600 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/breakfast" className="block px-4 py-2 hover:bg-orange-100 rounded-t-lg">Breakfast</Link>
              <Link to="/lunch" className="block px-4 py-2 hover:bg-orange-100">Lunch</Link>
              <Link to="/dinner" className="block px-4 py-2 hover:bg-orange-100 rounded-b-lg">Dinner</Link>
            </div>
          </div>

          <Link to="/about" className="text-white hover:text-orange-200 transition-colors font-medium">About</Link>
          <Link to="/contact" className="text-white hover:text-orange-200 transition-colors font-medium">Contact</Link>
        </nav>

        {/* Desktop Login Button */}
        <Link to="/login" className="hidden lg:block bg-white text-orange-500 px-4 py-2 rounded-lg font-medium hover:bg-orange-100 transition-colors">
          Login
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-orange-500 px-4 py-3 space-y-3">
          <Link to="/" className="block text-white hover:text-orange-100 font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
          
          <div>
            <button
              className="text-white font-medium w-full text-left"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Recipes {dropdownOpen ? "▼" : "▶"}
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/breakfast" className="block text-white hover:text-orange-100" onClick={() => setMobileOpen(false)}>Breakfast</Link>
                <Link to="/lunch" className="block text-white hover:text-orange-100" onClick={() => setMobileOpen(false)}>Lunch</Link>
                <Link to="/dinner" className="block text-white hover:text-orange-100" onClick={() => setMobileOpen(false)}>Dinner</Link>
              </div>
            )}
          </div>

          <Link to="/about" className="block text-white hover:text-orange-100 font-medium" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/contact" className="block text-white hover:text-orange-100 font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link to="/login" className="block text-white hover:text-orange-100 font-medium" onClick={() => setMobileOpen(false)}>Login</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

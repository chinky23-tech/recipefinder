import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="navbar bg-linear-to-r from-orange-400 to-red-500 shadow-lg fixed top-0 left-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          {mobileOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
              <li>
                <details open={dropdownOpen} onToggle={() => setDropdownOpen(!dropdownOpen)}>
                  <summary>Recipes</summary>
                  <ul className="p-2">
                    <li><Link to="/breakfast" onClick={() => setMobileOpen(false)}>Breakfast</Link></li>
                    <li><Link to="/lunch" onClick={() => setMobileOpen(false)}>Lunch</Link></li>
                    <li><Link to="/dinner" onClick={() => setMobileOpen(false)}>Dinner</Link></li>
                  </ul>
                </details>
              </li>
              <li><Link to="/about" onClick={() => setMobileOpen(false)}>About</Link></li>
              <li><Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
              <li><Link to="/login" onClick={() => setMobileOpen(false)}>Login</Link></li>
            </ul>
          )}
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold text-white hover:bg-white hover:text-orange-500 transition-colors">
          🍳 RecipeHub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/" className="text-white hover:text-orange-200 transition-colors">Home</Link></li>
          <li>
            <details open={dropdownOpen} onToggle={() => setDropdownOpen(!dropdownOpen)}>
              <summary className="text-white hover:text-orange-200 transition-colors">Recipes</summary>
              <ul className="p-2 bg-white text-orange-600 rounded-box shadow-lg">
                <li><Link to="/breakfast">Breakfast</Link></li>
                <li><Link to="/lunch">Lunch</Link></li>
                <li><Link to="/dinner">Dinner</Link></li>
              </ul>
            </details>
          </li>
          <li><Link to="/about" className="text-white hover:text-orange-200 transition-colors">About</Link></li>
          <li><Link to="/contact" className="text-white hover:text-orange-200 transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn bg-white text-orange-500 hover:bg-orange-100 border-none">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

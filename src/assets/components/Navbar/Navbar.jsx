import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "hover:text-green-600 transition duration-300";

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-green-700">
          Uttarakhand Tourism
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <NavLink to="/" className={linkClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>About</NavLink>
          </li>
          <li>
            <NavLink to="/chardham" className={linkClass}>Char Dham</NavLink>
          </li>
          <li>
            <NavLink to="/activities" className={linkClass}>Activities</NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={linkClass}>Contacts</NavLink>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
            <li>
              <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/chardham" onClick={() => setOpen(false)}>Char Dham</NavLink>
            </li>
            <li>
              <NavLink to="/activities" onClick={() => setOpen(false)}>Activities</NavLink>
            </li>
            <li>
              <NavLink to="/contacts" onClick={() => setOpen(false)}>Contacts</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block transition-colors ${
      isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
    }`;

  return (
    <nav className="w-full border-b border-[#e4e6df] bg-[#f8f7f2eb]">
      {/* Main navbar row */}
      <div className="flex min-h-20 w-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <NavLink to="/" className="flex shrink-0 items-center gap-x-3">
          <i className="ri-restaurant-2-line text-2xl"></i>
          <span className="text-xl font-bold tracking-wide">Chefie</span>
        </NavLink>

        {/* Search - desktop and tablet */}
        <div className="relative hidden flex-1 sm:block sm:max-w-xs lg:max-w-sm">
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>

          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm outline-none transition focus:border-black"
          />
        </div>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-x-6 text-base font-medium md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/create-recipes" className={navLinkClass}>
            Create
          </NavLink>

          <NavLink to="/fav" className={navLinkClass}>
            Favourite
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4e6df] text-2xl md:hidden"
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* Mobile search */}
      <div className="px-4 pb-4 sm:hidden">
        <div className="relative">
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>

          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm outline-none transition focus:border-black"
          />
        </div>
      </div>

      {/* Mobile navigation links */}
      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-[#e4e6df] px-6 py-4 text-base font-medium md:hidden">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/create-recipes"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Create
          </NavLink>

          <NavLink
            to="/fav"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Favourite
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

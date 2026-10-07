import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="flex h-20 border-b border-[#e4e6df] w-full items-center justify-between bg-[#f8f7f2eb] px-6">
      {/* Logo */}
      <div className="flex items-center gap-x-3">
        <i className="ri-restaurant-2-line text-2xl"></i>
        <span className="text-xl font-bold tracking-wide">Chefie</span>
      </div>

      {/* Search */}
      <div className="relative ">
        <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>

        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-52 rounded-full border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm outline-none transition focus:border-black"
        />
      </div>

      {/* Navigation */}
      <div className="flex gap-x-6 text-base font-medium ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition-colors ${
              isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/create-recipes"
          className={({ isActive }) =>
            `transition-colors ${
              isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
            }`
          }
        >
          Create
        </NavLink>

        <NavLink
          to="/fav"
          className={({ isActive }) =>
            `transition-colors ${
              isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
            }`
          }
        >
          Favourite
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

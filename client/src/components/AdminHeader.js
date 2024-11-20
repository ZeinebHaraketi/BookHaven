"use client";

import { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const AdminHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="logo"
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-blue-800">Book Haven</span>
        </a>

        {/* Navigation & Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Notification Icon */}
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <FaBell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1">
              5
            </span>
          </button>

          {/* User Profile */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100"
              onClick={toggleMenu}
            >
              <FaUserCircle size={24} className="text-gray-600" />
              <span className="hidden lg:block text-blue-700 font-semibold">
                Jason Doe
              </span>
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="/logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;

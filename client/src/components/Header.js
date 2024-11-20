"use client";

import Link from "next/link";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en"); // Default language: English
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const changeLanguage = (lang) => setLanguage(lang); // Change language function

  // Translations for navigation links
  const translations = {
    en: {
      books: "Books",
      clubs: "Clubs",
      events: "Events",
      shop: "Shop",
      login: "Login",
      searchPlaceholder: "Search...",
    },
    fr: {
      books: "Livres",
      clubs: "Clubs",
      events: "Événements",
      shop: "Boutique",
      login: "Se connecter",
      searchPlaceholder: "Rechercher...",
    },
    ar: {
      books: "الكتب",
      clubs: "الأندية",
      events: "الفعاليات",
      shop: "المتجر",
      login: "تسجيل الدخول",
      searchPlaceholder: "بحث...",
    },
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 ${
        darkMode ? "bg-white text-gray-800" : "bg-blue-100 text-blue-900"
      } shadow-lg transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // Replace with your logo's path
            alt="Book Haven Logo"
            className="h-10 w-auto"
          />
          <h1
            className={`text-2xl font-bold ${
              darkMode ? "text-blue-800" : "text-teal-900"
            }`}
          >
            Book Haven
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#books" className="hover:text-blue-500 transition-colors">
            {translations[language].books}
          </a>
          <a href="#clubs" className="hover:text-blue-500 transition-colors">
            {translations[language].clubs}
          </a>
          <a href="#events" className="hover:text-blue-500 transition-colors">
            {translations[language].events}
          </a>
          <a href="#shop" className="hover:text-blue-500 transition-colors">
            {translations[language].shop}
          </a>
        </nav>

        {/* Dark Mode, Language Selector, Search Bar, and Login */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden md:block">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={translations[language].searchPlaceholder}
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          {/* Dark Mode Button */}
          <button
            className="p-2 rounded-full hover:bg-blue-300 dark:hover:bg-gray-300 transition"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <FaSun size={20} className="text-yellow-400" />
            ) : (
              <FaMoon size={20} className="text-blue-800" />
            )}
          </button>
          {/* Language Selector */}
          <div className="relative">
            <button
              className="p-2 rounded-md hover:bg-blue-300 dark:hover:bg-gray-300 transition"
              onClick={toggleMenu}
            >
              🌐
            </button>
            {menuOpen && (
              <div
                className={`absolute right-0 mt-2 py-2 w-32 bg-white dark:bg-gray-200 rounded-md shadow-xl flex flex-col items-center`}
              >
                <button
                  onClick={() => changeLanguage("en")}
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 dark:hover:bg-blue-200 text-center"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("fr")}
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 dark:hover:bg-blue-200 text-center"
                >
                  Français
                </button>
                <button
                  onClick={() => changeLanguage("ar")}
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 dark:hover:bg-blue-200 text-center"
                >
                  العربية
                </button>
              </div>
            )}
          </div>
          {/* Login Button */}
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
          >
            {translations[language].login}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 py-4 space-y-2 ${
            darkMode ? "bg-white text-gray-800" : "bg-blue-100 text-blue-900"
          }`}
        >
          <a
            href="#books"
            className="block hover:text-blue-500 transition-colors"
          >
            {translations[language].books}
          </a>
          <a
            href="#clubs"
            className="block hover:text-blue-500 transition-colors"
          >
            {translations[language].clubs}
          </a>
          <a
            href="#events"
            className="block hover:text-blue-500 transition-colors"
          >
            {translations[language].events}
          </a>
          <a
            href="#shop"
            className="block hover:text-blue-500 transition-colors"
          >
            {translations[language].shop}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

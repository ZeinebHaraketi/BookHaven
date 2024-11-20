"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r bg-blue-100 text-blue-900  py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* About Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Book Haven</h2>
                    <p className="text-gray-200">
                        Discover a world of knowledge, creativity, and imagination with Book Haven. Join
                        us to explore amazing books, clubs, and events.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#books" className="hover:underline">
                                Books
                            </a>
                        </li>
                        <li>
                            <a href="#clubs" className="hover:underline">
                                Clubs
                            </a>
                        </li>
                        <li>
                            <a href="#events" className="hover:underline">
                                Events
                            </a>
                        </li>
                        <li>
                            <a href="#shop" className="hover:underline">
                                Shop
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter and Socials */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
                    <p className="text-gray-200 mb-4">
                        Subscribe to our newsletter for the latest updates and exclusive offers.
                    </p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-400 px-6 py-2 rounded-r-lg text-white font-bold transition"
                        >
                            Subscribe
                        </button>
                    </form>
                    <div className="flex space-x-4 mt-6">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-500 hover:text-white transition"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-500 hover:text-white transition"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white text-pink-500 hover:bg-pink-500 hover:text-white transition"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white text-blue-800 hover:bg-blue-700 hover:text-white transition"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-500 pt-6 text-center">
                <p className="text-gray-700">
                    © {new Date().getFullYear()} Book Haven. All Rights Reserved.
                </p>
                <a href="#contact" className="text-700-300 hover:underline">
                    Contact Us
                </a>
            </div>
        </footer>
    );
};

export default Footer;

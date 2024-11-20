"use client";

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
    const slides = [
        {
            image: "https://via.placeholder.com/1200x500.png?text=Explore+Books",
            title: "Explore a World of Books",
            description:
                "Discover your next adventure with our diverse collection of books from all genres.",
        },
        {
            image: "https://via.placeholder.com/1200x500.png?text=Join+Clubs",
            title: "Join Our Book Clubs",
            description:
                "Connect with fellow book enthusiasts, share your thoughts, and enjoy engaging discussions.",
        },
        {
            image: "https://via.placeholder.com/1200x500.png?text=Attend+Events",
            title: "Attend Exciting Events",
            description:
                "Participate in book readings, author meet-and-greets, and creative workshops.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    // Autoplay functionality
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-lg shadow-lg">
            {/* Slides */}
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0"
                        style={{ width: "100%" }}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-64 sm:h-96 object-cover"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
                            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
                                {slide.title}
                            </h2>
                            <p className="text-sm sm:text-lg text-center max-w-xl">
                                {slide.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 left-4 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
            >
                <FaChevronLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 -translate-y-1/2 right-4 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
            >
                <FaChevronRight size={20} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                            index === currentIndex
                                ? "bg-blue-500"
                                : "bg-gray-300"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

"use client";

import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Events = () => {
    const events = [
        {
            title: "Book Reading Marathon",
            date: "Dec 10, 2024",
            location: "Central Library, New York",
            description:
                "Join us for an exhilarating book reading marathon featuring guest authors, fun challenges, and more!",
            image: "https://via.placeholder.com/400x300.png?text=Book+Event",
        },
        {
            title: "Poetry Slam Night",
            date: "Jan 15, 2025",
            location: "Downtown Auditorium, Chicago",
            description:
                "A night of powerful poetry performances by talented local artists. Don't miss this inspiring event.",
            image: "https://via.placeholder.com/400x300.png?text=Poetry+Event",
        },
        {
            title: "Kids' Storytelling Workshop",
            date: "Feb 20, 2025",
            location: "Community Hall, San Francisco",
            description:
                "A fun and educational workshop where kids can explore their creativity through storytelling.",
            image: "https://via.placeholder.com/400x300.png?text=Kids+Workshop",
        },
    ];

    return (
        <section className="py-12 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-white text-center mb-8">
                    Upcoming Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300 flex flex-col"
                        >
                            {/* Event Image */}
                            <div className="relative">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-52 object-cover"
                                />
                                {/* Date Badge */}
                                <div className="absolute top-4 left-4 bg-blue-500 text-white py-1 px-3 rounded-full text-sm font-semibold shadow-lg">
                                    <FaCalendarAlt className="inline-block mr-2" />
                                    {event.date}
                                </div>
                            </div>
                            {/* Event Details */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                                <div className="flex items-center text-gray-600 text-sm mt-2">
                                    <FaMapMarkerAlt className="mr-2" />
                                    <span>{event.location}</span>
                                </div>
                                <p className="mt-4 text-gray-700 line-clamp-3 flex-1">
                                    {event.description}
                                </p>
                                <div className="mt-4">
                                    <button className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;

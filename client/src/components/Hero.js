"use client";

const Hero = () => {
    return (
        <section
            id="hero-section"
            className="relative w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{
                backgroundImage: "url('/lib-hero.png')", // Replace with your image path
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            
            {/* Content */}
            <div className="relative z-10 w-full text-center text-white">
                <h1 className="text-5xl font-extrabold">
                    Welcome to <span className="text-blue-400">Book Haven</span>
                </h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Discover a world of knowledge, imagination, and creativity.
                    Explore books, join clubs, attend events, and immerse
                    yourself in the ultimate reading experience.
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                    <a
                        href="#explore"
                        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 transition"
                    >
                        Explore Books
                    </a>
                    <a
                        href="#clubs"
                        className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md shadow-md hover:bg-gray-300 transition"
                    >
                        Join a Club
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

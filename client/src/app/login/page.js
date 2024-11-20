"use client";

import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill in both fields.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      const { token, userId, role } = response.data;

      localStorage.setItem("authToken", token);
      localStorage.setItem("userRole", role);

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You are now logged in.",
      });

      window.location.href = "/";
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "An error occurred. Please try again.",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Login
        </h2>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4 relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2/4 transform -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25V6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25zM3.75 6.75l8.25 6.75 8.25-6.75"
                  />
                </svg>
              </span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2/4 transform -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5v-3a4.5 4.5 0 00-9 0v3m-1.5 0h12a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-12a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5z"
                  />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"} // Toggle input type
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
              <span
                className="absolute right-3 top-2/4 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)} // Toggle visibility
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}

              </span>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition ${
              loading ? "opacity-70 cursor-wait" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

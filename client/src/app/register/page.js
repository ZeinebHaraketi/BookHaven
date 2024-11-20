"use client";

import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import { FaUserAlt, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaCloudUploadAlt } from "react-icons/fa";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleAvatarDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            setAvatar(file);
            setAvatarPreview(URL.createObjectURL(file));
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid File",
                text: "Please upload a valid image file.",
            });
        }
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setAvatar(file);
            setAvatarPreview(URL.createObjectURL(file));
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid File",
                text: "Please upload a valid image file.",
            });
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            Swal.fire({
                icon: "warning",
                title: "Missing Fields",
                text: "Please fill in all fields.",
            });
            return;
        }

        if (password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Password Mismatch",
                text: "Passwords do not match.",
            });
            return;
        }

        const formData = new FormData();
        formData.append("nom", name.split(" ")[0]);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("avatar", avatar);

        setLoading(true);

        try {
            const response = await axios.post(
                "http://localhost:5000/register",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            Swal.fire({
                icon: "success",
                title: "Account Created",
                text: "Your account has been created successfully!",
            });
            console.log(response.data);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: error.response?.data?.message || "An error occurred. Please try again.",
            });
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 min-h-screen flex justify-center items-start pt-24 pb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">
                    Create an Account
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Join us to explore an amazing world of opportunities.
                </p>

                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="relative">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <div className="flex items-center mt-1">
                            <span className="absolute left-3 text-gray-400">
                                <FaUserAlt />
                            </span>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full pl-10 py-3 px-4 border border-gray-300 rounded-lg"
                                placeholder="Enter your full name"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <div className="flex items-center mt-1">
                            <span className="absolute left-3 text-gray-400">
                                <FaEnvelope />
                            </span>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 py-3 px-4 border border-gray-300 rounded-lg"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="flex items-center mt-1">
                            <span className="absolute left-3 text-gray-400">
                                <FaLock />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 py-3 px-4 border border-gray-300 rounded-lg"
                                placeholder="Enter your password"
                            />
                            <span
                                className="absolute right-3 text-gray-400 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <label
                            htmlFor="confirm-password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <div className="flex items-center mt-1">
                            <span className="absolute left-3 text-gray-400">
                                <FaLock />
                            </span>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full pl-10 py-3 px-4 border border-gray-300 rounded-lg"
                                placeholder="Confirm your password"
                            />
                            <span
                                className="absolute right-3 text-gray-400 cursor-pointer"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <div
                        className="relative border-dashed border-2 border-gray-300 p-6 rounded-lg text-center cursor-pointer"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleAvatarDrop}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {avatarPreview ? (
                            <img
                                src={avatarPreview}
                                alt="Avatar Preview"
                                className="w-24 h-24 mx-auto rounded-full object-cover"
                            />
                        ) : (
                            <>
                                <FaCloudUploadAlt className="text-indigo-600 text-4xl mx-auto" />
                                <p className="mt-2 text-gray-600">
                                    Drag & Drop your avatar here or click to upload
                                </p>
                            </>
                        )}
                    </div>

                    <button
                        type="submit"
                        className={`w-full py-3 bg-indigo-600 text-white font-bold rounded-lg ${
                            loading ? "opacity-70 cursor-wait" : ""
                        }`}
                        disabled={loading}
                    >
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
}

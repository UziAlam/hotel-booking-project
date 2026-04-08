import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import axios from "axios";

const Login = () => {
    const { login, setShowLogin, BASE_URL } = useAppContext();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const url = isLogin
            ? `${BASE_URL}/api/auth/login`
            : `${BASE_URL}/api/auth/register`;

        const payload = isLogin
            ? { email: formData.email, password: formData.password }
            : { username: formData.username, email: formData.email, password: formData.password };

        const { data } = await axios.post(url, payload);

        if (data.success) {
            login(data.user, data.token);
            setShowLogin(false);
        } else {
            setError(data.message);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-8 relative">

                {/* Close Button */}
                <button onClick={() => setShowLogin(false)} className="absolute top-4 right-4">
                    <img src={assets.closeIcon} alt="Close" className="h-5 invert" />
                </button>

                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img src={assets.logo} alt="logo" className="h-9 invert opacity-80" />
                </div>

                <h2 className="text-2xl font-playfair text-center mb-1">
                    {isLogin ? "Welcome Back" : "Create Account"}
                </h2>
                <p className="text-gray-500 text-sm text-center mb-6">
                    {isLogin ? "Sign in to continue" : "Sign up to get started"}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {!isLogin && (
                        <div>
                            <label className="text-sm text-gray-600 mb-1 block">Full Name</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-black transition"
                            />
                        </div>
                    )}

                    <div>
                        <label className="text-sm text-gray-600 mb-1 block">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@example.com"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-black transition"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600 mb-1 block">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-black transition"
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="bg-black text-white rounded-full py-2.5 text-sm font-medium mt-1 hover:bg-gray-800 transition"
                    >
                        {isLogin ? "Login" : "Create Account"}
                    </button>
                </form>

                <p className="text-sm text-center text-gray-500 mt-5">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <span
                        onClick={() => { setIsLogin(!isLogin); setError(""); }}
                        className="text-black font-medium cursor-pointer underline"
                    >
                        {isLogin ? "Sign up" : "Sign in"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;

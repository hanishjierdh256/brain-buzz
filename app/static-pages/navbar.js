'use client';
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-blue-500 shadow-md">
            {/* Logo */}
            <div className="flex items-center text-white text-xl font-bold">
                <img
                    src="/site_logo.png"
                    alt="Brain Buzz Logo"
                    className="w-8 h-8 mr-3"
                />
                <span>Brain Buzz</span>
            </div>

            {/* Navbar Links */}
            <ul className="hidden md:flex space-x-8">
                <li><Link
                    href="/"
                    className="text-white hover:text-yellow-300"
                >Home</Link></li>
                <li><Link
                    href="/categories-page"
                    className="text-white hover:text-yellow-300"
                >Categories</Link></li>
                <li><Link
                    href="#leaderboard"
                    className="text-white hover:text-yellow-300"
                >Leaderboard</Link></li>
                <li><Link
                    href="/about-page"
                    className="text-white hover:text-yellow-300"
                >About</Link></li>
            </ul>

            {/* Theme Toggle */}
            <div>
                <button className="text-white text-2xl">
                    🌙
                </button>
            </div>
        </nav>
    );
};


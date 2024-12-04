'use client';
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-blue-800 shadow-md">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center text-white text-xl font-bold">
                    <Image
                        src="/site_logo.png"
                        alt="Brain Buzz Logo"
                        className="w-8 h-8 mr-3"
                        width={32}
                        height={32}
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
                        href="/leaderboard-page"
                        className="text-white hover:text-yellow-300"
                    >Leaderboard</Link></li>
                    <li><Link
                        href="/about-page"
                        className="text-white hover:text-yellow-300"
                    >About</Link></li>
                </ul>

                {/* Sign In Button */}
                <div>
                    <Link href="/login-page">
                        <button className="text-white bg-yellow-600 px-6 py-2 rounded-full hover:bg-yellow-400">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

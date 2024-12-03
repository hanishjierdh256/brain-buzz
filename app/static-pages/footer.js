'use client';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-blue-500 text-white py-6">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h4 className="text-lg font-semibold">About Brain Buzz</h4>
                    <p className="text-sm">
                        Brain Buzz is your go-to place to challenge your trivia skills across various categories. Test your knowledge and prove you’re the ultimate trivia master!
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-4">
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                        Facebook
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                        Twitter
                    </Link>
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                        Instagram
                    </Link>
                </div>

                {/* Contact Info */}
                <div className="text-sm">
                    <p>Contact us at: <Link href="mailto:info@brainbuzz.com" className="text-white hover:text-yellow-300">info@brainbuzz.com</Link></p>
                </div>

                {/* Copyright */}
                <div className="mt-4 text-sm">
                    <p>&copy; 2024 Brain Buzz. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

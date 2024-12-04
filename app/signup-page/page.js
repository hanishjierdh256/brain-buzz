'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Signup() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Create an Account Does not work yet</h1>

                {/* Signup Form */}
                <form className="space-y-4">
                    {/* Full Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your full name"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label htmlFor="confirm-password" className="block text-gray-700 font-medium">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm your password"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-4 text-gray-500">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Social Signup Buttons */}
                <div className="flex flex-col space-y-4">
                    <button
                        type="button"
                        className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                    >
                        <Image
                            src="/icons/google-icon.svg"
                            alt="Google"
                            className="h-5 w-5 mr-2"
                            width={50}
                            height={50}
                        />
                        Sign Up with Google
                    </button>
                    <button
                        type="button"
                        className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                    >
                        <Image
                            src="/icons/facebook-icon.svg"
                            alt="Facebook"
                            className="h-5 w-5 mr-2"
                            width={50}
                            height={50}
                        />
                        Sign Up with Facebook
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{' '}
                    <Link href="/login-page"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

'use client';
import Link from 'next/link';
import Image from 'next/image';
export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Login to Brain Buzz Does not work yet</h1>

                {/* Login Form */}
                <form className="space-y-4">
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

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-4 text-gray-500">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Social Login Buttons */}
                <div className="flex flex-col space-y-4">
                    <button
                        type="button"
                        className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                    >
                        <Image
                            src="/icons/google-icon.png"
                            alt="Google"
                            className="h-5 w-5 mr-2"
                            width={50}
                            height={50}
                        />
                        Login with Google
                    </button>
                    <button
                        type="button"
                        className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                    >
                        <Image
                            src="/icons/facebook-icon.png"
                            alt="Facebook"
                            className="h-5 w-5 mr-2"
                            width={50}
                            height={50}
                        />
                        Login with Facebook
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Don&apos;t have an account?{' '}
                    <Link href="/signup-page"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}

'use client';
import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">

            {/* Hero Section */}
            <header className="bg-blue-600 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-4">About Brain Buzz</h1>
                    <p className="text-lg">Your ultimate destination for fun, learning, and challenging quizzes.</p>
                </div>
            </header>

            {/* Introduction Section */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-6">Who We Are</h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
                    Brain Buzz is a trivia quiz platform designed to test your knowledge across various categories, from science to pop culture.
                    Whether you are a trivia enthusiast or a casual learner, our quizzes provide a fun and engaging experience for everyone.
                </p>
                <div className="flex justify-center">
                    <Link
                        href="/categories-page"
                        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700"
                    >
                        Explore Quizzes
                    </Link>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        At Brain Buzz, our mission is to make learning exciting and interactive. We believe in combining knowledge with fun to inspire curiosity and lifelong learning.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-6">Meet the Developer</h2>
                <div className="max-w-5xl mx-auto grid grid-cols-1 w-96 gap-8">
                    {[
                        { name: "Hanish Jierdh", role: "Developer", image: "/images/profile.png" }
                    ].map((member, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                className="object-contain mx-auto"
                                width={300}  // Adjust width as needed
                                height={300} // Adjust height as needed
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-blue-600 text-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Test Your Knowledge?</h2>
                    <p className="text-lg mb-6">Join Brain Buzz and start your trivia journey today!</p>
                    <Link
                        href="/signup-page"
                        className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-gray-100"
                    >
                        Get Started
                    </Link>
                </div>
            </section>

        </div>
    );
}

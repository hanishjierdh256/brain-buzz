'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import categories from "./categories-page/categories.json";

export default function Home() {
  const [randomCategories, setRandomCategories] = useState([]);

  useEffect(() => {
    // Shuffle and select 3 categories on the client side
    const shuffledCategories = [...categories].sort(() => Math.random() - 0.5).slice(0, 3);
    setRandomCategories(shuffledCategories);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to Brain Buzz!</h1>
          <p className="text-lg mb-6">Test your knowledge with fun trivia quizzes.</p>
          <Link
            href="/categories-page"
            className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-gray-100"
          >
            See all Categories
          </Link>
        </div>
      </header>

      {/* Featured Categories */}
      <main className="flex-grow">
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Choose a Random Category</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {randomCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105"
              >
                <div className="group relative">
                  <Image
                    src={category.image} // This is the first static  image
                    alt={category.title}
                    className="w-auto h-auto inset-0 transition-all opacity-100 duration-300"
                  />
                  <Image
                    src={category.hoverImage} // This is the second gif image on hover
                    alt={category.title}
                    className="w-full h-full absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Call-to-Action */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Knowledge?</h2>
          <p className="text-lg mb-6">Join now and challenge your friends to see who is the smartest!</p>
          <Link
            href="/signup-page"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

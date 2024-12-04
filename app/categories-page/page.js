'use client';
import Link from "next/link";
import Image from "next/image";
import categories from "./categories.json";
import { useState } from 'react';

export default function Categories() {
  const [category, setCategory] = useState(null); // Keeping state in case you want to use it later

  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Header */}
      <header className="bg-blue-600 text-white text-center py-10">
        <h1 className="text-4xl font-bold mb-2">Select a Category</h1>
        <p className="text-lg">Challenge yourself with trivia from your favorite topics!</p>
      </header>

      {/* Categories Grid */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
            >
              <div className="group relative">
                {/* First static image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  width={300} // Provide proper width and height for optimization
                  height={300} // Provide proper width and height for optimization
                  className="w-full h-full object-cover transition-all opacity-100 duration-300"
                />
                {/* Second gif image on hover */}
                <Image
                  src={category.hoverImage}
                  alt={category.title}
                  width={300} // Provide proper width and height for optimization
                  height={300} // Provide proper width and height for optimization
                  className="w-full h-full absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link
                  href={`/quiz-page?category=${category.id}`} // Assuming dynamic routing for quiz page
                  className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700"
                // onClick={() => {
                //   setCategory(category.id); // Uncomment if you plan to use this state
                //   console.log(category.id);
                // }}
                >
                  Start Quiz
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

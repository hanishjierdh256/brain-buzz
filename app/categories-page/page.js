'use client';
import Link from "next/link";
import categories from "./categories.json";

export default function Categories() {

  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Header */}
      <header className="bg-blue-600 text-white text-center py-10">
        <h1 className="text-4xl font-bold mb-2">Select a Category</h1>
        <p className="text-lg">Challenge yourself with trivia from your favorite topics!</p>
      </header>

      {/* Categories Grid */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
            >
              <div className="group relative">
                <img
                  src={category.image} // This is the first static  image
                  alt={category.title}
                  className="w-auto h-auto inset-0 transition-all opacity-100 duration-300"
                />
                <img
                  src={category.hoverImage} // This is the second gif image on hover
                  alt={category.title}
                  className="w-full h-full absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link
                  href={`/quiz?category=${category.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700"
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

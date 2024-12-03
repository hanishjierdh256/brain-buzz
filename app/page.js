'use client';
import Link from "next/link";

export default function Home() {
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
            Choose a Category
          </Link>
        </div>
      </header>

      {/* Featured Categories */}
      <main className="flex-grow">
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Favorite Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: 'Science', image: '/science.jpg' },
              { title: 'History', image: '/history.jpg' },
              { title: 'Sports', image: '/sports.jpg' },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105"
              >
                <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
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
          <p className="text-lg mb-6">Join now and challenge your friends to see who's the smartest!</p>
          <Link
            href="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
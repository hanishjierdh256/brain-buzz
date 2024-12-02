'use client';
import Link from "next/link";

export default function Categories() {
  // Sample category data (replace with API data if available)
  const categories = [
    { id: 1, title: 'Science', description: 'Explore the wonders of the universe.', image: '/images/science.jpg' },
    { id: 2, title: 'History', description: 'Dive into the past and uncover historical facts.', image: '/images/history.jpg' },
    { id: 3, title: 'Sports', description: 'Test your knowledge of sports trivia.', image: '/images/sports.jpg' },
    { id: 4, title: 'Movies', description: 'Are you a film buff? Prove it!', image: '/images/movies.jpg' },
    { id: 5, title: 'Music', description: 'Rock, pop, classical - all genres included.', image: '/images/music.jpg' },
    { id: 6, title: 'Geography', description: 'How well do you know the world?', image: '/images/geography.jpg' },
  ];

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
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a
                  href={`/quiz?category=${category.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700"
                >
                  Start Quiz
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

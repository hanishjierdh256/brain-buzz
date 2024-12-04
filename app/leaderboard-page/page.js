'use client';
import Link from 'next/link';

export default function Leaderboard() {
    // Sample leaderboard data (replace with API data if available)
    const leaderboardData = [
        { rank: 1, name: 'Alice Johnson', score: 950, quizzes: 20 },
        { rank: 2, name: 'Bob Smith', score: 920, quizzes: 18 },
        { rank: 3, name: 'Charlie Brown', score: 890, quizzes: 15 },
        { rank: 4, name: 'Diana Ross', score: 870, quizzes: 12 },
        { rank: 5, name: 'Edward King', score: 860, quizzes: 14 },
    ];

    return (
        <div className="min-h-screen flex flex-col">

            {/* Page Header */}
            <header className="bg-blue-600 text-white py-10">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-2">Leaderboard</h1>
                    <p className="text-lg">Check out the top trivia masters and their scores!</p>
                </div>
            </header>
            <p>This page is not yet functional, only sample data is shown as filler.</p>
            {/* Leaderboard Table */}
            <main className="flex-grow container mx-auto px-6 py-12">
                <div className="max-w-5xl mx-auto overflow-x-auto">
                    <table className="w-full table-auto border-collapse bg-white shadow-lg rounded-lg">
                        <thead>
                            <tr className="bg-blue-600 text-white">
                                <th className="py-3 px-6 text-left">Rank</th>
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Score</th>
                                <th className="py-3 px-6 text-left">Quizzes Played</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboardData.map((user, index) => (
                                <tr
                                    key={index}
                                    className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'
                                        }`}
                                >
                                    <td className="py-3 px-6">{user.rank}</td>
                                    <td className="py-3 px-6">{user.name}</td>
                                    <td className="py-3 px-6">{user.score}</td>
                                    <td className="py-3 px-6">{user.quizzes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            {/* Call-to-Action Section */}
            <section className="bg-blue-600 text-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Want to See Your Name Here?</h2>
                    <p className="text-lg mb-6">Join the challenge and climb the leaderboard!</p>
                    <Link
                        href="/quiz"
                        className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-gray-100"
                    >
                        Take a Quiz Now
                    </Link>
                </div>
            </section>
        </div>
    );
}

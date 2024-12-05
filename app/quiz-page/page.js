'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import he from 'he'; // Import the 'he' library

export default function QuizPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const categoryId = searchParams.get('categoryId'); // Retrieve the categoryId from query parameters
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    const getQuestions = async (categoryId) => {
        try {
            const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`);
            const data = await response.json();
            console.log('Fetched Questions:', data.results); // Log fetched data
            setQuestions(data.results);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching questions:', error);
            setLoading(false);
            router.push('/categories-page');
        }
    };

    useEffect(() => {
        if (categoryId) {
            getQuestions(categoryId); // Automatically fetch questions when the page loads
        } else {
            router.push('/categories-page'); // Redirect if categoryId is missing
        }
    }, [categoryId]); // Dependency array ensures this runs when categoryId changes

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Quiz Header */}
            <header className="bg-blue-600 text-white text-center py-10">
                <h1 className="text-4xl font-bold">Quiz: {categoryId}</h1>
            </header>

            {/* Quiz Content */}
            <main className="flex-grow container mx-auto px-6 py-12">
                {loading ? (
                    <div className="text-center text-lg text-gray-600">
                        <p>Loading questions...</p>
                    </div>
                ) : (
                    <div>
                        {questions && questions.length > 0 ? (
                            questions.map((question, index) => (
                                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 p-6">
                                    <h2 className="text-2xl font-semibold mb-4">
                                        Question {index + 1}: {he.decode(question.question)} {/* Decode question */}
                                    </h2>
                                    <ul className="space-y-2">
                                        {[...question.incorrect_answers, question.correct_answer].sort().map((choice, i) => (
                                            <li key={i} className="bg-gray-50 hover:bg-gray-200 p-3 rounded-lg cursor-pointer">
                                                {he.decode(choice)} {/* Decode choices */}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-lg text-gray-600">
                                <p>No questions found. Try reloading.</p>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}

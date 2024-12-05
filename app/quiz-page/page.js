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
    const [decodedQuestions, setDecodedQuestions] = useState([]); // State to store decoded questions

    const getQuestions = async (categoryId) => {
        let attempts = 0;
        const maxAttempts = 5; // Maximum number of retries
        let data = null;

        while (attempts < maxAttempts) {
            try {
                const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`);
                data = await response.json();

                if (data.response_code === 0) { // success
                    console.log('Fetched Questions:', data.results);
                    setQuestions(data.results);
                    setLoading(false);
                    break; // Exit the loop if data is valid
                } else if (data.response_code === 5) { // no results
                    console.log('No results found, retrying...');
                    attempts++;
                    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds before retrying
                } else {
                    console.log('Unexpected response code:', data.response_code);
                    setLoading(false);
                    break; // Exit loop if response code is something else
                }
            } catch (error) {
                console.error('Error fetching questions:', error);
                setLoading(false);
                break; // Exit loop on error
            }
        }

        // If we exhaust the retries, set loading to false and notify the user
        if (attempts === maxAttempts && data?.response_code !== 0) {
            console.log('Failed to fetch questions after several attempts.');
            setLoading(false);
        }
    };

    useEffect(() => {
        if (categoryId) {
            getQuestions(categoryId); // Automatically fetch questions when the page loads
        } else {
            router.push('/categories-page'); // Redirect if categoryId is missing
        }
    }, [categoryId]); // Dependency array ensures this runs when categoryId changes

    // Decode questions and choices on client-side after fetching
    useEffect(() => {
        const decoded = questions.map((question) => ({
            ...question,
            question: he.decode(question.question), // Decode question text
            incorrect_answers: question.incorrect_answers.map((answer) => he.decode(answer)), // Decode incorrect answers
            correct_answer: he.decode(question.correct_answer), // Decode correct answer
        }));
        setDecodedQuestions(decoded); // Update state with decoded questions
    }, [questions]); // Runs when questions change

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
                        {decodedQuestions.length > 0 ? (
                            decodedQuestions.map((question, index) => (
                                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 p-6">
                                    <h2 className="text-2xl font-semibold mb-4">
                                        Question {index + 1}: {question.question} {/* Display decoded question */}
                                    </h2>
                                    <ul className="space-y-2">
                                        {[...question.incorrect_answers, question.correct_answer].sort().map((choice, i) => (
                                            <li key={i} className="bg-gray-50 hover:bg-gray-200 p-3 rounded-lg cursor-pointer">
                                                {choice} {/* Display decoded choice */}
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

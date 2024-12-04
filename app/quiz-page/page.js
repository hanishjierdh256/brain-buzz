'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
        <div>
            <h1>Quiz: {categoryId}</h1>

            {loading ? (
                <p>Loading questions...</p> // Show a loading message until questions are fetched
            ) : (
                // Render quiz content dynamically only if questions are loaded
                questions && questions.length > 0 ? (
                    questions.map((question, index) => (
                        <div key={index}>
                            <h2>Question {index + 1}: {question.question}</h2>
                            <ul>
                                {[...question.incorrect_answers, question.correct_answer].sort().map((choice, i) => (
                                    <li key={i}>{choice}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                    
                ) : (
                    <p>No questions found. Try reloading.</p> // Handle case where no questions are returned
                )
            )}
        </div>
    );
}

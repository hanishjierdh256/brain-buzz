"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import he from "he";
import categories from "../categories-page/categories.json";
import Link from "next/link";

function QuizContent({ categoryId }) {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [decodedQuestions, setDecodedQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null); // To store the score after submission
    const [isSubmitted, setIsSubmitted] = useState(false); // To track quiz submission

    const getQuestions = async (categoryId) => {
        let attempts = 0;
        const maxAttempts = 5;

        while (attempts < maxAttempts) {
            try {
                const response = await fetch(
                    `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`
                );
                const data = await response.json();

                if (data.response_code === 0) {
                    setQuestions(data.results);
                    setLoading(false);
                    break;
                } else if (data.response_code === 5) {
                    attempts++;
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                } else {
                    setLoading(false);
                    break;
                }
            } catch {
                setLoading(false);
                break;
            }
        }
    };

    // Added categoryId to the dependency array
    useEffect(() => {
        if (categoryId) {
            getQuestions(categoryId);
        }
    }, [categoryId]);

    useEffect(() => {
        const decoded = questions.map((question) => ({
            ...question,
            question: he.decode(question.question),
            incorrect_answers: question.incorrect_answers.map((answer) =>
                he.decode(answer)
            ),
            correct_answer: he.decode(question.correct_answer),
        }));
        setDecodedQuestions(decoded);
    }, [questions]);

    const handleAnswerClick = (questionIndex, choice) => {
        if (isSubmitted) return; // Prevent answer changes after submission
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: choice,
        }));
    };

    const handleSubmit = () => {
        if (Object.keys(answers).length < decodedQuestions.length) {
            alert("Please answer all questions before submitting!");
            return;
        }

        let calculatedScore = 0;
        decodedQuestions.forEach((question, index) => {
            if (answers[index] === question.correct_answer) {
                calculatedScore++;
            }
        });

        setScore(calculatedScore);
        setIsSubmitted(true); // Mark the quiz as submitted
    };

    const categoryName = categories.find(
        (category) => category.id.toString() === categoryId
    )?.title;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-blue-600 text-white text-center py-10">
                <h1 className="text-4xl font-bold">Quiz: {categoryName || "Loading..."}</h1>
            </header>

            <main className="flex-grow container mx-auto px-6 py-12">
                {loading ? (
                    <div className="text-center text-lg text-gray-600">
                        <p>Loading questions...</p>
                    </div>
                ) : (
                    <div>
                        {decodedQuestions.length > 0 ? (
                            <>
                                {decodedQuestions.map((question, index) => (
                                    <div
                                        key={index}
                                        className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 p-6"
                                    >
                                        <h2 className="text-2xl font-semibold mb-4">
                                            Question {index + 1}: {question.question}
                                        </h2>
                                        <ul className="space-y-2">
                                            {[...question.incorrect_answers, question.correct_answer]
                                                .sort()
                                                .map((choice, i) => {
                                                    let bgClass = "bg-gray-50"; // Default background

                                                    if (isSubmitted) {
                                                        if (answers[index] === choice) {
                                                            bgClass =
                                                                choice === question.correct_answer
                                                                    ? "bg-green-200"
                                                                    : "bg-red-200";
                                                        } else if (
                                                            choice === question.correct_answer
                                                        ) {
                                                            bgClass = "bg-yellow-200";
                                                        }
                                                    } else if (answers[index] === choice) {
                                                        bgClass = "bg-blue-200";
                                                    }

                                                    return (
                                                        <li
                                                            key={i}
                                                            className={`p-3 rounded-lg cursor-pointer ${bgClass} ${!isSubmitted && "hover:bg-gray-200"
                                                                }`}
                                                            onClick={() =>
                                                                handleAnswerClick(index, choice)
                                                            }
                                                        >
                                                            {choice}
                                                        </li>
                                                    );
                                                })}
                                        </ul>
                                    </div>
                                ))}
                                {!isSubmitted && (
                                    <button
                                        className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                )}
                            </>
                        ) : (
                            <div className="text-center text-lg text-gray-600">
                                <p>No questions found. Try reloading.</p>
                            </div>
                        )}
                    </div>
                )}
            </main>

            {score !== null && (
                <footer className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-8">
                    <h2 className="text-2xl font-bold mb-2">
                        Your Score: <span className="text-yellow-300">{score}/{decodedQuestions.length}</span>
                    </h2>
                    <p className="text-lg mb-4">Great job! Ready to take another quiz?</p>
                    <Link
                        href="/categories-page"
                        className="bg-yellow-400 text-blue-800 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 ease-in-out"
                    >
                        Go to Categories
                    </Link>
                </footer>
            )}
        </div>
    );
}

export default function QuizPage() {
    const searchParams = useSearchParams();
    const categoryId = searchParams.get("categoryId");

    // Suspense boundary for handling async loading of quiz content
    if (!categoryId) return <div>Loading...</div>;  // You can handle loading logic here if needed

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <QuizContent categoryId={categoryId} />
        </Suspense>
    );
}

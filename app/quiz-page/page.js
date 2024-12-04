'use client';
import { useSearchParams } from 'next/navigation';

export default function QuizPage() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('categoryId'); // Retrieve the categoryId from query parameters

  // Now you can use categoryId to generate quiz questions
  console.log("Category ID:", categoryId);

  return (
    <div>
      <h1>Quiz for Category {categoryId}</h1>
      {/* Use the categoryId to fetch or display the quiz questions */}
    </div>
  );
}

















// 'use client';
// import { useEffect, useState } from 'react';

// export default function QuizPage() {
//     const [category, setCategory] = useState(null);

//     useEffect(() => {
//         // Get the category from URL search params
//         const urlParams = new URLSearchParams(window.location.search);
//         const categoryId = urlParams.get('category');

//         // Fetch category data based on the category ID
//         if (categoryId) {
//             fetchCategoryData(categoryId);
//         }
//     }, []);

//     const fetchCategoryData = (categoryId) => {
//         // Simulate fetching data based on category ID
//         const categories = [
//             { id: '1', title: 'General Knowledge', description: 'Test your general knowledge!' },
//             { id: '2', title: 'Science', description: 'Scientific trivia questions.' },
//             { id: '3', title: 'History', description: 'History quiz questions.' },
//             // Add more categories here
//         ];

//         const selectedCategory = categories.find((category) => category.id === categoryId);
//         setCategory(selectedCategory);
//     };

//     if (!category) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h1>Quiz: {category.title}</h1>
//             <p>{category.description}</p>

//             {/* Render quiz content here */}
//             <div>
//                 {/* Example quiz question */}
//                 <h2>Question 1: What is the capital of France?</h2>
//                 <ul>
//                     <li>Berlin</li>
//                     <li>Paris</li>
//                     <li>Madrid</li>
//                     <li>Rome</li>
//                 </ul>

//                 <button>Next Question</button>
//             </div>
//         </div>
//     );
// }

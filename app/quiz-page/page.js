"use client";

import dynamic from "next/dynamic";

const QuizPageClient = dynamic(() => import("./quiz"), { ssr: false });

export default function QuizPage() {
    return <QuizPageClient />;
}

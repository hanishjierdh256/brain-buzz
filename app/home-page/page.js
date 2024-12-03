//'use client';
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="">
      <header className="flex justify-between items-center p-24">
        <p className="text-2xl font-bold">Header</p>
      </header>
      <main className="flex justify-between items-center p-24">
        <p className="text-2xl font-bold">Home</p>
      </main>
      <footer className="flex justify-between items-center p-24">
        <p className="text-2xl font-bold">Footer</p>
      </footer>
    </div>
  );
}

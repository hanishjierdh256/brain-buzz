import localFont from "next/font/local";
import "./globals.css";
import Footer from "./static-pages/footer";
import Navbar from "./static-pages/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Brain Buzz",
  description: "Dive into the ultimate trivia experience with Brain Buzz! Choose your favorite categories, test your wits across difficulty levels, and challenge yourself with fun, brain-boosting questions. Think fast, score big, and prove you're the ultimate trivia master!",
  icons: {
    icon: '/favicon.png',
    // apple: '/apple-touch-icon.png', // Optional: For Apple devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

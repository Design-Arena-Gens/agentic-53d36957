import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IIFS · Indian Institute of Future Skills",
  description:
    "IIFS is reimagining Indian education with AI-first learning journeys, adaptive labs, and industry mentorship that prepares learners for the future.",
  keywords: [
    "AI education",
    "future skills",
    "Indian Institute of Future Skills",
    "IIFS",
    "technology upskilling",
    "digital education",
  ],
  openGraph: {
    title: "Indian Institute of Future Skills (IIFS)",
    description:
      "Modern AI-first education built for India. Discover learning journeys, adaptive labs, and industry-backed mentorship that elevate every learner.",
    url: "https://agentic-53d36957.vercel.app",
    siteName: "IIFS · Indian Institute of Future Skills",
    locale: "en_IN",
    type: "website",
  },
  metadataBase: new URL("https://agentic-53d36957.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

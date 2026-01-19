import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import TransitionProvider from "./components/TransitionProvider";
import { GoogleTagManager } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhishek Madaan | Full-Stack GenAI Developer",
  description:
    "Portfolio of Abhishek Madaan, a Full-Stack GenAI Developer building AI-powered SaaS products with Next.js, React, LLMs, RAG pipelines, and scalable cloud architectures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
      <GoogleTagManager gtmId="G-2SW6LMYEE3" />
    </html>
  );
}

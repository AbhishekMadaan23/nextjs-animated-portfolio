import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import TransitionProvider from "./components/TransitionProvider";
import { GoogleTagManager } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhishek Madaan Portfolio App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
        <GoogleTagManager gtmId="G-2SW6LMYEE3" />
      </body>
    </html>
  );
}

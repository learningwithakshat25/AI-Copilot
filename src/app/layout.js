import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI-Copilot",
  description: "Makes thing easy",
  icons: {
    icon: '/favicon.png', // Path to your favicon in the public directory
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-screen min-h-screen bg-amber-50 p-5">
        <Header/>
        {children}
        </div>
      </body>
    </html>
  );
}

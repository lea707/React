import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TechLearn Articles",
  description: "Educational articles about cybersecurity and technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <nav>
          <Link className="btn btn-primary" href="/">
            Home
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "TechLearn Articles",
  description: "Educational articles about cybersecurity and technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">TechLearn</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}

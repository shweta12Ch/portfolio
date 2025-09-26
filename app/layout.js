import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Frontend-focused portfolio built with Next.js + Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}

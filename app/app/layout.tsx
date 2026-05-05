import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">

        {/* NAVBAR */}
        <nav className="bg-white border-b shadow-sm">
          <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
            <h1 className="font-bold">
              Cloud Peak Portal
            </h1>

            <div className="flex gap-6 text-sm">
              <Link href="/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <Link href="/puppies" className="hover:underline">
                Puppies
              </Link>
              <Link href="/documents" className="hover:underline">
                Documents
              </Link>
            </div>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div className="max-w-5xl mx-auto">
          {children}
        </div>

      </body>
    </html>
  );
}
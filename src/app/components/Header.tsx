import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto px-6 py-8">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          TaskFlow
        </Link>
        <div className="space-x-4">
          <Link
            href="/login"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Healthcare</h1>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776; {/* Hamburger Icon */}
        </button>
      </div>

      <nav>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex justify-center space-x-6 mt-4 md:mt-0`}
        >
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/patient" className="hover:text-gray-300">
              Patient
            </Link>
          </li>
          <li>
            <Link href="/doctor" className="hover:text-gray-300">
              Doctor
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

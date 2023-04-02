import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* the right side of the navbar */}
      <div className="flex items-center justify-between w-full p-4 bg-[#050125]">
        <img src="/logo.svg" alt="Startup Logo" width={150} height={220} className="ml-24"  />
        <h1 className="text-4xl font-bold ml-[600px] text-white">Jurident</h1>
        <div className="flex items-center space-x-4">
          <Link href="/contact-us" legacyBehavior>
            <a className="p-2">Contact Us</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="p-2">About</a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a className="p-2">Login</a>
          </Link>
        </div>
      </div>

      {/* the left side of the navbar */}
      <div className="flex flex-col w-full h-screen">
        <button
          className="absolute top-0 left-0 p-4 text-white bg-blue-500 transition-all duration-500 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src="/info.png" alt="logo" width="40" />
        </button>
        {isOpen && (
          <nav className="flex flex-col items-center justify-center w-full md:w-64 h-full p-4 bg-[#050125c4]">
            <Link href="/" legacyBehavior>
              <a className="my-2 p-2">Home</a>
            </Link>
            <Link href="/top-stories" legacyBehavior>
              <a className="my-2 p-2">Top Stories</a>
            </Link>
            <Link href="/news-updates" legacyBehavior>
              <a className="my-2 p-2">News Updates</a>
            </Link>
            <Link href="/rti" legacyBehavior>
              <a className="my-2 p-2">RTI</a>
            </Link>
            <Link href="/know-the-law" legacyBehavior>
              <a className="my-2 p-2">Know the Law</a>
            </Link>
            <Link href="/law-schools" legacyBehavior>
              <a className="my-2 p-2">Law Schools</a>
            </Link>
            <Link href="/law-firms" legacyBehavior>
              <a className="my-2 p-2">Law Firms</a>
            </Link>
            <Link href="/job-updates" legacyBehavior>
              <a className="my-2 p-2">Job Updates</a>
            </Link>
            <Link href="/book-reviews" legacyBehavior>
              <a className="my-2 p-2">Book Reviews</a>
            </Link>
            <Link href="/events-corner" legacyBehavior>
              <a className="my-2 p-2">Events Corner</a>
            </Link>
            <Link href="/tax" legacyBehavior>
              <a className="my-2 p-2">Tax</a>
            </Link>
            <Link href="/ibc" legacyBehavior>
              <a className="my-2 p-2">IBC</a>
            </Link>
          </nav>
        )}
      </div>

      <style jsx>{`
        button {
          background-color: #050125;
        }

        a {
          color: #c99f4a;
        }
      `}</style>
    </>
  );
}

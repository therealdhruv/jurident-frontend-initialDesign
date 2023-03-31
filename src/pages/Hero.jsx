import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-black min-h-screen flex flex-col items-center justify-center">
        <Head>
          <title>Startup Landing Page</title>
          <meta name="description" content="A simple landing page for a startup using Next.js and tailwindcss" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="w-full h-24 flex items-center justify-between px-8 mt-[-650px]">
          <Image src="/logo.svg" alt="Startup Logo" width={220} height={220} />
          <nav className="hidden md:flex items-center space-x-10 mt-[-70px]">
            <a href="#" className="text-white hover:text-yellow-300">Home</a>
            <a href="#" className="text-white hover:text-yellow-300">About</a>
            <a href="#" className="text-white hover:text-yellow-300">Products</a>
            <a href="#" className="text-white hover:text-yellow-300">Contact</a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✖️' : '☰'}
          </button>
        </header>

        {isOpen && (
          <nav className="w-full bg-gray-800 text-center py-4 md:hidden">
            <a href="#" className="block text-white hover:text-yellow-300 py-2">Home</a>
            <a href="#" className="block text-white hover:text-yellow-300 py-2">About</a>
            <a href="#" className="block text-white hover:text-yellow-300 py-2">Services</a>
            <a href="#" className="block text-white hover:text-yellow-300 py-2">Contact</a>
          </nav>
        )}

        <main className="max-w-4xl p-8 text-center absolute">
          <h1 className="text-6xl font-bold text-blue-900">Welcome to Jurident</h1>
          <p className="text-2xl font-thin text-white mt-4"> Our team is dedicated about making great products for lawyers. </p>
          <div className="mt-8 flex justify-center">
            <button className="bg-yellow-300 hover:bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded-lg mr-4">Learn More</button>
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg">Get Started</button>
          </div>
        </main>

        <footer className="w-full h-24 border-t flex items-center justify-center absolute bottom-0 left-0 right-0">
          <p className="text-gray-500">&copy; 2023 Startup. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}



import React from 'react'
import { useState } from 'react'
import Hero from './Hero';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  )
}



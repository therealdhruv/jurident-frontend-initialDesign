// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Hero from './Hero';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Hero />
    </>
  )
}



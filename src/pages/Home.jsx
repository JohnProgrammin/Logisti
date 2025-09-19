import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Testimonials from './Testimonials'
import Fetch from './Fetch'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonials />
      <Fetch />
    </div>
  )
}

export default Home
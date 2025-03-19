import { useState } from 'react'
import './App.css'
import Navbar from './common/Navbar'
import Hero from './Home/components/Hero'
import WorkGallery from './Home/components/WorkGallery'
import AboutMe from './Home/components/AboutMe'
import Footer from './common/Footer'

function App() {
  return (
    <section className='grid grid-cols-8 md:grid-cols-16 gap-y-24 pt-11 w-full bg-linear-to-b from-[#151515] to-[#101010]'>
      <Navbar/>
      <Hero/>
      <WorkGallery/>
      <AboutMe/>
      <Footer/>
    </section>
  )
}

export default App

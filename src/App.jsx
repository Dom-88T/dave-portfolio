import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Work from './components/Work'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <NavBar />
      <Hero />
      <Expertise />
      <Work />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

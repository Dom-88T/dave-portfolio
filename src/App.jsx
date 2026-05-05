import React from 'react'
import { useTheme } from './context/ThemeContext'
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
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-dark text-white' : 'bg-white text-black'}`}>
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

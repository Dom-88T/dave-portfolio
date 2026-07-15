import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Hero = () => {
  const { isDark } = useTheme()

  return (
    <section id="home" className="pt-32 pb-20 section-container">
      <div className="text-center">
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
          DOMINGO TOMIWA DAVID
        </h1>
        <p className={`text-xl md:text-2xl mb-8 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          FRONTEND DEVELOPER & QA TESTER
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="#contact" className="cta-button">
            Get In Touch
          </a>
          <a href="#work" className={`px-8 py-3 border rounded-lg transition-all ${isDark ? 'border-purple-500 text-purple-400 hover:bg-purple-500/10' : 'border-purple-600 text-purple-600 hover:bg-purple-600/10'}`}>
            View My Work
          </a>
          <a href="https://dave-qa.vercel.app/" target="_blank" rel="noreferrer" className={`px-8 py-3 border rounded-lg transition-all ${isDark ? 'border-purple-500 text-purple-400 hover:bg-purple-500/10' : 'border-purple-600 text-purple-600 hover:bg-purple-600/10'}`}>
            View QA Portfolio
          </a>
        </div>
      </div>

      {/* Decorative element */}
      <div className="mt-20 flex justify-center">
        <div className={`w-40 h-40 border-2 rounded-full flex items-center justify-center transition-colors duration-300 ${isDark ? 'border-purple-500/30' : 'border-purple-600/30'}`}>
          <div className={`w-32 h-32 border-2 rounded-full flex items-center justify-center transition-colors duration-300 ${isDark ? 'border-purple-400/50' : 'border-purple-600/50'}`}>
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
          </div>
        </div>
      </div>

     
    </section>
  )
}

export default Hero

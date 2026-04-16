import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 section-container">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          DOMINGO TOMIWA DAVID
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          FRONTEND DEVELOPER
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="#contact" className="cta-button">
            Get In Touch
          </a>
          <a href="#work" className="px-8 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all">
            View My Work
          </a>
        </div>
      </div>

      {/* Decorative element */}
      <div className="mt-20 flex justify-center">
        <div className="w-40 h-40 border-2 border-purple-500/30 rounded-full flex items-center justify-center">
          <div className="w-32 h-32 border-2 border-purple-400/50 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          </div>
        </div>
      </div>

     
    </section>
  )
}

export default Hero

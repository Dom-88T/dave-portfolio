import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { isDark } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`border-t py-12 transition-colors duration-300 ${isDark ? 'bg-darkGray border-gray-800' : 'bg-gray-100 border-gray-300'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Dav3</h3>
            <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Frontend developer passionate about building responsive, user-centered web applications with React and modern JavaScript.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className={`transition-colors text-sm ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>Home</a></li>
              <li><a href="#expertise" className={`transition-colors text-sm ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>Expertise</a></li>
              <li><a href="#work" className={`transition-colors text-sm ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>Work</a></li>
              <li><a href="#experience" className={`transition-colors text-sm ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>Experience</a></li>
              <li><a href="#contact" className={`transition-colors text-sm ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className={`font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Connect</h4>
            <div className="flex gap-4">
              <a href="#" className={`transition-colors text-lg ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
                LinkedIn
              </a>
              <a href="#" className={`transition-colors text-lg ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
                GitHub
              </a>
              <a href="#" className={`transition-colors text-lg ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t pt-8 transition-colors duration-300 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
          <p className={`text-center text-sm transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            © {currentYear} Domingo Tomiwa David. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

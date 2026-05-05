import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const navItems = [
    { id: 1, label: 'home', href: '#home' },
    { id: 2, label: 'expertise', href: '#expertise' },
    { id: 3, label: 'work', href: '#work' },
    { id: 4, label: 'experience', href: '#experience' },
    { id: 5, label: 'contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${isDark ? 'bg-dark/95 border-gray-800' : 'bg-white/95 border-gray-200'} backdrop-blur-md`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className={`text-2xl font-bold transition-colors duration-300 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Dav3</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`transition-colors text-sm ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}
            >
              // {String(item.id).padStart(2, '0')} {item.label}
            </a>
          ))}
        </div>

        {/* Theme Switcher & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isDark 
                ? 'bg-purple-600 hover:bg-purple-700' 
                : 'bg-purple-600 hover:bg-purple-700'
            }`}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="text-white text-lg">
              {isDark ? '☀️' : '🌙'}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`absolute top-full left-0 w-full border-b transition-colors duration-300 md:hidden ${isDark ? 'bg-darkGray border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`transition-colors duration-300 ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}
                  onClick={() => setIsOpen(false)}
                >
                  // {String(item.id).padStart(2, '0')} {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar

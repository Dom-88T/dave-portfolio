import React, { useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 1, label: 'home', href: '#home' },
    { id: 2, label: 'expertise', href: '#expertise' },
    { id: 3, label: 'work', href: '#work' },
    { id: 4, label: 'experience', href: '#experience' },
    { id: 5, label: 'contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-400">Dav3</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
            >
              // {String(item.id).padStart(2, '0')} {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-darkGray border-b border-gray-800 md:hidden">
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
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

import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-darkGray border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Dave._</h3>
            <p className="text-gray-400 text-sm">
              Frontend developer passionate about building responsive, user-centered web applications with React and modern JavaScript.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Home</a></li>
              <li><a href="#expertise" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Expertise</a></li>
              <li><a href="#work" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Work</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-lg">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-lg">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-lg">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Domingo Tomiwa David Surulere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

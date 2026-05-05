import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const Certifications = () => {
  const { isDark } = useTheme()
  const [selectedCert, setSelectedCert] = useState(null)
  const [viewMode, setViewMode] = useState('details') // 'details' or 'image'

  const certifications = [
    {
      id: 1,
      title: 'Python Programming Certification',
      issuer: 'Mimo',
      year: '2025',
      icon: '🐍',
      description: 'Completed comprehensive Python programming course covering core concepts including data structures, control statements, functions, and modules.',
      link: 'https://mimo.app',
      image: '/certs/python-cert.jpg'
    },
    {
      id: 2,
      title: 'Game Development with AI Certification',
      issuer: 'Mimo',
      year: '2025',
      icon: '🎮',
      description: 'Completed Game Development with AI course covering essentials for 2D, 3D, single-player, and multi-player game building.',
      link: 'https://mimo.app',
      image: '/certs/gamedev-cert.jpg'
    },
    {
      id: 3,
      title: 'Digital Entrepreneurship Training',
      issuer: 'La Plage Meta Verse',
      year: '2023',
      icon: '💼',
      description: 'Completed Digital Entrepreneurship Level 1 certification. Certificate Number: DE/2023/LPMV/16638412',
      link: '#',
      image: '/certs/entrepreneurship-cert.jpg'
    },
  ]

  return (
    <section id="certifications" className="section-container">
      <h2 className={`section-title transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Certifications & Achievements</h2>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert) => (
          <button
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className={`card text-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${isDark ? 'hover:bg-gray-800 hover:border-purple-500' : 'hover:bg-gray-100 hover:border-purple-600'}`}
          >
            <div className="text-5xl mb-4">{cert.icon}</div>
            <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
              {cert.title}
            </h3>
            <p className={`text-sm mb-2 transition-colors duration-300 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{cert.issuer}</p>
            <p className={`text-sm mb-4 transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>{cert.year}</p>
            <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-purple-300 hover:text-purple-200' : 'text-purple-700 hover:text-purple-800'}`}>Click to view certificate →</p>
          </button>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className={`rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border shadow-2xl transition-colors duration-300 ${isDark ? 'bg-dark border-gray-800' : 'bg-white border-gray-300'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with tabs */}
            <div className={`sticky top-0 border-b p-6 flex justify-between items-center transition-colors duration-300 ${isDark ? 'bg-dark border-gray-800' : 'bg-gray-50 border-gray-300'}`}>
              <div className="flex gap-4">
                <button
                  onClick={() => setViewMode('details')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    viewMode === 'details'
                      ? 'bg-purple-500 text-white'
                      : isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Details
                </button>
                {selectedCert.image && (
                  <button
                    onClick={() => setViewMode('image')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      viewMode === 'image'
                        ? 'bg-purple-500 text-white'
                        : isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    View Certificate
                  </button>
                )}
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className={`text-3xl transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {viewMode === 'details' ? (
                <>
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="text-6xl mb-4">{selectedCert.icon}</div>
                      <h3 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>{selectedCert.title}</h3>
                      <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{selectedCert.issuer}</p>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className={`rounded-lg p-6 mb-6 border transition-colors duration-300 ${isDark ? 'bg-gray-900 border-gray-800 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-800'}`}>
                    <div className="space-y-3">
                      <p><span className={`font-semibold transition-colors duration-300 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Certification:</span> {selectedCert.title}</p>
                      <p><span className={`font-semibold transition-colors duration-300 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Issuer:</span> {selectedCert.issuer}</p>
                      <p><span className={`font-semibold transition-colors duration-300 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Awarded:</span> {selectedCert.year}</p>
                      <p className={`pt-3 border-t transition-colors duration-300 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>{selectedCert.description}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setSelectedCert(null)}
                      className={`px-6 py-2 rounded-lg transition-colors ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-300 hover:bg-gray-400 text-black'}`}
                    >
                      Close
                    </button>
                    {selectedCert.link !== '#' && (
                      <a
                        href={selectedCert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button inline-block"
                      >
                        View Issuer
                      </a>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Certificate Image View */}
                  <div className="text-center">
                    <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>{selectedCert.title}</h3>
                    <div className={`rounded-lg p-4 flex items-center justify-center min-h-[500px] transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
                      {selectedCert.image ? (
                        <img
                          src={selectedCert.image}
                          alt={selectedCert.title}
                          className="max-w-full max-h-[70vh] rounded-lg shadow-lg object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<div class="text-gray-400 text-lg">Certificate image not available</div>`;
                          }}
                        />
                      ) : (
                        <div className="text-gray-400 text-lg">Certificate image not available</div>
                      )}
                    </div>
                    <div className="flex justify-end gap-3 mt-6">
                      <button
                        onClick={() => setSelectedCert(null)}
                        className={`px-6 py-2 rounded-lg transition-colors ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-300 hover:bg-gray-400 text-black'}`}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certifications

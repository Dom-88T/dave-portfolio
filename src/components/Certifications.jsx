import React, { useState } from 'react'

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  const certifications = [
    {
      id: 1,
      title: 'Python Programming Certification',
      issuer: 'Mimo',
      year: '2025',
      icon: '🐍',
      description: 'Completed comprehensive Python programming course covering core concepts including data structures, control statements, functions, and modules.',
      link: 'https://mimo.app'
    },
    {
      id: 2,
      title: 'Game Development with AI Certification',
      issuer: 'Mimo',
      year: '2025',
      icon: '🎮',
      description: 'Completed Game Development with AI course covering essentials for 2D, 3D, single-player, and multi-player game building.',
      link: 'https://mimo.app'
    },
    {
      id: 3,
      title: 'Digital Entrepreneurship Training',
      issuer: 'La Plage Meta Verse',
      year: '2023',
      icon: '💼',
      description: 'Completed Digital Entrepreneurship Level 1 certification. Certificate Number: DE/2023/LPMV/16638412',
      link: '#'
    },
  ]

  return (
    <section id="certifications" className="section-container">
      <h2 className="section-title">Certifications & Achievements</h2>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert) => (
          <button
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="card text-center cursor-pointer hover:bg-gray-800 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-5xl mb-4">{cert.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">
              {cert.title}
            </h3>
            <p className="text-purple-400 text-sm mb-2">{cert.issuer}</p>
            <p className="text-gray-500 text-sm mb-4">{cert.year}</p>
            <p className="text-xs text-purple-300 hover:text-purple-200">Click to view details →</p>
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
            className="bg-dark rounded-lg max-w-2xl w-full p-8 border border-gray-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-6xl mb-4">{selectedCert.icon}</div>
                <h3 className="text-3xl font-bold text-white mb-2">{selectedCert.title}</h3>
                <p className="text-purple-400 text-lg">{selectedCert.issuer}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-400 hover:text-white text-3xl transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Certificate Details */}
            <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-800">
              <div className="space-y-3 text-gray-300">
                <p><span className="text-purple-400 font-semibold">Certification:</span> {selectedCert.title}</p>
                <p><span className="text-purple-400 font-semibold">Issuer:</span> {selectedCert.issuer}</p>
                <p><span className="text-purple-400 font-semibold">Awarded:</span> {selectedCert.year}</p>
                <p className="pt-3 border-t border-gray-700">{selectedCert.description}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
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
          </div>
        </div>
      )}
    </section>
  )
}

export default Certifications

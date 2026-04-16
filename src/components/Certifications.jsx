import React, { useState } from 'react'

const Certifications = () => {
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
            <p className="text-xs text-purple-300 hover:text-purple-200">Click to view certificate →</p>
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
            className="bg-dark rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with tabs */}
            <div className="sticky top-0 bg-dark border-b border-gray-800 p-6 flex justify-between items-center">
              <div className="flex gap-4">
                <button
                  onClick={() => setViewMode('details')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    viewMode === 'details'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    View Certificate
                  </button>
                )}
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-400 hover:text-white text-3xl transition-colors"
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
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedCert.title}</h3>
                      <p className="text-purple-400 text-lg">{selectedCert.issuer}</p>
                    </div>
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
                </>
              ) : (
                <>
                  {/* Certificate Image View */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-6">{selectedCert.title}</h3>
                    <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-center min-h-[500px]">
                      {selectedCert.image ? (
                        <img
                          src={selectedCert.image}
                          alt={selectedCert.title}
                          className="max-w-full max-h-[70vh] rounded-lg shadow-lg object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div class="text-gray-400 text-lg">Certificate image not available</div>';
                          }}
                        />
                      ) : (
                        <div className="text-gray-400 text-lg">Certificate image not available</div>
                      )}
                    </div>
                    <div className="flex justify-end gap-3 mt-6">
                      <button
                        onClick={() => setSelectedCert(null)}
                        className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
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

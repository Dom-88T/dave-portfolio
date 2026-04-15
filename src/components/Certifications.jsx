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
      pdfPath: '/certs/Python Cert.pdf'
    },
    {
      id: 2,
      title: 'Game Development with AI Certification',
      issuer: 'Mimo',
      year: '2025',
      icon: '🎮',
      pdfPath: '/certs/Game_Dev.pdf'
    },
    {
      id: 3,
      title: 'Digital Entrepreneurship Training',
      issuer: 'La Plage Meta Verse',
      year: '2023',
      icon: '💼',
      pdfPath: '/certs/DIGITAL_ENTREPRENEURSHIP.pdf'
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
            className="card text-center cursor-pointer hover:bg-gray-800 hover:border-purple-500 transition-all"
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
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-dark rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-400 hover:text-white text-2xl transition-colors"
              >
                ✕
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto">
              <iframe
                src={selectedCert.pdfPath}
                className="w-full h-full"
                title={selectedCert.title}
              />
            </div>

            {/* Footer */}
            <div className="border-t border-gray-800 p-6 flex justify-between items-center">
              <p className="text-gray-400 text-sm">
                Awarded: {selectedCert.year} | {selectedCert.issuer}
              </p>
              <a
                href={selectedCert.pdfPath}
                download
                className="cta-button inline-block"
              >
                Download Certificate
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certifications

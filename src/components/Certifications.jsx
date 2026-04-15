import React from 'react'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Python Programming Certification',
      issuer: 'Mimo',
      year: '2025',
      icon: '🐍'
    },
    {
      id: 2,
      title: 'Game Development with AI Certification',
      issuer: 'Mimo',
      year: '2025',
      icon: '🎮'
    },
    {
      id: 3,
      title: 'Digital Entrepreneurship Training',
      issuer: 'Professional Development',
      year: '2023',
      icon: '💼'
    },
  ]

  return (
    <section id="certifications" className="section-container">
      <h2 className="section-title">Certifications & Achievements</h2>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert) => (
          <div key={cert.id} className="card text-center">
            <div className="text-5xl mb-4">{cert.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">
              {cert.title}
            </h3>
            <p className="text-purple-400 text-sm mb-2">{cert.issuer}</p>
            <p className="text-gray-500 text-sm">{cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications

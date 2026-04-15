import React, { useState } from 'react'

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null)

  const experiences = [
    {
      id: 1,
      title: 'CEO - Owner',
      company: 'Dave\'s Merch',
      period: '2019 - 2021',
      description: 'Founded and managed merchandise business with focus on customer satisfaction and operational excellence.',
      responsibilities: [
        'Managed marketing and advertisement campaigns',
        'Designed graphics and promotional materials',
        'Cultivated strong customer relationships',
        'Handled procurement, inventory management and shipping'
      ]
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Semicolon Africa',
      period: '2025 - Present',
      description: 'Building responsive web applications with React, focusing on UI/UX design and user-centered development.',
      responsibilities: [
        'Developed multiple React applications',
        'Worked on UI/UX design and prototyping with Figma',
        'Implemented responsive designs using Tailwind CSS',
        'Collaborated with designers and stakeholders'
      ]
    },
    {
      id: 3,
      title: 'Student',
      company: 'Lagos State Polytechnic',
      period: '2021 - 2023',
      description: 'Completed National Diploma in Science and Laboratory Technology with focus on technical foundations.',
      responsibilities: [
        'Strong foundation in problem-solving and technology',
        'Developed analytical and communication skills',
        'Worked as a team and individually on lab projects and extracurricular activities',
      ]
    },
  ]

  return (
    <section id="experience" className="section-container bg-darkGray/50">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="border border-gray-700 rounded-lg overflow-hidden hover:border-purple-500 transition-colors">
            <button
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              className="w-full bg-gray-900/50 hover:bg-gray-800/50 p-6 flex justify-between items-center transition-colors"
            >
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-2">
                  {exp.title} @ {exp.company}
                </h3>
                <p className="text-gray-400">{exp.period}</p>
              </div>
              <span className="text-2xl text-purple-400">
                {expandedId === exp.id ? '−' : '+'}
              </span>
            </button>

            {expandedId === exp.id && (
              <div className="bg-gray-900/30 p-6 border-t border-gray-700">
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-400">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

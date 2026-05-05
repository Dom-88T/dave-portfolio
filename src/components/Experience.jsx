import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const Experience = () => {
  const { isDark } = useTheme()
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
    <section id="experience" className={`section-container transition-colors duration-300 ${isDark ? 'bg-darkGray/50' : 'bg-gray-50'}`}>
      <h2 className={`section-title transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Professional Experience</h2>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className={`border rounded-lg overflow-hidden hover:border-purple-500 transition-colors ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
            <button
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              className={`w-full p-6 flex justify-between items-center transition-colors ${isDark ? 'bg-gray-900/50 hover:bg-gray-800/50' : 'bg-gray-100/50 hover:bg-gray-200/50'}`}
            >
              <div className="text-left">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
                  {exp.title} @ {exp.company}
                </h3>
                <p className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.period}</p>
              </div>
              <span className={`text-2xl transition-colors duration-300 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                {expandedId === exp.id ? '−' : '+'}
              </span>
            </button>

            {expandedId === exp.id && (
              <div className={`p-6 border-t transition-colors duration-300 ${isDark ? 'bg-gray-900/30 border-gray-700' : 'bg-gray-50 border-gray-300'}`}>
                <p className={`mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className={`flex items-start gap-3 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className={`mt-1 transition-colors duration-300 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>▸</span>
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

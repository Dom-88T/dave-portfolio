import React from 'react'

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'LitBeam - Event Management Platform',
      description: 'A comprehensive event management platform showcasing advanced React patterns, responsive design, and interactive UI components. Built with modern web standards and deployed on Vercel.',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Vercel'],
      link: 'https://litbeam.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'E-commerce Shopping Platform',
      description: 'A full-featured e-commerce platform with product navigation, shopping cart functionality. Demonstrates strong UI/UX design principles and seamless user experience.',
      tech: ['React', 'Redux Toolkit', 'Figma', 'JavaScript'],
      link: '#',
      featured: false
    },
    {
      id: 3,
      title: 'URL Shortener',
      description: 'A utility application for shortening long URLs. Showcases API integration, state management, and clean code practices.',
      tech: ['JavaScript', 'Html & Css', 'API Integration'],
      link: '#',
      featured: false
    },
  ]

  return (
    <section id="work" className="section-container">
      <h2 className="section-title">My Work</h2>
      
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.id} className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-500 text-sm mb-3">Featured Project</p>
              <h3 className="text-4xl font-bold mb-6">{project.title}</h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="cta-button inline-block">
                View Project
              </a>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <div className="inline-block text-6xl mb-4">📱</div>
              <p className="text-gray-400">Project Demo</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-gray-800">
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
          <p className="text-gray-400">Projects Completed</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
          <p className="text-gray-400">Client Satisfaction</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">1+</div>
          <p className="text-gray-400">Years Experience</p>
        </div>
      </div>
    </section>
  )
}

export default Work

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
      title: 'Finderz - Service Finder Mobile App',
      description: 'A React Native Web application for finding and hiring local service providers. Features authentication, real-time search, chat functionality, and seamless mobile-to-web experience with Expo.',
      tech: ['React Native', 'Expo', 'JavaScript', 'Vercel', 'Mobile Web'],
      link: 'https://finderz.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'Fashion Store - E-commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, filtering, shopping cart functionality, and checkout flow. Demonstrates advanced React patterns, Redux state management, and responsive design principles.',
      tech: ['React', 'Redux Toolkit', 'Vite', 'Tailwind CSS', 'JavaScript'],
      link: 'https://clothing-store-three-zeta.vercel.app/',
      featured: true
    },
    
    {
      id: 4,
      title: 'CleanLoop - Waste Management App',
      description: 'An innovative waste management platform designed to promote sustainable living. Features user-friendly interface for tracking and managing waste disposal, environmental impact awareness, and community engagement.',
      tech: ['React', 'Python', 'JavaScript', 'Tailwind CSS', 'Sustainability'],
      link: '#',
      featured: true
    }
  ]

  return (
    <section id="work" className="section-container">
      <h2 className="section-title">My Work</h2>
      
      {/* Featured Projects */}
      <div className="space-y-8 mb-16">
        {projects.filter(p => p.featured).map((project) => (
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

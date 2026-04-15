import React from 'react'

const Expertise = () => {
  const expertise = [
    {
      id: 1,
      icon: '⚛️',
      title: 'Frontend Development',
      description: 'Skilled in building responsive, user-centered web applications using React and modern JavaScript. Proficient in state management with Redux Toolkit.',
      skills: ['React', 'JavaScript', 'TypeScript', 'Redux Toolkit', 'HTML', 'CSS']
    },
    {
      id: 2,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Passionate about creating beautiful and intuitive interfaces. Expert in translating design concepts into functional code using Figma prototypes.',
      skills: ['Figma', 'UI Design', 'UX Design', 'Responsive Design', 'Prototyping']
    },
    {
      id: 3,
      icon: '💡',
      title: 'Problem Solving',
      description: 'Strong analytical and communication skills with a focus on delivering innovative solutions and maintaining customer satisfaction.',
      skills: ['Problem Solving', 'Communication', 'Customer Service', 'Python', 'Project Management']
    },
  ]

  return (
    <section id="expertise" className="section-container bg-darkGray/50">
      <h2 className="section-title">My Expertise</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {expertise.map((item) => (
          <div key={item.id} className="card">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-purple-400">{item.title.split(' ')[0]}</span>
              <span className="text-white ml-1">{item.title.substring(item.title.indexOf(' ') + 1)}</span>
            </h3>
            {item.subtitle && (
              <p className="text-gray-400 mb-4">{item.subtitle}</p>
            )}
            <p className="text-gray-400 mb-6 leading-relaxed">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Expertise

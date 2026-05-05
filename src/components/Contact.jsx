import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const Contact = () => {
  const { isDark } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, just log the form data
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message! I will get back to you soon.')
  }

  const contactLinks = [
    { label: 'Email', value: 'domingodavid1701@gmail.com', icon: '✉️' },
    { label: 'Phone', value: '09070419852', icon: '📱' },
    { label: 'Location', value: 'Lagos, Nigeria', icon: '📍' },
  ]

  return (
    <section id="contact" className="section-container">
      <h2 className={`section-title transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Info */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Let's Talk</h3>
          <p className={`mb-8 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you have any questions or just want to connect!
          </p>

          <div className="space-y-6">
            {contactLinks.map((link, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="text-2xl">{link.icon}</span>
                <div>
                  <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{link.label}</p>
                  <p className={`font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>{link.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 transition-colors ${isDark ? 'bg-gray-900 border border-gray-700 text-white placeholder-gray-500' : 'bg-white border border-gray-300 text-black placeholder-gray-400'}`}
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 transition-colors ${isDark ? 'bg-gray-900 border border-gray-700 text-white placeholder-gray-500' : 'bg-white border border-gray-300 text-black placeholder-gray-400'}`}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className={`w-full rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 transition-colors resize-none ${isDark ? 'bg-gray-900 border border-gray-700 text-white placeholder-gray-500' : 'bg-white border border-gray-300 text-black placeholder-gray-400'}`}
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button type="submit" className="cta-button w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

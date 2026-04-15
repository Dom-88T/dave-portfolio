# Tamal Sen - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

✨ **Modern Design** - Dark theme with purple accents
📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
⚡ **Fast Performance** - Built with Vite for optimal speed
🎨 **Beautiful UI** - Clean and professional interface
📧 **Contact Form** - Built-in contact functionality
🔄 **Smooth Scrolling** - Smooth navigation between sections

## Sections

- **Hero** - Eye-catching introduction
- **Expertise** - Showcase of technical skills
- **Work** - Featured projects and portfolio
- **Experience** - Professional background and experience
- **Contact** - Contact form and social links
- **Footer** - Quick navigation and credits

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons & Elements**: Unicode/Emoji icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd tamal-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Deployment

### Deploy to Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect Vite and configure settings
3. Deploy with a single click

### Deploy to Other Platforms

- GitHub Pages
- Netlify
- Firebase Hosting
- AWS Amplify

## Customization

### Update Personal Information

Edit the following files to add your information:
- `src/components/Hero.jsx` - Add your name and title
- `src/components/Expertise.jsx` - Update your skills
- `src/components/Work.jsx` - Add your projects
- `src/components/Experience.jsx` - Add your work experience
- `src/components/Contact.jsx` - Update contact details

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      dark: '#0f0f0f',
      darkGray: '#1a1a1a',
      accent: '#7c3aed', // Change this to your color
      accentLight: '#8b5cf6',
    },
  },
},
```

### Add Images

1. Place images in `src/assets/`
2. Import and use in your components

## Project Structure

```
tamal-portfolio/
├── src/
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── Hero.jsx
│   │   ├── Expertise.jsx
│   │   ├── Work.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.cjs
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is open source and available under the MIT License.

## Author

**Tamal Sen**
- Email: tamal@example.com
- LinkedIn: [linkedin.com/in/tamalsen](https://linkedin.com/in/tamalsen)
- GitHub: [github.com/tamalsen](https://github.com/tamalsen)

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## Support

If you have any questions or need help, feel free to reach out or open an issue on GitHub.

---

Made with ❤️ by Tamal Sen

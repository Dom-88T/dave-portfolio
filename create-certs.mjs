import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const certificates = [
  {
    name: 'python-cert.png',
    title: 'PYTHON PROGRAMMING\nCERTIFICATION',
    issuer: 'Mimo',
    accentColor: '#9370db'
  },
  {
    name: 'gamedev-cert.png',
    title: 'GAME DEVELOPMENT\nWITH AI CERTIFICATION',
    issuer: 'Mimo',
    accentColor: '#6495ed'
  },
  {
    name: 'entrepreneurship-cert.png',
    title: 'DIGITAL ENTREPRENEURSHIP\nCERTIFICATION',
    issuer: 'La Plage Meta Verse',
    accentColor: '#48d1cc'
  }
];

const outputDir = path.join(__dirname, 'public', 'certs');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

certificates.forEach(cert => {
  const svg = `
    <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="800" fill="#1a1a2e"/>
      <rect x="40" y="40" width="1120" height="720" fill="none" stroke="${cert.accentColor}" stroke-width="4"/>
      
      <text x="600" y="200" font-size="48" font-weight="bold" fill="${cert.accentColor}" text-anchor="middle" font-family="Arial">
        ${cert.title.split('\n')[0]}
      </text>
      <text x="600" y="260" font-size="48" font-weight="bold" fill="${cert.accentColor}" text-anchor="middle" font-family="Arial">
        ${cert.title.split('\n')[1] || ''}
      </text>
      
      <text x="600" y="450" font-size="56" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="Arial">
        DOMINGO TOMIWA DAVID
      </text>
      
      <text x="600" y="650" font-size="24" fill="#cccccc" text-anchor="middle" font-family="Arial">
        Issued by: ${cert.issuer}
      </text>
    </svg>
  `;

  const filepath = path.join(outputDir, cert.name.replace('.png', '.svg'));
  fs.writeFileSync(filepath, svg);
  console.log(`✓ Created: ${filepath}`);
});

console.log('All certificates created!');

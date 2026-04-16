const canvas = require('canvas');
const fs = require('fs');
const path = require('path');

const { createCanvas } = canvas;

// Create certificates
const certificates = [
  {
    name: 'python-cert.png',
    title: 'PYTHON PROGRAMMING\nCERTIFICATION',
    issuer: 'Mimo',
    bgColor: '#1a1a2e',
    accentColor: '#9370db'
  },
  {
    name: 'gamedev-cert.png',
    title: 'GAME DEVELOPMENT\nWITH AI CERTIFICATION',
    issuer: 'Mimo',
    bgColor: '#1a1a2e',
    accentColor: '#6495ed'
  },
  {
    name: 'entrepreneurship-cert.png',
    title: 'DIGITAL ENTREPRENEURSHIP\nCERTIFICATION',
    issuer: 'La Plage Meta Verse',
    bgColor: '#1a1a2e',
    accentColor: '#48d1cc'
  }
];

const outputDir = path.join(__dirname, 'public', 'certs');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

certificates.forEach(cert => {
  const canvas = createCanvas(1200, 800);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = cert.bgColor;
  ctx.fillRect(0, 0, 1200, 800);

  // Border
  ctx.strokeStyle = cert.accentColor;
  ctx.lineWidth = 4;
  ctx.strokeRect(40, 40, 1120, 720);

  // Title
  ctx.font = 'bold 48px Arial';
  ctx.fillStyle = cert.accentColor;
  ctx.textAlign = 'center';
  ctx.fillText(cert.title.split('\n')[0], 600, 200);
  if (cert.title.split('\n')[1]) {
    ctx.fillText(cert.title.split('\n')[1], 600, 260);
  }

  // Name
  ctx.font = 'bold 56px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('DOMINGO TOMIWA DAVID', 600, 450);

  // Issuer
  ctx.font = '24px Arial';
  ctx.fillStyle = '#cccccc';
  ctx.fillText(`Issued by: ${cert.issuer}`, 600, 650);

  // Save
  const buffer = canvas.toBuffer('image/png');
  const filepath = path.join(outputDir, cert.name);
  fs.writeFileSync(filepath, buffer);
  console.log(`✓ Created: ${filepath}`);
});

console.log('All certificates created!');

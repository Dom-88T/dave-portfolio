#!/usr/bin/env python
import os
import sys

try:
    from PIL import Image, ImageDraw
    
    cert_dir = 'public/certs'
    os.makedirs(cert_dir, exist_ok=True)
    
    # Create 3 certificate images
    certs = [
        ('python-cert.png', 'Python Programming'),
        ('gamedev-cert.png', 'Game Development with AI'),
        ('entrepreneurship-cert.png', 'Digital Entrepreneurship')
    ]
    
    for filename, title in certs:
        img = Image.new('RGB', (1200, 800), color=(245, 245, 245))
        draw = ImageDraw.Draw(img)
        draw.rectangle([(40, 40), (1160, 760)], outline='#6C63FF', width=4)
        draw.text((600, 200), 'CERTIFICATE', fill='#6C63FF')
        draw.text((600, 350), title, fill='#1a1a1a')
        draw.text((600, 600), 'DOMINGO TOMIWA DAVID', fill='black')
        img.save(os.path.join(cert_dir, filename))
        print(f'Created {filename}')
    
    print('All certificates created!')
except Exception as e:
    print(f'Error: {e}')
    sys.exit(1)

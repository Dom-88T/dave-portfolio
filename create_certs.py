from PIL import Image, ImageDraw
import os

# Create certs directory
os.makedirs('public/certs', exist_ok=True)

certs = [
    ('python-cert.png', 'Python\nProgramming', '#6C63FF'),
    ('gamedev-cert.png', 'Game Dev\nwith AI', '#6C63FF'),
    ('entrepreneurship-cert.png', 'Digital\nEntrepreneurship', '#8B0000')
]

for filename, title, color in certs:
    img = Image.new('RGB', (1200, 800), color=(245, 245, 245))
    draw = ImageDraw.Draw(img)
    
    # Border
    draw.rectangle([(40, 40), (1160, 760)], outline=color, width=4)
    draw.rectangle([(60, 60), (1140, 740)], outline=color, width=2)
    
    # Add some simple text
    draw.text((600, 250), 'CERTIFICATE', fill=color, anchor='mm')
    draw.text((600, 400), title, fill='#1a1a1a', anchor='mm')
    draw.text((600, 600), 'DOMINGO TOMIWA DAVID', fill='#1a1a1a', anchor='mm')
    
    img.save(f'public/certs/{filename}')
    print(f'Created {filename}')

print('Done!')


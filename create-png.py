import os

# Create simple valid PNG certificate images
output_dir = r'c:\Users\DELL\OneDrive\Documents\REACT\dave-portfolio\public\certs'

# Minimal valid PNG files (100x100 solid color images)
# Format: PNG signature + IHDR + IDAT + IEND

def create_minimal_png(filename, color_hex):
    """Create a minimal valid PNG file"""
    import struct, zlib
    
    width, height = 400, 300
    
    # Create colored image data
    pixels = bytearray()
    r, g, b = int(color_hex[1:3], 16), int(color_hex[3:5], 16), int(color_hex[5:7], 16)
    
    for y in range(height):
        pixels.append(0)  # filter byte
        for x in range(width):
            pixels.extend([r, g, b])
    
    # PNG header
    png = b'\x89PNG\r\n\x1a\n'
    
    # IHDR chunk
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)
    png += struct.pack('>I', 13) + b'IHDR' + ihdr_data + struct.pack('>I', zlib.crc32(b'IHDR' + ihdr_data) & 0xffffffff)
    
    # IDAT chunk
    idat_data = zlib.compress(bytes(pixels), 9)
    png += struct.pack('>I', len(idat_data)) + b'IDAT' + idat_data + struct.pack('>I', zlib.crc32(b'IDAT' + idat_data) & 0xffffffff)
    
    # IEND chunk
    png += struct.pack('>I', 0) + b'IEND' + struct.pack('>I', zlib.crc32(b'IEND') & 0xffffffff)
    
    path = os.path.join(output_dir, filename)
    with open(path, 'wb') as f:
        f.write(png)
    print(f'Created: {filename}')

# Create certificates
create_minimal_png('python-cert.png', '#9370db')       # Purple
create_minimal_png('gamedev-cert.png', '#6495ed')      # Cornflower blue
create_minimal_png('entrepreneurship-cert.png', '#cd853f')  # Peru

print('Done!')

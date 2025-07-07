import re
import colorsys
from PIL import Image, ImageDraw, ImageFont

def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])

def extract_colors(css):
    hex_pattern = r'#(?:[0-9a-fA-F]{3}){1,2}'
    rgb_pattern = r'rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)'
    hex_colors = re.findall(hex_pattern, css)
    rgb_colors = re.findall(rgb_pattern, css)

    for rgb in rgb_colors:
        hex_colors.append(rgb_to_hex(tuple(map(int, rgb))))

    return hex_colors

with open('style.css', 'r') as file:
    css_content = file.read()

colors = extract_colors(css_content)

unique_colors = list(set(colors))

def hex_to_rgb(hex_color):
    if len(hex_color) == 4:
        r, g, b = int(hex_color[1] * 2, 16), int(hex_color[2] * 2, 16), int(hex_color[3] * 2, 16)
    else:
        r, g, b = int(hex_color[1:3], 16), int(hex_color[3:5], 16), int(hex_color[5:7], 16)
    return r, g, b

def get_text_color(background_color):
    r, g, b = hex_to_rgb(background_color)
    brightness = 0.299 * r + 0.587 * g + 0.114 * b
    return 'black' if brightness > 127 else 'white'

def create_color_palette_image(colors, output_file):
    num_colors = len(colors)
    num_rows = (num_colors + 4) // 5
    block_width, block_height = 100, 100
    spacing = 20
    img_width = 5 * block_width + 6 * spacing
    img_height = num_rows * block_height + (num_rows + 1) * spacing

    image = Image.new('RGB', (img_width, img_height), color='white')
    draw = ImageDraw.Draw(image)
    font = ImageFont.truetype("/usr/share/fonts/TTF/Hack-Regular.ttf", 16)

    for i, color in enumerate(colors):
        row, col = divmod(i, 5)
        x = col * (block_width + spacing) + spacing
        y = row * (block_height + spacing) + spacing
        draw.rectangle((x, y, x + block_width, y + block_height), fill=color)
        text_color = get_text_color(color)
        draw.text((x + block_width // 2 - 30, y + block_height // 2 - 10), color, font=font, fill=text_color)

    image.save(output_file, 'PNG')

unique_colors.sort()
create_color_palette_image(unique_colors, 'color_palette.png')


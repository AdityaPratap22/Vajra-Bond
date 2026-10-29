import os
from PIL import Image

LOGO_PATH = r"c:\Users\adity\Desktop\VajraBond\public\images\logo.png"
APP_DIR = r"c:\Users\adity\Desktop\VajraBond\src\app"
PUBLIC_DIR = r"c:\Users\adity\Desktop\VajraBond\public"

def main():
    img = Image.open(LOGO_PATH).convert("RGBA")
    
    # Get bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        cropped = img.crop(bbox)
    else:
        cropped = img
        
    # Make sure it's square
    w, h = cropped.size
    max_dim = max(w, h)
    square_img = Image.new("RGBA", (max_dim, max_dim), (0, 0, 0, 0))
    paste_x = (max_dim - w) // 2
    paste_y = (max_dim - h) // 2
    square_img.paste(cropped, (paste_x, paste_y))
    
    # 1. Generate multi-resolution ICO file (16x16, 32x32, 48x48, 64x64)
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    
    app_ico_path = os.path.join(APP_DIR, "favicon.ico")
    public_ico_path = os.path.join(PUBLIC_DIR, "favicon.ico")
    
    square_img.save(app_ico_path, format="ICO", sizes=ico_sizes)
    square_img.save(public_ico_path, format="ICO", sizes=ico_sizes)
    print(f"Saved {app_ico_path} and {public_ico_path}")
    
    # 2. Generate 192x192 icon.png for high-res displays / Android
    icon_192 = square_img.resize((192, 192), Image.Resampling.LANCZOS)
    icon_192.save(os.path.join(APP_DIR, "icon.png"), format="PNG")
    icon_192.save(os.path.join(PUBLIC_DIR, "icon.png"), format="PNG")
    print("Saved 192x192 icon.png")
    
    # 3. Generate 180x180 apple-icon.png for iOS
    apple_180 = square_img.resize((180, 180), Image.Resampling.LANCZOS)
    apple_180.save(os.path.join(APP_DIR, "apple-icon.png"), format="PNG")
    apple_180.save(os.path.join(PUBLIC_DIR, "apple-touch-icon.png"), format="PNG")
    print("Saved 180x180 apple-icon.png")
    
    print("All favicon assets generated successfully!")

if __name__ == "__main__":
    main()

# 📸 Photo Assets Guide

## How to Add Your Custom Photos

### Quick Steps
1. **Name your photos** using the format: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
2. **Place them in this folder** (`src/assets/`)
3. **Update the `.env` file** to set how many photos to display

### Supported Formats
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

### Naming Convention
Your photos **must** follow this exact naming pattern:
```
photo1.jpg
photo2.jpg
photo3.jpg
photo4.jpg
photo5.jpg
photo6.jpg
```

---

# 🎵 Music Assets Guide

## How to Add Custom Birthday Music

### Quick Steps
1. **Name your music file**: `birthday-music.mp3`
2. **Place it in this folder** (`src/assets/`)
3. **Click on the speakers** in the scene to play/pause the music

### Supported Formats
- `.mp3` (recommended)
- `.wav`
- `.ogg`

### Music File Requirements
- **File name**: Must be exactly `birthday-music.mp3`
- **File size**: Keep under 5MB for faster loading
- **Duration**: 2-4 minutes recommended (it will loop automatically)
- **Volume**: The app will play at 50% volume by default

### How It Works
- Click any speaker in the left corner to play music
- The LED display turns **red** when music is playing
- The LED display is **green** when music is paused
- Music loops automatically
- Hover over speakers to see interaction highlight

### Music Recommendations
- Happy Birthday songs
- Upbeat party music
- Instrumental background music
- Personalized songs with meaning

---

## Example Setup
If you want to show 4 photos, you would:
1. Add these files to `src/assets/`:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - `photo4.jpg`

2. Update `.env` file:
   ```
   VITE_PHOTO_COUNT=4
   ```

### Photo Recommendations
- **Aspect Ratio**: 4:3 or similar (landscape orientation works best)
- **Resolution**: 800x600px or higher for best quality
- **File Size**: Keep under 2MB per image for faster loading
- **Content**: Choose photos that represent special memories!

### What Happens if Photos Are Missing?
If a photo file is missing, the app will display a colorful placeholder gradient instead. No errors, the experience continues smoothly! 🎨

### Troubleshooting
- ⚠️ Make sure file names are **lowercase** and exactly match the pattern
- ⚠️ Photos must be in the `src/assets/` folder, not `public/`
- ⚠️ After adding photos, **restart the dev server** to see changes
- ⚠️ Check browser console for any loading errors

### Current Setup
Check your `.env` file for:
```
VITE_PHOTO_COUNT=6
```
This means the app will look for `photo1.jpg` through `photo6.jpg`.

---

**Pro Tip**: Start with fewer photos and add more later. You can always increase `VITE_PHOTO_COUNT` as you add more images! 🎉

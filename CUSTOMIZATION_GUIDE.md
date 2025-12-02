# 🎉 Customization Guide

This guide helps you personalize the Birthday 3D website for your special someone!

## Quick Setup (5 minutes)

### Step 1: Copy the Template
```bash
cp .env.example .env
```

### Step 2: Personalize the `.env` File

Open `.env` in your text editor and update these values:

```env
# Basic Information
VITE_PERSON_NAME=Alex              # Change to recipient's name
VITE_PERSON_AGE=25                 # Change to recipient's age

# Custom Message
VITE_BIRTHDAY_MESSAGE=Wishing you a day filled with happiness and a year filled with joy!

# Photos
VITE_PHOTO_COUNT=6                 # How many photos you'll add
```

### Step 3: Add Photos

1. Place your photos in `src/assets/`
2. Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
3. Supported formats: `.jpg`, `.png`, `.webp`
4. See `src/assets/README.md` for detailed instructions

### Step 4: Restart the Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your personalized birthday site! 🎂

---

## Environment Variables Reference

| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `VITE_PERSON_NAME` | Birthday person's name | `Sarah` | Yes |
| `VITE_PERSON_AGE` | Person's age (sets candle count) | `25` | Yes |
| `VITE_BIRTHDAY_MESSAGE` | Custom intro message | `Happy Birthday!` | Yes |
| `VITE_PHOTO_COUNT` | Number of photos to display (max 8) | `6` | Yes |
| `VITE_CAKE_TIERS` | Number of cake layers | `3` | No (default: 3) |
| `VITE_CANDLE_COUNT` | Override candle count | `5` | No (default: uses age) |

## Advanced Customization

### Changing Colors and Themes

Edit individual component files to customize colors:

**Cake Colors** (`src/components/Cake.jsx`):
```jsx
// Line ~40: Cake tier colors
<meshStandardMaterial color="#ffd700" />  // Change color here
```

**Background** (`src/components/Environment.jsx`):
```jsx
// Background color and effects
<color attach="background" args={['#0a0a1a']} />
```

**Photo Frames** (`src/components/HangingPhotos.jsx`):
```jsx
// Frame colors and materials
<meshStandardMaterial color="#d4af37" />
```

### Customizing the Cake

**Change Cake Tiers:**
```env
VITE_CAKE_TIERS=4  # Makes a 4-tier cake
```

**Custom Candle Count:**
```env
VITE_CANDLE_COUNT=10  # Always show 10 candles, regardless of age
```

### Photo Configuration

**Maximum Photos**: Up to 8 photos can be displayed in the scene

**Photo Positions**: Photos are arranged in a circular gallery around the scene

**Placeholder Colors**: If photos are missing, colorful placeholders appear

## Troubleshooting

### Photos Not Showing?

1. ✅ Check file names: `photo1.jpg`, `photo2.jpg`, etc.
2. ✅ Verify files are in `src/assets/` folder
3. ✅ Restart dev server after adding photos
4. ✅ Check browser console for loading errors

### Candles Not Matching Age?

- Make sure `VITE_PERSON_AGE` is a number (no quotes)
- If using `VITE_CANDLE_COUNT`, it overrides the age

### Environment Variables Not Working?

1. ✅ File must be named exactly `.env` (not `.env.txt`)
2. ✅ Variables must start with `VITE_`
3. ✅ Restart dev server after changing `.env`
4. ✅ No spaces around `=` sign

## Deployment Checklist

Before deploying your personalized site:

- [ ] `.env` file is configured with correct information
- [ ] All photos are added to `src/assets/`
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`
- [ ] Environment variables configured in hosting platform
- [ ] Photos are included in the deployment

## Security Note

⚠️ **Important**: The `.env` file is in `.gitignore` and won't be committed to Git. This keeps personal information private. When deploying, you'll need to configure environment variables in your hosting platform's dashboard.

## Need Help?

- 📖 Check the main [README.md](README.md)
- 📸 See [src/assets/README.md](src/assets/README.md) for photo setup
- 🐛 Report issues on [GitHub](https://github.com/ak-1344/Birthday-3d/issues)
- 💡 Suggest features in [GitHub Discussions](https://github.com/ak-1344/Birthday-3d/discussions)

---

## Examples

### Example 1: Minimalist (3 photos, simple message)
```env
VITE_PERSON_NAME=Emma
VITE_PERSON_AGE=30
VITE_BIRTHDAY_MESSAGE=Happy 30th Birthday!
VITE_PHOTO_COUNT=3
VITE_CAKE_TIERS=2
```

### Example 2: Extravagant (8 photos, multi-tier cake)
```env
VITE_PERSON_NAME=Michael
VITE_PERSON_AGE=40
VITE_BIRTHDAY_MESSAGE=Celebrating 40 amazing years! Here's to many more adventures together!
VITE_PHOTO_COUNT=8
VITE_CAKE_TIERS=4
VITE_CANDLE_COUNT=40
```

### Example 3: Child's Birthday
```env
VITE_PERSON_NAME=Sophie
VITE_PERSON_AGE=7
VITE_BIRTHDAY_MESSAGE=Happy 7th Birthday Princess! 🎂👑
VITE_PHOTO_COUNT=5
VITE_CAKE_TIERS=3
```

---

Happy customizing! 🎉✨

**The project is now a reusable birthday template! 🎂✨**

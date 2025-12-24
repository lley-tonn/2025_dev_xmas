# 🎄 Merry Christmas Greeting Website

A beautiful, animated Christmas greeting website built with React.js, featuring festive animations, interactive elements, and a New Year countdown.

## ✨ Features

- **Animated Christmas Tree** - Twinkling lights and festive ornaments
- **Cute Elves** - Waving and bouncing with smooth animations
- **Santa Claus** - Floating and waving with "Ho Ho Ho!"
- **Dynamic Snowfall** - Toggle between heavy and light snow
- **Background Music** - Christmas music with play/pause controls
- **Sound Effects** - Interactive bell and chime sounds
- **New Year Countdown** - Real-time countdown to the new year
- **Responsive Design** - Looks great on mobile, tablet, and desktop
- **Smooth Animations** - 60fps Framer Motion animations

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd merryxmass
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. **Add Audio Files** (Important):
   Place the following files in the `public` folder:
   - `christmas-music.mp3` - Background Christmas music
   - `bell-sound.mp3` - Bell sound effect
   - `chime-sound.mp3` - Chime sound effect

   You can find royalty-free Christmas music and sound effects from:
   - [Pixabay](https://pixabay.com/music/)
   - [Free Music Archive](https://freemusicarchive.org/)
   - [Freesound](https://freesound.org/)

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [Vercel Dashboard](https://vercel.com/new)
3. Import your repository
4. Vercel will auto-detect the Vite configuration
5. Click "Deploy"

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

## 🎨 Customization

### Snow Intensity

Change the default snow intensity in `src/App.jsx`:
```javascript
const [snowIntensity, setSnowIntensity] = useState('heavy') // or 'minimal'
```

### Colors

Edit the color palette in the component CSS files:
- Christmas red: `#c41e3a`
- Forest green: `#2d6a3e`
- Gold: `#ffd700`

### Text Content

Update the greeting message in `src/App.jsx`:
```javascript
<h1 className="main-title">
  Your custom message here 🎄✨
</h1>
```

## 🎵 Audio File Requirements

- **Background Music**: MP3 format, ~2-5 minutes, loopable
- **Bell Sound**: MP3 format, short (1-3 seconds)
- **Chime Sound**: MP3 format, short (1-3 seconds)

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Built With

- [React](https://react.dev/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- CSS3 - Styling and animations

## 📄 Project Structure

```
merryxmass/
├── public/
│   ├── christmas-music.mp3
│   ├── bell-sound.mp3
│   └── chime-sound.mp3
├── src/
│   ├── components/
│   │   ├── ChristmasTree.jsx
│   │   ├── Elves.jsx
│   │   ├── Santa.jsx
│   │   ├── Snowfall.jsx
│   │   ├── MusicPlayer.jsx
│   │   ├── Countdown.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎁 Features Breakdown

### Snowfall System
- Configurable intensity (heavy/minimal)
- Parallax depth effect
- Smooth 60fps animations
- Performance optimized

### Music Player
- Auto-muted on load (browser policy compliant)
- Low default volume (30%)
- Looping playback
- Visual play/pause indicator

### New Year Countdown
- Real-time countdown
- Auto-activates within 7 days of New Year
- Animated number transitions
- Special "Happy New Year" message when reached

### Sound Effects
- Interactive bell sound
- Interactive chime sound
- Click-to-play functionality
- Volume optimized (40%)

## 📝 Notes

- The music player is muted by default to comply with browser autoplay policies
- Users must interact with the page before audio can play
- All animations are optimized for 60fps performance
- The countdown automatically appears when within 7 days of New Year

## 🎉 Credits

Created with ❤️ by **lley-tonn**

## 📜 License

Feel free to use this project for personal and commercial purposes.

---

Merry Christmas and Happy New Year! 🎄✨🎊

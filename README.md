# Say It Anyway.Ja Website

A modern, single-page React website for the "Say It Anyway.Ja" card game. This website features slide-based navigation, search functionality, detailed gradient backgrounds, and displays the game mascot.

## Features

- 🎨 Beautiful gradient backgrounds for each section
- 🔍 Search functionality to quickly navigate between sections
- 📱 Fully responsive design
- 🎯 Smooth scrolling navigation
- 📱 Social media links (Instagram & TikTok)
- 🎴 Mascot display

## Sections

1. **Home** - Welcome page with game title and mascot
2. **How to Play** - Complete game rules and instructions
3. **The 3 Suits** - Explanation of Green, Yellow, and Purple levels
4. **Wild Cards** - Wild card modifiers and rules
5. **Play for Points** - Competitive variation rules

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd SIA
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

### First Time Setup

1. Install gh-pages (already in package.json):
```bash
npm install
```

2. Update the `base` path in `vite.config.js` if your repository name is different from `SIA`:
```js
base: '/YOUR-REPO-NAME/',
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

### GitHub Repository Settings

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Source", select "Deploy from a branch"
4. Choose the `gh-pages` branch and `/ (root)` folder
5. Click Save

Your site will be live at: `https://[username].github.io/SIA/`

## Project Structure

```
SIA/
├── public/
│   └── cardy.png         # Mascot image
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Top-right nav with search
│   │   └── SocialMedia.jsx   # Social media links
│   ├── sections/
│   │   ├── Home.jsx          # Home slide
│   │   ├── HowToPlay.jsx     # How to Play slide
│   │   ├── ThreeSuits.jsx    # The 3 Suits slide
│   │   ├── WildCards.jsx     # Wild Cards slide
│   │   └── PlayForPoints.jsx # Play for Points slide
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── package.json
├── vite.config.js            # Vite configuration
└── README.md
```

## Technologies Used

- React 18
- Vite
- CSS3 (with gradients and animations)
- GitHub Pages

## Social Media

- Instagram: [@sayitanyway.ja](https://instagram.com/sayitanyway.ja)
- TikTok: [@sayitanywayja](https://tiktok.com/@sayitanywayja)

## License

This project is for the JA company "Say It Anyway.Ja".

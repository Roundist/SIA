import Navigation from './components/Navigation'
import Home from './sections/Home'
import HowToPlay from './sections/HowToPlay'
import ThreeSuits from './sections/ThreeSuits'
import WildCards from './sections/WildCards'
import PlayForPoints from './sections/PlayForPoints'
import Socials from './sections/Socials'
import './App.css'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSearch = (query) => {
    if (query.trim()) {
      const q = query.toLowerCase().trim()
      const index = [
        { id: 'home', terms: ['home', 'say', 'anyway', 'ja'] },
        { id: 'how-to-play', terms: ['how', 'play', 'rules'] },
        { id: 'three-suits', terms: ['suits', 'levels', 'green', 'yellow', 'purple'] },
        { id: 'wild-cards', terms: ['wild', 'card', 'cards', 'charades', 'rapid', 'wrong'] },
        { id: 'play-for-points', terms: ['points', 'competitive', 'score'] },
        { id: 'socials', terms: ['social', 'socials', 'instagram', 'tiktok'] },
      ]

      const match = index.find((entry) => entry.terms.some((t) => t.includes(q) || q.includes(t)))
      if (match) scrollToSection(match.id)
    }
  }

  return (
    <div className="app">
      <Navigation onSearch={handleSearch} scrollToSection={scrollToSection} />
      <Home />
      <HowToPlay />
      <ThreeSuits />
      <WildCards />
      <PlayForPoints />
      <Socials />
    </div>
  )
}

export default App

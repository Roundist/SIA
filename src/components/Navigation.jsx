import { useState } from 'react'
import './Navigation.css'

function Navigation({ onSearch, scrollToSection }) {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchValue(value)
    onSearch(value)
  }

  const handleLinkClick = (sectionId) => {
    scrollToSection(sectionId)
    setSearchValue('')
  }

  return (
    <header className="siteHeader">
      <nav className="navShell" aria-label="Site navigation">
        <button className="brand" onClick={() => handleLinkClick('home')}>
          Say It Anyway<span className="brandDot">.</span><span className="brandJa">Ja</span>
        </button>

        <div className="navPill">
          <div className="navLinks">
            <button onClick={() => handleLinkClick('how-to-play')} className="navLink">
              How to Play
            </button>
            <button onClick={() => handleLinkClick('three-suits')} className="navLink">
              The 3 Suits
            </button>
            <button onClick={() => handleLinkClick('wild-cards')} className="navLink">
              Wild Cards
            </button>
            <button onClick={() => handleLinkClick('play-for-points')} className="navLink">
              Play for Points
            </button>
            <button onClick={() => handleLinkClick('socials')} className="navLink">
              Socials
            </button>
          </div>

          <div className="navDivider" />

          <div className="searchWrap">
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchChange}
              className="searchInput"
              aria-label="Search slides"
            />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navigation

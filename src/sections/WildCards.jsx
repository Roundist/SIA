import './WildCards.css'

function WildCards() {
  return (
    <section id="wild-cards" className="slide wild-cards-slide">
      <div className="container">
        <div className="sectionHeader">
          <p className="eyebrow">Modifiers</p>
          <h2 className="sectionTitle">Wild Cards</h2>
          <p className="sectionLead">
            Wild Cards act as modifiers for the next card drawn — the next answer must follow the modifier.
          </p>
        </div>
        <div className="wild-cards-content">
          <div className="modifiers-section">
            <h3 className="section-heading">Here are the modifiers:</h3>
            <div className="modifiers-grid">
              <div className="modifier-card">
                <div className="modifier-icon">🎭</div>
                <h4 className="modifier-title">Acted Out</h4>
                <p className="modifier-description">
                  The next answer must be acted out (like charades)
                </p>
              </div>

              <div className="modifier-card">
                <div className="modifier-icon">⚡</div>
                <h4 className="modifier-title">Rapid Fire</h4>
                <p className="modifier-description">
                  The next answer must be rapid fire
                </p>
              </div>

              <div className="modifier-card">
                <div className="modifier-icon">🔄</div>
                <h4 className="modifier-title">Most Wrong</h4>
                <p className="modifier-description">
                  The correct answer is now the one that is most wrong
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WildCards

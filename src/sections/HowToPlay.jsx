import './HowToPlay.css'

function HowToPlay() {
  return (
    <section id="how-to-play" className="slide how-to-play-slide">
      <div className="container">
        <div className="sectionHeader">
          <p className="eyebrow">Basics</p>
          <h2 className="sectionTitle">How to Play</h2>
          <p className="sectionLead">
            “Say It Anyway.Ja” is about fostering a deep sense of friendship with your team.
          </p>
        </div>
        <div className="rules-content">
          <div className="rules-section">
            <h3 className="section-heading">Rules:</h3>
            <ol className="rules-list">
              <li>Start the game by placing the deck face down in the middle of the play space.</li>
              <li>The youngest person draws a card and play proceeds clockwise.</li>
              <li>Once someone has drawn a card, they read out the question on the card to the table about themselves.</li>
              <li>Everyone then takes turns answering the question in clockwise order.</li>
              <li>After everyone has answered the question, the person who drew the card picks the answer they like the most and gives the card to that person.</li>
            </ol>
          </div>

          <div className="rules-section">
            <h3 className="section-heading">Which Level to Play:</h3>
            <ul className="level-list">
              <li><strong>Green (Level 1)</strong> - Office, People that you just met, etc.</li>
              <li><strong>Yellow (Level 2)</strong> - Classmates, acquaintances, etc.</li>
              <li><strong>Purple (Level 3)</strong> - Close friends, family, etc.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToPlay

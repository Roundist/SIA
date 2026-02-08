import './PlayForPoints.css'

function PlayForPoints() {
  return (
    <section id="play-for-points" className="slide play-for-points-slide">
      <div className="container">
        <div className="sectionHeader">
          <p className="eyebrow">Variation</p>
          <h2 className="sectionTitle">Play for Points</h2>
          <p className="sectionLead">
            A competitive variation — but remember, Say It Anyway.Ja is still about connecting with friends.
          </p>
        </div>
        <div className="points-content">
          <div className="rules-section">
            <h3 className="section-heading">Rules:</h3>
            <ol className="rules-list">
              <li>Start the game by placing the deck face down in the middle of the play space.</li>
              <li>The oldest person draws a card and play proceeds clockwise.</li>
              <li>Once someone has drawn a card, they read out the question on the card to the table about themselves.</li>
              <li>Everyone then takes turns answering the question in clockwise order.</li>
              <li>After everyone has answered the question, the person who drew the card picks the answer they like the most and gives the card to that person and they get points based on the suit of the card.</li>
            </ol>
          </div>

          <div className="rules-section">
            <h3 className="section-heading">Which Level to Play:</h3>
            <p className="important-note">
              When playing for points you must play with all levels!!!
            </p>
          </div>

          <div className="rules-section">
            <h3 className="section-heading">The 3 Suits:</h3>
            <ul className="level-list">
              <li><strong>Green (Level 1)</strong> - These questions are the more basic surface level questions. This level works best if you are trying to learn more about each member in the group.</li>
              <li><strong>Yellow (Level 2)</strong> - This is the intermediate level of questions. This works if you only have basic knowledge of the various members of the group.</li>
              <li><strong>Purple (Level 3)</strong> - These are the more deep and philosophical questions that work best for groups where you know each member well.</li>
            </ul>
            <p className="points-note">
              The Levels of the Cards denote the number you get for them.
            </p>
          </div>

          <div className="rules-section">
            <h3 className="section-heading">Wild Card (Level 4):</h3>
            <p className="wild-card-intro">
              There are a total of 6 to 3 Wild Cards in the deck. The wild cards act as modifiers for the next card drawn; the next answer must follow the Wild card. Here are the modifiers:
            </p>
            <ul className="modifiers-list">
              <li>The next answer must be acted out (like charades)</li>
              <li>The next answer must be rapid fire</li>
              <li>The correct answer is now the one that is most wrong</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlayForPoints

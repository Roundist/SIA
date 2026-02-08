import './ThreeSuits.css'

function ThreeSuits() {
  return (
    <section id="three-suits" className="slide three-suits-slide">
      <div className="container">
        <div className="sectionHeader">
          <p className="eyebrow">Levels</p>
          <h2 className="sectionTitle">The 3 Suits</h2>
          <p className="sectionLead">
            Choose the level that matches your group’s familiarity.
          </p>
        </div>
        <div className="suits-content">
          <div className="suit-card green-suit">
            <div className="suit-header">
              <div className="suit-color-indicator green"></div>
              <h3 className="suit-title">Green (Level 1)</h3>
            </div>
            <p className="suit-description">
              These questions are the more basic surface level questions. This level works best if you are trying to learn more about each member in the group.
            </p>
          </div>

          <div className="suit-card yellow-suit">
            <div className="suit-header">
              <div className="suit-color-indicator yellow"></div>
              <h3 className="suit-title">Yellow (Level 2)</h3>
            </div>
            <p className="suit-description">
              This is the intermediate level of questions. This works if you only have basic knowledge of the various members of the group.
            </p>
          </div>

          <div className="suit-card purple-suit">
            <div className="suit-header">
              <div className="suit-color-indicator purple"></div>
              <h3 className="suit-title">Purple (Level 3)</h3>
            </div>
            <p className="suit-description">
              These are the more deep and philosophical questions that work best for groups where you know each member well.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThreeSuits

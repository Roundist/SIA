import './Home.css'
import cardy from '/cardy.png'

function Home() {
  return (
    <section id="home" className="slide home-slide">
      <div className="container">
        <div className="homeHero">
          <div className="homeCopy">
            <p className="eyebrow">A JA Card Game</p>
            <h1 className="homeTitle">
              Say It Anyway<span className="brandDot">.</span>
              <span className="homeJa">Ja</span>
            </h1>
            <p className="homeLead">
              A card game about fostering deep friendships and meaningful connections.
            </p>

            <div className="homeHint">
              Scroll or use the top menu to learn how to play.
            </div>
          </div>

          <div className="homeMascot">
            <img src={cardy} alt="Cardy the Mascot" className="mascot" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

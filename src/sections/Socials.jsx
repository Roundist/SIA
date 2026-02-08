import './Socials.css'

function Socials() {
  return (
    <section id="socials" className="slide socials-slide">
      <div className="container">
        <div className="sectionHeader">
          <p className="eyebrow">Follow us</p>
          <h2 className="sectionTitle">Socials</h2>
          <p className="sectionLead">
            Updates, behind the scenes, and new card drops.
          </p>
        </div>

        <div className="socialGrid">
          <a
            className="socialCard"
            href="https://instagram.com/sayitanyway.ja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="socialCardTop">
              <div className="socialBadge ig">Instagram</div>
              <div className="socialHandle">sayitanyway.ja</div>
            </div>
            <div className="socialCta">Open Instagram →</div>
          </a>

          <a
            className="socialCard"
            href="https://tiktok.com/@sayitanywayja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="socialCardTop">
              <div className="socialBadge tt">TikTok</div>
              <div className="socialHandle">sayitanywayja</div>
            </div>
            <div className="socialCta">Open TikTok →</div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Socials


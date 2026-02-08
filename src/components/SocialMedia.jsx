import './SocialMedia.css'

function SocialMedia() {
  return (
    <div className="social-media">
      <a 
        href="https://instagram.com/sayitanyway.ja" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link instagram"
      >
        <span className="social-icon">📷</span>
        <span className="social-text">@sayitanyway.ja</span>
      </a>
      <a 
        href="https://tiktok.com/@sayitanywayja" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link tiktok"
      >
        <span className="social-icon">🎵</span>
        <span className="social-text">@sayitanywayja</span>
      </a>
    </div>
  )
}

export default SocialMedia

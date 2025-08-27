import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="hero-text">
          <p className="subtitle">DIVI PIXEL CHURCH LAYOUT PACK</p>
          <h1 className="hero-title">
            EXPERIENCE<br />
            GOD'S LOVE
          </h1>
          <div className="hero-description-container">
            <p className="hero-description">BECOME PART OF OUR FAITHFUL COMMUNITY</p>
          </div>
          
          <div className="hero-quote">
            <blockquote>
              "To be a Christian means to forgive the inexcusable because God has 
              forgiven the inexcusable in you."
            </blockquote>
            <cite>- C.S. Lewis</cite>
          </div>
        </div>
        
        {/* Left side - Established */}
        <div className="established">
          <h2>1971</h2>
          <p>ESTABLISHED</p>
        </div>
        
        {/* Bottom - Scroll indicator */}
        <div className="scroll-indicator">
          <p>SCROLL DOWN</p>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
      
      {/* Bottom Navigation Bar */}
      <div className="hero-navigation">
        <div className="nav-item">
          <h3>SERVANT</h3>
          <p>LEADERSHIP</p>
        </div>
        <div className="nav-item">
          <h3>GUIDANCE</h3>
          <p>COUNSELING</p>
        </div>
        <div className="nav-item">
          <h3>PRAISE</h3>
          <p>WORSHIP</p>
        </div>
        <div className="nav-item">
          <h3>WORSHIP</h3>
          <p>SERVICES</p>
        </div>
        <div className="nav-item">
          <h3>SCHOLAR</h3>
          <p>EDUCATION</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

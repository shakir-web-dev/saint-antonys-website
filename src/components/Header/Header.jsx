import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        {/* Left side - Donate button */}
        <div className="header-left">
          <button className="donate-btn">
            🔔 DONATE
          </button>
        </div>
        
        {/* Center - Navigation */}
        <nav className="header-center">
          <ul className="nav-menu">
            <li><a href="/" className="nav-link">HOMEPAGE</a></li>
            <li><a href="/about" className="nav-link">ABOUT</a></li>
            <li><a href="/blog" className="nav-link">BLOG ▼</a></li>
            <li><a href="/join" className="nav-link">✚ JOIN</a></li>
            <li><a href="/services" className="nav-link">SERVICES</a></li>
            <li><a href="/pages" className="nav-link">PAGES ▼</a></li>
          </ul>
        </nav>
        
        {/* Right side - Menu toggle */}
        <div className="header-right">
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰ MENU
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

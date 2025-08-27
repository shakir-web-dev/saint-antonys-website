import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Left side - Donate button */}
        <div className="header-left">
          <button className="donate-btn">
            🔔 DONATE
          </button>
        </div>
        
        {/* Center - Navigation with Logo */}
        <nav className="header-center">
          <ul className="nav-menu">
            <li><a href="/" className="nav-link">HOMEPAGE</a></li>
            <li><a href="/about" className="nav-link">ABOUT</a></li>
            <li><a href="/blog" className="nav-link">BLOG ▼</a></li>
            
            {/* Church Logo */}
            <li className="logo-item">
              <div className="church-logo">
                <svg viewBox="0 0 40 50" className="church-logo-svg">
                  <path d="M20 2 L28 20 L32 20 L32 45 L8 45 L8 20 L12 20 Z" fill="white"/>
                  <rect x="18" y="0" width="4" height="10" fill="white"/>
                  <rect x="16" y="2" width="8" height="3" fill="white"/>
                  <rect x="17" y="35" width="6" height="10" fill="rgba(139, 0, 0, 0.8)"/>
                  <rect x="12" y="25" width="4" height="6" fill="rgba(139, 0, 0, 0.8)"/>
                  <rect x="24" y="25" width="4" height="6" fill="rgba(139, 0, 0, 0.8)"/>
                </svg>
              </div>
            </li>
            
            <li><a href="/join" className="nav-link">JOIN</a></li>
            <li><a href="/services" className="nav-link">SERVICES</a></li>
            <li><a href="/pages" className="nav-link">PAGES ▼</a></li>
          </ul>
        </nav>
        
        {/* Right side - Menu toggle */}
        <div className="header-right">
          <button className="menu-toggle">
            ☰ MENU
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

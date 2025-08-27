import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Left side - Logo (mobile) / Donate (desktop) */}
          <div className="header-left">
            {/* Mobile Logo - Left side */}
            <div className="church-logo mobile-logo">
              <svg viewBox="0 0 40 50" className="church-logo-svg">
                <path d="M20 2 L28 20 L32 20 L32 45 L8 45 L8 20 L12 20 Z" fill="white"/>
                <rect x="18" y="0" width="4" height="10" fill="white"/>
                <rect x="16" y="2" width="8" height="3" fill="white"/>
                <rect x="17" y="35" width="6" height="10" fill="rgba(139, 0, 0, 0.8)"/>
                <rect x="12" y="25" width="4" height="6" fill="rgba(139, 0, 0, 0.8)"/>
                <rect x="24" y="25" width="4" height="6" fill="rgba(139, 0, 0, 0.8)"/>
              </svg>
            </div>
            
            {/* Desktop Donate Button */}
            <button className="donate-btn desktop-only">
              🔔 DONATE
            </button>
          </div>
          
          {/* Center - Navigation (desktop only) */}
          <nav className="header-center">
            <ul className="nav-menu">
              <li><a href="/" className="nav-link">HOMEPAGE</a></li>
              <li><a href="/about" className="nav-link">ABOUT</a></li>
              <li><a href="/blog" className="nav-link">BLOG ▼</a></li>
              
              {/* Desktop Logo - In navigation */}
              <li className="logo-item desktop-logo">
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
          
          {/* Right side - Menu toggle (mobile only) */}
          <div className="header-right">
            <button 
              className="menu-toggle mobile-only"
              onClick={toggleMobileMenu}
            >
              ☰ MENU
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          {/* Church Logo at top */}
          <div className="mobile-menu-logo">
            <svg viewBox="0 0 40 50" className="mobile-menu-logo-svg">
              <path d="M20 2 L28 20 L32 20 L32 45 L8 45 L8 20 L12 20 Z" fill="white"/>
              <rect x="18" y="0" width="4" height="10" fill="white"/>
              <rect x="16" y="2" width="8" height="3" fill="white"/>
              <rect x="17" y="35" width="6" height="10" fill="rgba(139, 0, 0, 0.8)"/>
              <rect x="12" y="25" width="4" height="6" fill="rgba(139, 0, 0, 0.8)"/>
              <rect x="24" y="25" width="4" height="6" fill="rgba(139, 0, 0, 0.8)"/>
            </svg>
            <h2 className="mobile-menu-title">SAINT ANTONY'S<br/>CHURCH</h2>
          </div>
          
          {/* Close button */}
          <button className="mobile-menu-close" onClick={closeMobileMenu}>
            ✕
          </button>
        </div>

        <nav className="mobile-menu-nav">
          <ul className="mobile-menu-list">
            <li>
              <a href="/" className="mobile-menu-link" onClick={closeMobileMenu}>
                HOMEPAGE
              </a>
            </li>
            <li>
              <a href="/about" className="mobile-menu-link" onClick={closeMobileMenu}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="/blog" className="mobile-menu-link" onClick={closeMobileMenu}>
                BLOG
              </a>
            </li>
            <li>
              <a href="/join" className="mobile-menu-link" onClick={closeMobileMenu}>
                JOIN
              </a>
            </li>
            <li>
              <a href="/services" className="mobile-menu-link" onClick={closeMobileMenu}>
                SERVICES
              </a>
            </li>
            <li>
              <a href="/pages" className="mobile-menu-link" onClick={closeMobileMenu}>
                PAGES
              </a>
            </li>
          </ul>

          {/* Mobile Donate Button */}
          <div className="mobile-menu-donate">
            <button className="mobile-donate-btn" onClick={closeMobileMenu}>
              🔔 DONATE NOW
            </button>
          </div>
        </nav>

        <div className="mobile-menu-footer">
          <p>Experience God's Love</p>
          <span>EST. 1971</span>
        </div>
      </div>
    </>
  )
}

export default Header

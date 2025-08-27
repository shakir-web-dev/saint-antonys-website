import React from 'react'
import './ContentSections.css'

const ContentSections = () => {
  return (
    <div className="content-sections">
      <section className="events-section">
        <div className="container">
          <div className="church-info">
            <div className="church-logo-small">
              <div className="church-icon-small"></div>
              <p>SAINT ANTONY'S CHURCH</p>
              <p>EST. 1971 IN NEW YORK</p>
            </div>
            
            <h2>DISCOVER EVENTS WHERE</h2>
            <h3><em>faith, fellowship,</em> AND <em>community unite.</em> ALL ARE WELCOME!</h3>
            
            <div className="authority-section">
              <h4>CHURCH AUTHORITY</h4>
              <p>PROTESTANT EPISCOPAL</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContentSections

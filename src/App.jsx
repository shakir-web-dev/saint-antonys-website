import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/Hero/HeroSection'
import ContentSections from './components/Content/ContentSections'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ContentSections />
      <Footer />
    </div>
  )
}

export default App

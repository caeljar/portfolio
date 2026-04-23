import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nav from './components/layouts/Nav'
import HeroSection from './pages/landing/components/sections/hero/HeroSection'
import Footer from './components/layouts/Footer'
import Hero3DCanvas from './pages/landing/components/sections/hero/Hero3DCanvas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <HeroSection />

    </>
  )
}

export default App

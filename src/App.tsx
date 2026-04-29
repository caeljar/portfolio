import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nav from './components/layouts/Nav'
import HeroSection from './pages/landing/sections/hero/HeroSection'
import Footer from './components/layouts/Footer'
import Hero3DCanvas from './pages/landing/sections/hero/Hero3DCanvas'
import CustomCursor from './components/global/CustomCursor'
import ExperienceSection from './pages/landing/sections/experience/ExperienceSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomCursor />
      {/** Nav Section **/}
      <Nav />
      {/** Hero Section **/}
      <HeroSection />
      {/** Experience Section **/}
      <ExperienceSection />

    </>
  )
}

export default App

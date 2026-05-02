import { useState } from 'react'
import './App.css'
import Nav from './components/layouts/Nav'
import HeroSection from './pages/landing/sections/hero/HeroSection'
import CustomCursor from './components/global/CustomCursor'
import ExperienceSection from './pages/landing/sections/experience/ExperienceSection'
import CourseSection from './pages/landing/sections/courses/CourseSection'

function App() {

  return (
    <>
      <CustomCursor />
      {/** Nav Section **/}
      <Nav />
      {/** Hero Section **/}
      <HeroSection />
      {/** Experience Section **/}
      <ExperienceSection />
      {/** Course Section **/}
      <CourseSection />

    </>
  )
}

export default App

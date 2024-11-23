import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactSection from './components/ContactSection'
import HomeSection from './components/HomeSection'
import ProjectSection from './components/ProjectSection'
import QuestionsSection from './components/QuestionSection'
import Footer from './components/Footer'
import Nav from './components/nav'
function App() {
  return (
    <>
      <Nav/>
      <HomeSection />
      <ProjectSection/>
      <ContactSection/> 
      <QuestionsSection/>
      {/* <Footer/> */}
 
    </>
  )
}
export default App

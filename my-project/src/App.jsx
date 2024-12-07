import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactSection from './components/ContactSection'
import HomeSection from './components/HomeSection'
import ProjectSection from './components/ProjectSection'
import QuestionsSection from './components/QuestionSection'
import { ThemeProvider } from "@/components/theme-provider"

import Nav from './components/nav'
import Footer from './components/Footer'
import ServicesSection from './components/ServicesSection'
function App({children}) {
  return (
    <>   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
 
      <Nav/>
      <HomeSection />
      <ProjectSection/>
      <ServicesSection/>
      <ContactSection/> 
      <QuestionsSection/>
      <Footer/>
         </ThemeProvider>
 
    </>
  )
}
export default App

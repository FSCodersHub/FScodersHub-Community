
import './App.css'
import ContactSection from './components/ContactSection'
import HomeSection from './components/HomeSection'
import ProjectSection from './components/ProjectSection'
import QuestionsSection from './components/QuestionSection'
import { ThemeProvider } from "./components/theme-provider"
import WhatsAppLink from './components/WhatsappLink'
import Nav from './components/nav'
import Footer from './components/Footer'
import ServicesSection from './components/ServicesSection'
function App({children}) {
  
  return (
    <>   


    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {children}
 
      <Nav/>
      <HomeSection />
      <ProjectSection/>
      <ServicesSection/>
      <ContactSection/> 
      <QuestionsSection/>
      <WhatsAppLink />
      <Footer/>
         </ThemeProvider>
       
    </>
  )
}
export default App

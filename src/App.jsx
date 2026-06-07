import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import TechnicalProficiency from "./sections/TechnicalProficiency"
import AboutMe from "./sections/AboutMe"
import MyProjects from "./sections/MyProjects"
import ContactMe from "./sections/ContactMe"
import Footer from "./sections/Footer"

const App = () => {
      return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-500 ease-in-out">
                  <Navbar />
                  <Hero />
                  <TechnicalProficiency />
                  <AboutMe />
                  <MyPorfolio />
                  <ContactMe />
                  <Footer />
            </div>
      )
}

export default App

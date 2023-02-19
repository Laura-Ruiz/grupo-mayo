import { useEffect } from "react"
import { Banner, Contact, Footer, Navbar, Section, Subbanner } from "./components"
import "../src/App.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    Aos.init({duration:1000})
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Subbanner/>
      <Section/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

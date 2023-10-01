import { Header } from "./components/Header"
import { Banner } from "./components/Banner"
import { AboutMe } from "./components/AboutMe"
import { Tech } from "./components/Tech"
import { Projects } from "./components/Projects"
import { Footer } from "./components/Footer"
import "./Styles/style.css"


function App() {

  return (
    <>

      <Header />
      <main>
        <Banner />
        <AboutMe />
        <Tech />
        <Projects />
      </main>
      <Footer />
    
    </>
  )
}

export default App


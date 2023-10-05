import { DefaultTemplate } from "./components/DefautTemplate";
import { Banner } from "./components/Banner";
import { AboutMe } from "./components/AboutMe";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects";
import "./Styles/style.css";


function App() {

  return (
    <>

      <DefaultTemplate>
        <Banner />
        <AboutMe />
        <Tech />
        <Projects />
      </DefaultTemplate>
        
      
    
    </>
  );
}

export default App


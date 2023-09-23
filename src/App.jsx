//importações
import { Header } from "./components/Header"
import { Banner } from "./components/Banner"
import { AboutMe } from "./components/AboutMe"
import { Tech } from "./components/Tech"


function App() {
  // Javascript -> implementarei aqui tudo o que já conheço

  // Não utilizarei:

  //QuerySelector
  // DOM; MÉTODOS RELACIONADFOS A ELE
  // agora TUDO ISSO É MÁ PRÁTICA



  return (
    // Nas tags vazias é o HTML,  junção do0 mesmo com Js é o JSX -> aqui no JSX há limitações de códigos como não0 pode if, else QuerySelector etc...
    <>
      <Header />
      <Banner />
      <AboutMe />
      <Tech />
    </>
  )
}

export default App

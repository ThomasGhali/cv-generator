import generatorLogo from "./assets/cv-generator-logo-lq.png"
import Cv from "./components/Cv/Cv.jsx"
import Form from "./components/Form/Form.jsx"

export default function App() {
  return(
    <>
      <header className="generator-header">
          <img src={generatorLogo} alt="cv genenerator logo" className="generator-header__img" />
          <span className="generator-header__text">CV Generator</span>
      </header>
      <main className="main-content">
        <Cv />
        <Form />
      </main>
    </>
  )
}
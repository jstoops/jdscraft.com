import './App.css'
import Navigation from './components/Navigation'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Interests from './components/Interests'

function App() {
  return (
    <>
      <div id="page-top">
      <Navigation />
      <div className="container-fluid p-0">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Interests />
      </div>
    </div>
    </>
  )
}

export default App

import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <>
      <div id='page-top'>
        <Navigation />
        <div className='container-fluid p-0'>
          <About />
          <Services />
          <Projects />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default App;

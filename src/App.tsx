import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';

const ProjectsContent = lazy(() =>
  import('./components/Projects').then(({ ProjectsContent }) => ({
    default: ProjectsContent,
  })),
);

function DeferredProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className='resume-section'
        id='projects'
        aria-busy={!shouldLoad}
        style={{ minHeight: '100vh' }}
      >
        {shouldLoad ? (
          <Suspense
            fallback={
              <div className='resume-section-content projects'>
                <h2>Projects</h2>
              </div>
            }
          >
            <ProjectsContent />
          </Suspense>
        ) : (
          <div className='resume-section-content projects'>
            <h2>Projects</h2>
          </div>
        )}
      </section>
      <hr className='m-0' />
    </>
  );
}

function App() {
  return (
    <>
      <div id='page-top'>
        <Navigation />
        <div className='container-fluid p-0'>
          <About />
          <Services />
          <DeferredProjects />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default App;

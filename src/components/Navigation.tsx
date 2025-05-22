import reactLogo from '/img/react.svg';
import viteLogo from '/img/vite.svg';

export default function Navigation() {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'
      id='sideNav'
    >
      <a className='navbar-brand js-scroll-trigger' href='#page-top'>
        <span className='d-block d-lg-none'>JDSCraft</span>
        <span className='d-none d-lg-block'>
          <img
            className='img-fluid img-profile rounded-circle mx-auto mb-2'
            src='img/avatar.jpg'
            alt=''
          />
        </span>
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#about'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#services'>
              Services
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#projects'>
              Projects
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#skills'>
              Skills
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h4>Built using Vite + React</h4>
    </nav>
  );
}

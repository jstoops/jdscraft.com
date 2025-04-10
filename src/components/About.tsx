function calculateYears(startDate) {
  const today = new Date();
  const pastDate = new Date(startDate);
  return today.getFullYear() - pastDate.getFullYear();
}

export default function About() {
  const dateString = '1998-7-1';
  const year = calculateYears(dateString);
  return (
    <section className='resume-section' id='about'>
      <div className='resume-section-content'>
        <h1 className='mb-0'>
          JDS
          <span className='text-primary'>Craft</span>
        </h1>
        <div className='subheading mb-3'>IT Consultant</div>
        <p className='lead'>
          Over {year} years in IT developing technical solutions and over 8
          years experience as an IT leader at Hawaiian Airlines (now Alaska
          Airlines).
        </p>
        <p className='lead'>
          I am experienced in building and architecting enterprise level
          software in the cloud, leading, mentoring and developing agile
          development teams, and aligning business and IT strategies with
          technology and architectural roadmaps.
        </p>
        <p className='lead'>
          I specialize in leading IT departments through transforming their
          aging IT infrastructure and outdated software development practices
          into cost-effective IT departments using modern technology,
          engineering practices and design principles aligned with the business
          and IT strategic objectives, and optimized development processes
          enhanced with GenAI.
        </p>
        <div className='subheading mb-3'>What I enjoy:</div>
        <ul>
          <li>leading the transformation of IT organizations</li>
          <li>developing high performing technical teams</li>
          <li>
            integraing AI into development, operations, and business processes
          </li>
          <li>
            embracing disruptive technologies, managing innovations, and
            applying them
          </li>
        </ul>
        <div className='subheading mb-3'>What I have experience doing:</div>
        <ul>
          <li>
            working across IT and business leadership to convert strategies into
            guiding principles, target architecture and roadmaps
          </li>
          <li>
            creating multi-year plans to deliver capabilities and information
            for competitive advantage
          </li>
          <li>
            hands-on management of technical teams to deliver on commitments and
            contain entropy
          </li>
          <li>
            negotiating with leadership realistic timelines that deliver value
          </li>
          <li>
            mentoring and couching technical personnel into leaders, high
            performers and senior engineers
          </li>
          <li>
            developing and enforcing coding standards, design principles and
            quality controls
          </li>
          <li>
            creating technology governance plans to safely use new technology
            and processes
          </li>
          <li>fullstack development, LLM engineering, software architecture</li>
        </ul>
        <div className='social-icons'>
          <a
            className='social-icon'
            href='https://www.linkedin.com/in/jstoops/'
          >
            <i className='fab fa-linkedin-in' />
          </a>
          <a className='social-icon' href='https://github.com/jstoops'>
            <i className='fab fa-github' />
          </a>
        </div>
      </div>
    </section>
  );
}

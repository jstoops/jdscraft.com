export default function About() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          JDS
          <span className="text-primary">Craft</span>
        </h1>
        <div className="subheading mb-5">IT Consultant</div>
        <p className="lead mb-5">
          I am experienced in building and architecting enterprise level
          software in the cloud, leading, mentoring and developing agile
          development teams, and aligning business and IT strategies with
          technology and architectural roadmaps.
        </p>
        <p className="lead mb-5">
           I specialize in leading IT departments through transforming
           their aging IT infrastructure and outdated software development
           practices into cost-effective IT departments using modern
           technology, engineering practices and design principles aligned
           with the business and IT strategic objectives, and optimized
           development processes enhanced with GenAI.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/jstoops/"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="social-icon" href="https://github.com/jstoops">
            <i className="fab fa-github" />
          </a>
          <a className="social-icon" href="https://x.com/johnstoops">
            <i className="fab fa-twitter" />
          </a>
          <a
            className="social-icon"
            href="https://www.youtube.com/channel/UCvuze4GwMxJV2Z8Vou9QKQQ/featured"
          >
            <i className="fab fa-youtube" />
          </a>
          <a className="social-icon" href="https://medium.com/@john.stoops">
            <i className="fab fa-medium" />
          </a>
        </div>
      </div>
    </section>
  );
}
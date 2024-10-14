export default function Experience() {
  return (
    <div>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Director, IT – Data & Common Services</h3>
              <div className="subheading mb-3">Hawaiian Airlines, Inc.</div>
              <p>
                Accountable for implementing a shared services strategy across all
                of HA IT for our integration, data, and analytics platforms.
                Ensure the diverse needs of our entire IT portfolio toward common
                capabilities, processes, and tools. This includes an equally
                strong balance of business services, data services, and technical
                services and requires negotiation and coordination across many
                involved parties and adherence to best practices and principles
                in IT.
              </p>
              <p>
                Continually reducing the overall cost of delivering IT services
                to Hawaiian Airlines by building a leverageable common core that
                ensures consistency, reuse across the HA enterprise, and a
                data-first strategy.
              </p>
              </div>
            <div className="flex-shrink-0">
              <span className="text-primary">July 2023 - Present</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Senior IT Manager</h3>
              <div className="subheading mb-3">Hawaiian Airlines, Inc.</div>
              <p>
                Managing the IT Data & Common Services integration team building
                secure, highly available services for the Kiosk, Web, and Mobile
                channels supporting capabilities such as Ticket Enterprise Data
                Store (TEDS), Enterprise File Gateway (EFG), Self-Service Checkin
                (SSC), Shopping and Flight Status. Leading a team of software
                developers and technical analysts to build quality systems,
                improve development processes, develop effective hiring processes
                and onboarding programs for SDE job family, retain employees, and
                guide other IT teams on best practices in development and design.
              </p>
              <ul>
                <li>
                  <b>SSCI:</b> Led the team designing and developing the services that
                  deliver the Self-Service Checkin capabilities delivering a
                  platform of common capabilities, processes, and tools by
                  documenting the development process, best practices, and
                  integration patterns used.
                </li>
                <li>
                  <b>TEDS:</b> Led the team designing and building the enterprise
                  data store for tickets ensuring the ingesting of data from various
                  ticket data sources, providing APIs, and data exchanges to apps.
                </li>
                <li>
                  <b>EFG:</b> Led the team in creating the platform for all external
                  files coming onto HA and the patterns for integrating with them for
                  dissemination to all systems that use them.
                </li>
                <li>
                  <b>PSS Migration:</b> Led the team that built the automated processes
                  for creating the connectors to the Amadeus Passenger Service System
                  (PSS) for use by any application running on our integration platform,
                  migrated the SSCI common services, and helped other teams successfully
                  migrate to the new PSS.
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">September 2020 - July 2023</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">IT Manager</h3>
              <div className="subheading mb-3">Hawaiian Airlines, Inc.</div>
              <p>
                Upon starting I worked with other managers and developers to start a
                grassroots effort to use agile development practices (XP, Lean, iterative
                Unified Process, Scrum), CI/CD, and automated tests. I worked with senior
                developers and IT managers to document these coding and quality standards
                to bring benefits to the rest of the organization.
              </p>
              <ul>
                <li>
                  <b>Payments Team:</b> Within the first couple of months had turned the
                  Payment team around from fixing bugs 90% of the time to just working on
                  new features by refactoring all the code to achieve 100+% unit test
                  coverage to detect regression issues with any changes made before
                  releasing them.
                </li>
                <li>
                  <b>PCI Project:</b> When the organization needed to comply with PCI
                  regulations, I was chosen to lead the AWS Cardholder Data Environment
                  (CDE) project that was completed within a tight deadline and has proven
                  to be a highly reliable, secure, robust payment processing system.
                </li>
                <li>
                  <b>Mobile App Beachhead Project:</b> Joint lead for the team developing
                  the foundation for the HA Hub to meet the organization's IT strategic
                  goals, prove out the enterprise architecture, and lay the foundation for
                  Data & Common Services to transform HA's aging IT infrastructure and
                  outdated software development practices using modern technology and design
                  principles. MVP features included SSCI, shopping, flight status,
                  enterprise service bus (ESB) messaging platform, and push notifications.
                </li>
              </ul>
            </div>
          <div className="flex-shrink-0">
              <span className="text-primary">February 2016 - August 2020</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}
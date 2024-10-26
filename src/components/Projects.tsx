export default function Projects() {
  return (
    <div>
      <section className="resume-section" id="projects">
        <div className="resume-section-content projects">
          <h2 className="mb-1">Projects</h2>
          <div className="subheading mb-2">Hawaiian Airlines projects</div>
          <div className="d-flex row mb-5">
            <div
              className="card col-md-12 col-12 mx-2 mb-1"
              style={{ width: "14rem" }}
            >
              <img
                className="card-img-top"
                src="img/RandomQuotes.png"
                alt="Project 1 alt text"
              />
            <div className="card-body">
                <h5 className="card-title">FDM Retirement</h5>
                <p>
                  <b>Goal: </b>Retire legacy flight data mart (FDM) enterprise data warehouse to reduce operational costs and non-labor IT budget. Technology:
                  Microsoft SQL server, SSIS, Crystal Reports, Microsoft Orchastrator.</p>
                <ul>
                  <li>
                    Lead the various workstreams to intergrate the the operational processes with the modern
                    API, ingestion pipelines, enterprise service bus (ESB), and operation data store (ODS)
                    data stack. Technology: MuleSoft apps, S3, AWS SNS, AWS SQS, ActiveMQ, Anypoint MQ, MongoDB.
                  </li>
                  <li>
                    Re-engineer the flight data ingestion pipelines to feeds the data analytics stack.
                    Technology: Snowflake, Airflow, python, DBT.
                  </li>
                  <li>
                    Provide operation dashboards of near-realtime data, data visualization, and tools for analysis of historical data. Technology: Angular, MuleSoft Apps, MongoDB, Snowflake, DBT, Tableau.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="subheading mb-2">Company project</div>
          <div className="d-flex row  mb-5">
            <div
              className="card col-md-3 col-12 mx-2 mb-1"
              style={{ width: "14rem" }}
            >
              <img
                className="card-img-top"
                src="img/RandomQuotes.png"
                alt="Project 1 alt text"
              />
            <div className="card-body">
                <h5 className="card-title">Project 1 Name</h5>
                <a
                  href="https://github.com/saurabhnative/randomadvicegenerator"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
                <a
                  href="https://generateadvice.netlify.app/"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Demo
                </a>
              </div>
            </div>
            <div
              className="card col-md-3 col-12 mx-2 mb-1"
              style={{ width: "16rem" }}
            >
              <img
                className="card-img-top"
                src="img/StoriesFeed.png"
                alt="Card image cap"
              />
             <div className="card-body">
                <h5 className="card-title">Project 2 Name</h5>
                <a
                  href="https://github.com/saurabhnative/storiesfeedapp"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
                <a
                  href="https://stories-feed-app.netlify.app/"
                  target="_blank"
                  className="btn btn-secondary"
                >
               Demo
                </a>
              </div>
            </div>
            <div
              className="card col-md-3 col-12 mx-2 mb-1"
              style={{ width: "14rem" }}
            >
              <img
                className="card-img-top"
                src="img/IDCardGen.png"
                alt="Card image cap"
              />
             <div className="card-body">
                <h5 className="card-title">Project 3 Name</h5>
                <a
                  href="https://github.com/saurabhnative/react30_1_id_card_generator"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
                <a
                  href="https://id-card-generator-2021.netlify.app/"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}
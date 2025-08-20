import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

function PSoft() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <h1 className="text-page-header">Course Website</h1>
          <div id="text-body">
            <p>
              Principles of Software is a core computer science class at RPI, usually taken by students in their sophomore year.
              The course covers core software engineering practices, focusing on requirements, design, implementation, testing, and maintenance. 
              While the course had much to offer, its website left more to be desired. After a quick chat with the professor, I was given the 
              green light to work on it!
            </p>
            <h2>Changes</h2>
            <ol>
              <li>Dark Mode Toggle</li>
              <li>Components</li>
              <li>Reformatted Pages</li>
              <li>Dropdowns for content</li>
              <li>Added grade info</li>
            </ol>

            <div className="content-img-container">
              <img src="../../assets/og-psoft-index.png" className="project-img"/>
              <p className="content-img-desc" style={{ marginTop: "0" }}>Before</p>
            </div>
            <div className="content-img-container">
              <img src="../../assets/new-psoft-index.png" className="project-img"/>
              <p className="content-img-desc" style={{ marginTop: "0" }}>After</p>
            </div>
          </div>
        </div>
        <NavButton
          left="Submitty" leftNav="/projects/submitty"
          right="Portfolio Site" rightNav="/projects/portfolio"
        />
      </div>
    </>
  );
}

export default PSoft;
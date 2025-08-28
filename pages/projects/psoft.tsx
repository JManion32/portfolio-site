import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

import ogPsoftIndex from '../../assets/og-psoft-index.png';
import newPsoftIndex from '../../assets/new-psoft-index.png';
import newPsoftIndexDM from '../../assets/new-psoft-index-dm.png';

function PSoft() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Course Website</h1>
          </div>
          <div id="text-body">
            <p>
              Principles of Software is a core computer science course at RPI, typically taken during the sophomore year. 
              The class provides a foundation in software engineering, covering topics such as requirements gathering, 
              design, implementation, testing, and long-term maintenance. As a student in the course, I found the 
              material engaging and valuable, but its website did not reflect the same level of quality. Wanting to 
              improve the student experience while gaining web development experience myself, I put together a 
              storyboard for a revamped site and brought it to office hours. The professor was enthusiastic about my initiative 
              and gave me the opportunity to contribute directly, allowing me to transform the website into something 
              more functional and user-friendly.
            </p>
            <hr/>
            <h2>Enhancements</h2>
            <h3>Dark Mode Toggle</h3>
            <p>
              If you haven't noticed, I like to create dark mode toggles for any project that doesn't have them. 
              After a semester of using this site in light mode, adding dark mode was one of my top priorities.
              Added a <code>colors.css</code> file so all UI components would smoothly change color on toggle. Added 
              the toggle to the top right of the nav bar.
            </p>
            <h3>Components</h3>
            <p>

            </p>
            <h3>Reformatted Pages</h3>
            <h3>Dropdowns for content</h3>
            <h3>Added grade info</h3>
            <hr/>
            <h2>Future Plans</h2>
            <p>
              I offered to 
            </p>
            <hr/>
            <h2>Images</h2>
            <div className="content-img-container">
              <img src={ogPsoftIndex} className="project-img"/>
              <p className="content-img-desc" style={{ marginTop: "0" }}>Before</p>
            </div>
            <div className="content-img-container">
              <img src={newPsoftIndex} className="project-img"/>
              <p className="content-img-desc" style={{ marginTop: "0" }}>After</p>
            </div>
            <div className="content-img-container">
              <img src={newPsoftIndexDM} className="project-img"/>
              <p className="content-img-desc" style={{ marginTop: "0" }}>After (Dark Mode)</p>
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
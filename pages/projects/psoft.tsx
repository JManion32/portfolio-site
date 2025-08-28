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
              Previously, all components that were reused on the site copied and pasted to each page, meaning any edits 
              had to be made in multiple places. To solve this, I added <code>components.js</code>, a file to consolidate 
              all of these to a single file. This includes the nav bar, footer, and 
            </p>
            <h3>Reformatted Pages</h3>
            <p>
              As you can see at the bottom of the page, there is a stark contrast between the original landing page, and the new one. 
              My main focus with changes in structure of the pages was to improve readability. Text should not span the entire page on 
              a desktop, there is no need for a large picture, and sections of the page need to be clearly separated.
            </p>
            <p>
              Beyond the landing page, I fixed up others as well. One issue was the notes and assignments pages.
            </p>
            <h3>Added grade info</h3>
            <p>
              Adding the grade breakdown and cut offs is something students frequently look at (or at least I do), so I added 
              it to the bottom of the home page.
            </p>
            <hr/>
            <h2>Future Plans</h2>
            <p>
              I offered to maintain this site until I graduate in Spring 2026. In this time, there a few addtional contributions I 
              would like to make:
            </p>
            <h3>Revise Code / Design Patterns</h3>
            <p>
              I updated this site at the very beginning of my web development journey, and have since learned a lot. There is 
              plenty of room for improvement, such as:
            </p>
            <h3>Dividing CSS Files</h3>
            <p>The original site used Bootstrap for everything. When I came in, I decided to 
              override a lot of the set styles with my own classes. I put everything in a CSS file, which is not optimal for maintainability.
            </p>
            <h3>Responsive Scaling</h3>
            <p>
              As a fledgling web dev, I did not take responsive scaling into consideration. After creating 
              this portfolio site, and including a <code>scaling.css</code> file to change variables based on screen width, I want to 
              implement something similar on the course website.
            </p>
            <h3>UI Touchups</h3>
            <p>
              There are various small UI design patterns that I have picked up since the creation of this site. These 
              include adding shadows, avoiding the use of <code>#000000</code> whenever possible in light mode, and more.
            </p>
            <h3>GitHub Workflow</h3>
            <p>
              The current workflow for this site is suboptimal. I was sent the original site in a zip file, 
              I then created a private GitHub repo to push changes to, and then when I say it is done, the Professor pulls from that repo. 
              The professor does not push any updates they make to that repo, leading to desynchronization, and making deployment a challenge. 
              I want to incorporate GitHub into the main workflow, so all changes to the site are pushed there, and anyone who want to contribute 
              just needs access to the repository.
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
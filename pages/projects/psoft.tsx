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
              After a semester of using this site in light mode, adding dark mode was one of my top priorities.
              I created a dedicated <code>colors.css</code> file so all UI components would smoothly transition on 
              toggle, and placed the toggle in the top-right corner of the navigation bar.
            </p>
            <h3>Components</h3>
            <p>
              Previously, reusable components on the site had to be copied and pasted into each HTML file, which meant every 
              edit had to be made in multiple places. To solve this, I created a single <code>components.js</code> file to 
              centralize them. This now manages elements such as the navigation bar and footer.
            </p>
            <h3>Reformatted Pages</h3>
            <p>
              Of all the areas the site was lacking, it was the readability that was the worst for me. The site has a lot 
              of information about the course, and it just wasn't in a digestable format.
            </p>
            <p>
              Beyond the landing page, I fixed up others as well. One issue was the notes and assignments pages.
            </p>
            <h3>Grade Information</h3>
            <p>
              Students frequently check the grade breakdown and cutoffs, so I placed them at the bottom of the home page where they’re easy to find.
            </p>
            <h3>New Site Logo</h3>
            <p>
              The old site logo was a turtle, which doesn't have much to do with a Principles of Software course. I changed it to 
              a blue cogwheel to represent the content of the course, and match the theme of the site. In my search, I made sure to 
              filter by images with a Creative Commons license.
            </p>
            <hr/>
            <h2>Future Plans</h2>
            <p>
              I offered to maintain this site until I graduate in Spring 2026. In this time, there are several contributions I 
              would like to make:
            </p>
            <h3>Revise Code / Design Patterns</h3>
            <p>
              Since working on this site, I have vastly expanded my web development skillset. There is 
              plenty of room for improvement, such as:
            </p>
            <h3>Dividing CSS Files</h3>
            <p>
              The original site used Bootstrap for everything. When I came in, I decided to 
              override a lot of the set styles with my own classes. I put everything in a CSS file, which is not optimal for maintainability. 
              I plan to create a CSS file for individual pages and components.
            </p>
            <h3>Responsive Scaling</h3>
            <p>
              As a fledgling web dev, I did not take responsive scaling into consideration. After creating 
              this portfolio site, and creating a <code>scaling.css</code> file that adjusts variables by 
              screen width, and I’d like to bring the same solution to the course website.
            </p>
            <h3>UI Touchups</h3>
            <p>
              Since creating this site, I’ve picked up a variety of small UI design patterns, such 
              as adding shadows in light mode, avoiding pure <code>#000000</code>, experimenting 
              with font weights, and more.
            </p>
            <h3>GitHub Workflow</h3>
            <p>
              The current workflow for maintaining this site is suboptimal. I was initially sent the site in a 
              zip file, after which I created a private GitHub repository to manage changes. When I mark updates 
              as complete, the professor pulls from that repository, but they do not push their own edits back, 
              which often causes desynchronization and complicates deployment. My goal is to integrate GitHub 
              into their workflow so that all changes are tracked there and contributors can simply be given 
              repository access. The only limitation is that course documents cannot be stored in the repository, 
              but these can and should be maintained directly on the server.
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
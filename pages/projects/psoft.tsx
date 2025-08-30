import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

import ogPsoftIndex from '../../assets/og-psoft-index.png';
import ogPsoftHW from '../../assets/og-psoft-hw-page-light.png';
import newPsoftHW from '../../assets/new-psoft-hw-page-light.png';
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
              toggle, and placed the toggle on the right side of the navigation bar.
            </p>
            <h3>Components</h3>
            <p>
              Previously, reused components were just copied and pasted into each HTML file, any edits, 
              such as updating the footer date, had to be done in multiple places. To solve this, I created a single <code>components.js</code> file to 
              centralize them. This now manages elements such as the navigation bar, dark mode toggle, and footer.
            </p>
            <h3>Reformatted Pages</h3>
            <p>
              The site’s most significant issue was readability. Each page had quirks that needed to be addressed:
            </p>
            <h4>Home Page</h4>
            <ul>
              <li><b>Text Width:</b> This was an issue across the site, but especially on the home page. On screens larger than mobile, stretching text edge-to-edge diminished readability.</li>
              <li><b>Structure:</b> Information wasn’t presented in a clear or intentional way. For example, important details like the lecture location were buried in small text in the middle of the page. 
              To solve this, I broke the page into clearly defined sections.</li>
            </ul>
            <h4>Homework / Topics / Resources Pages</h4>
            <p>
              All three pages followed the same structure, with new content added to the bottom each week. By the end of the semester, 
              this created long, cumbersome pages that required excessive scrolling. To solve this, I introduced dropdowns so 
              users can quickly access the content they need without being overwhelmed.
            </p>
            <div id="content-img-container">
              <img src={ogPsoftHW}/>
              <p>Before</p>
            </div>
            <div id="content-img-container">
              <img src={newPsoftHW}/>
              <p>After</p>
            </div>

            <h3>Grade Information</h3>
            <p>
              Students frequently check the grade breakdown and cutoffs, so I placed them at the bottom of the home page where they’re easy to find.
            </p>
            <h3>New Site Logo</h3>
            <p>
              The old site logo was a turtle, which doesn't have much to do with a Principles of Software course. I updated it to 
              a blue cogwheel to better represent the subject matter and match the site’s theme. In choosing the new design, 
              I made sure to only use images with a Creative Commons license.
            </p>
            <hr/>
            <h2>Future Plans</h2>
            <p>
              I offered to maintain this site until I graduate in Spring 2026. In this time, there are several contributions I 
              would like to make:
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
              this portfolio site and implementing a <code>scaling.css</code> file that adjusts variables by 
              screen width, I’d like to bring the same solution to the course website.
            </p>
            <h3>UI Touchups</h3>
            <p>
              Since creating this site, I’ve picked up a variety of small UI design patterns, such 
              as adding shadows in light mode, avoiding pure <code>#000000</code>, experimenting 
              with font weights, and more.
            </p>
            <h3>GitHub Workflow</h3>
            <p>
              The current workflow for maintaining this site is suboptimal. The all the files I needed were initially sent in a 
              zip file, after which I created a private GitHub repository to manage changes. When I mark updates to the site
              as complete, the professor pulls from that repository, but they do not push their own edits back, 
              causing desynchronization and complicating deployment. My goal is to integrate GitHub 
              into their workflow so that all changes are tracked and contributors can simply be given 
              repository access.
            </p>
            <h3>Template</h3>
            <p>
              When I recently discussed the site with the course instructor, he mentioned that he would like a 
              template for use in other courses. He also wants an easy way to update his current course for the next semester.
              Once the GitHub workflow is implemented, this will be no problem to set up.
            </p>
            <hr/>
            <h2 style={{ marginBottom: "2rem" }}>Images</h2>
            <div id="content-img-container">
              <img src={ogPsoftIndex}/>
              <p>Before</p>
            </div>
            <div id="content-img-container">
              <img src={newPsoftIndex}/>
              <p>After</p>
            </div>
            <div id="content-img-container">
              <img src={newPsoftIndexDM}/>
              <p>After (Dark Mode)</p>
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
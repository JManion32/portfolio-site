import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';
import useNavigateTop from "../../hooks/useNavigateTop";

import ogPsoftIndex from '../../assets/og-psoft-index.png';
import ogPsoftHW from '../../assets/og-psoft-hw-page-light.png';
import newPsoftHW from '../../assets/new-psoft-hw-page-light.png';
import mobilePsoft from '../../assets/mobile-psoft-scaling.png';
import newPsoftIndex from '../../assets/new-psoft-index.png';
import newPsoftIndex2 from '../../assets/new-psoft-index2.png';
import newPsoftIndexDM from '../../assets/new-psoft-index-dm.png';

function PSoft() {
  const navigateTop = useNavigateTop();
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
              The course provides a foundation in software engineering, covering topics such as requirements gathering, 
              design, reasoning, implementation, testing, and long-term maintenance. As a student in the course, I found the 
              material engaging and valuable, but its website did not reflect the same level of quality. Wanting to 
              improve the student experience while gaining web development experience myself, I put together a 
              storyboard for a revamped version of the site and brought it to office hours. The professor was enthusiastic about my initiative 
              and granted the opportunity to take full creative control.
            </p>
            <hr/>
            <h3>Reformatted Pages</h3>
            <p>
              The site’s most pressing issue was readability. Each page had quirks that needed to be addressed:
            </p>
            <h4>Home Page</h4>
            <ul>
              <li><b>Text Width:</b> This was an issue across the site, but especially on the home page. Page content had no margins, 
              which diminished readability on larger screens.</li>
              <li><b>Structure:</b> Information wasn’t presented in a clear or intentional way. For example, important details 
              like the lecture location were buried in small text in the middle of the page. To solve this, I removed unnecessary bloat, and broke the page 
              into clearly defined sections.</li>
            </ul>
            <div id="content-img-container">
              <img src={ogPsoftIndex}/>
              <p>Before</p>
            </div>
            <div id="content-img-container">
              <img src={newPsoftIndex2}/>
              <p>After</p>
            </div>
            <h4>Homework / Topics / Resources Pages</h4>
            <p>
              All three pages followed the same structure, with new content added to the bottom each week. By the end of the semester, 
              this created long, cumbersome pages that required excessive scrolling to get to the newest content. To solve this, I introduced dropdowns so 
              users can quickly access only the content they need without being overwhelmed.
            </p>
            <div id="content-img-container">
              <img src={ogPsoftHW}/>
              <p>Before</p>
            </div>
            <div id="content-img-container">
              <img src={newPsoftHW}/>
              <p>After</p>
            </div>
            <h3>Dark Mode Toggle</h3>
            <p>
              After a semester of lowering my brightness every time I opened the site, adding dark mode was a top priority.
              I created a dedicated <code>colors.css</code> file so the color of all UI components would 
              smoothly transition, and placed the toggle on the right side of the navigation bar.
            </p>
            <div id="content-img-container">
              <img src={newPsoftIndexDM}/>
              <p>Home page in dark mode</p>
            </div>
            <h3>Components</h3>
            <p>
              In the original implementation, reused components were duplicated across multiple HTML files, 
              requiring repetitive edits for even minor changes such as updating the footer date. To solve this.
              I modularized each component into a dedicated JavaScript file where edits propogate to all pages of the site.
            </p>
            <h3>Replaced Bootstrap</h3>
            <p>
              The original site was built entirely with Bootstrap and didn’t include a single custom CSS file,  
              leaving the codebase <b>A MESS</b>. Since maintainers frequently interact with the code to reveal new content, and 
              with plans to add features that required custom CSS, a full transition was necessary, despite the initial 
              pain of gutting the old design. This was one of my best decisions, as the CSS layout is now thoughtfully 
              structured and far less cluttered.
            </p>
            <h3>Responsive Scaling</h3>
            <p>
              Bootstrap was great because it took a mobile-first approach, and bad for this same reason on larger screens. 
              Without it, I would have to design the scaling myself, and finally make it work for all screens. I achieved this 
              by creating <code>scaling.css</code>, a file with width-based media queries that altered CSS variables. 
              It is the same approach I took with this <a onClick={() => navigateTop("/projects/portfolio")}>portfolio site</a>.
            </p>
            <div id="content-img-container">
              <img src={mobilePsoft}/>
              <p>Home page featuring a mobile nav bar!</p>
            </div>
            <h3>GitHub Workflow</h3>
            <p>
              The previous workflow for maintaining this site was inefficient. Edits were made from zip archives, 
              making version tracking impossible and causing fragmented copies of the code. To solve this, I 
              established a private GitHub repository to manage all changes and streamline collaboration. Now, 
              <b>all</b> updates are tracked, instructors have controlled repository access, 
              and deployment is consistent and reliable.
            </p>
            <h3>Template</h3>
            <p>
              With the GitHub workflow, I made the main branch a template, allowing instructors to create separate 
              instances of the site for each of their courses.
            </p>
            <h3>New Site Logo</h3>
            <p>
              The old site logo was a turtle, which doesn't have much to do with a Principles of Software course. I updated it to 
              a blue cogwheel to better represent the subject matter and match the site’s theme. In choosing the new design, 
              I made sure to use an image with a Creative Commons license.
            </p>
            <hr/>
            <h2>Reflection</h2>
            <p>
              This project was a solid benchmark for my growth as a front-end developer. I actually <i>finished</i> the project twice: 
              once at the start of the summer, and again four months later after picking up a bunch of skills along the way. Here was 
              my first finished product:
            </p>
            <div id="content-img-container">
              <img src={newPsoftIndex}/>
            </div>
            <p>
              Certainly an improvement, but I'm much happier with the second iteration:
            </p>
            <div id="content-img-container">
              <img src={newPsoftIndex2}/>
            </div>
            <p>
              Overall, it’s been exciting to overhaul a website used by so many students (including myself!) each semester. 
              Though it was a large undertaking, I’m proud to have helped improve the experience of future computer science students 
              at RPI.
            </p>
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
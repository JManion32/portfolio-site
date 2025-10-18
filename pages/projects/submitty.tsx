import Breadcrumbs from '../../components/Breadcrumb';
import TechStack from "../../components/TechStack";
import NavButton from '../../components/NavButton';

import submittyDuck from '../../assets/submitty_duck.png';
import githubLight from '../../assets/github-mark.png';
import githubDark from '../../assets/github-mark-white.png';

import homeNotis from '../../assets/all_notifications_unread_light_mode.png';
import configEditor from '../../assets/gradeable_config_editor.png';

function Submitty() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Submitty</h1>
            <button 
              className="contact-button project-contact-btn"
              title="Submitty Documentation Site"
              onClick={() => window.open('https://submitty.org/index/overview', '_blank')}
              >
              <img src={submittyDuck} className="contact-image"/>
            </button>
            <button 
              className="contact-button project-contact-btn"
              title="Submitty Repository"
              onClick={() => window.open('https://github.com/Submitty/Submitty', '_blank')}
              >
              <div className="github-image-wrapper">
                  <img src={githubLight} className="github-image light" />
                  <img src={githubDark} className="github-image dark" />
              </div>
            </button>
          </div>
          <div id="text-body">
            <p>
              Submitty is an open source course management, assignment submission, exam and grading 
              system from the Rensselaer Center for Open Source Software (RCOS) at Rensselaer Polytechnic Institute. Most of the content here is from 
              my <a href="https://submitty.org/developer/rensselaer_center_for_open_source/2025_Justin_Manion">summer writeup</a>.
            </p>
            <hr/>
            <h2>Tech Stack</h2>
            <TechStack
              sections={[
                {
                  title: "Front-end",
                  items: [
                    { name: "Vite", className: "vite" },
                    { name: "Twig", className: "twig" },
                    { name: "Vue", className: "vue" },
                    { name: "JavaScript", className: "javascript" },
                    { name: "TypeScript", className: "ts" }
                  ]
                },
                {
                  title: "Backend",
                  items: [
                    { name: "PHP", className: "php" },
                    { name: "Python", className: "python" },
                    { name: "PostgreSQL", className: "postgres" }
                  ]
                },
                {
                  title: "DevOps",
                  items: [
                    { name: "Docker", className: "docker" },
                    { name: "ESLint", className: "eslint" },
                    { name: "Stylelint", className: "stylelint" },
                    { name: "Prettier", className: "prettier" },
                    { name: "Cypress", className: "cypress" }
                  ]
                }
              ]}
            />
            <hr/>
            <p>
              Each semester, the Rensselaer Center for Open Source is home to dozens of exciting and innovative projects. 
              While there’s no shortage of opportunities, one stands out above the rest. Created in 2014 and now used 
              in every computer science course at RPI, Submitty is a massive project with endless opportunities 
              for growth and contribution.
            </p>
            <p>
              I began my journey with Submitty in January of 2025, taking it as a course for the spring semester. 
              I didn't have much experience with large projects, version control, or any of the technologies used, but 
              I knew I was in the right place to learn. I spent most of that semester finding my footing, reviewing 
              pull requests, troubleshooting my VM, and making small CSS changes. I was scared of JavaScript, had no idea how PHP worked, and 
              steered clear of anything that had to do with the database, Cypress, or Python. Despite this, Submitty was 
              by far my favorite course thanks to the real world experience I was gaining, and the guidance of the mentors. 
            </p>
            <p>
              At the end of the spring semester, I was excited to learn that I would be joining the full-time development 
              team for the summer. This is where I really found my footing, and started to make impactful contributions.
            </p>
            <hr/>
            <h2>Displaying all Notifications on the Home Page</h2>
            <p>
              Submitty previously only displayed notifications on a per-course basis, meaning users had to visit each individual 
              course to view or mark notifications as read. As we’ve added more advanced notification features, this limitation 
              became increasingly cumbersome, especially for users in multiple courses. On top of that, the home page 
              itself felt bare, with a lots of unused space.
            </p>
            <h3>Initial PR (<a href="https://github.com/Submitty/Submitty/pull/11914">PR#11914</a>)</h3>
            <p>
              Since this feature was going to be front and center on the site for all to see, thoughtful UI/UX design was essential. As a group, we started 
              with whiteboard sketches to explore layout ideas, then moved to Figma to create a polished mockup for feedback 
              and iteration. Throughout development, I regularly demoed my progress to the group to gather input and refine both 
              functionality and design.
            </p>
            <p>
              The main challenge was efficiently aggregating notifications from multiple course databases. 
              Since each course requires its own query and this feature now runs every time a user visits the 
              home page, performance was crucial. To address this, I optimized the process by:
              <ul>
                <li>Limiting queries to only active courses</li>
                <li>Limiting each query to the 10 most recent notifications</li>
                <li>Sorting results server-side for efficiency</li>
                <li>Creating a new database index on <code>created_at</code> and <code>to_user_id</code>, reducing the time 
                  complexity from <b>O(courses × notifications)</b> to <b>O(courses)</b></li>
              </ul>
            </p>
            <h3>Mark as Seen (<a href="https://github.com/Submitty/Submitty/pull/12007">PR#12007</a>)</h3>
            <p>
              After the original feature was merged, it quickly became clear that users needed a way to dismiss unseen 
              notifications without being redirected. This PR adds an envelope icon next to each unseen notification, 
              allowing them to be marked as seen in place.
            </p>
            <h3>Improve Interactivity (<a href="https://github.com/Submitty/Submitty/pull/12012">PR#12012</a>)</h3>
            <p>
              As mentioned above, it’s important that this feature has a clean and intuitive UI. This PR improves the design with the following changes:
              <ul>
                <li>Added a star icon next to gradeable notifications.</li>
                <li>Increased the font weight of notification content for better readability.</li>
                <li>Linked each notification’s course name to that course’s notifications page.</li>
              </ul>
            </p>
            <h3 style={{ marginBottom: "2rem" }}>The Final Product</h3>
            <div id="content-img-container">
              <img src={homeNotis}/>
            </div>
            <p>
              This update not only streamlines how users interact with notifications, but also transforms the homepage into a more 
              dynamic and informative landing experience. Looking ahead, I hope to expand this space further by adding upcoming 
              gradeables, grade summaries, and other personalized insights to evolve the homepage into a true dashboard.
            </p>
            <hr/>
            <h2>Gradeable Configuration Text Editor</h2>
            <p>
              Historically, editing a gradeable’s configuration in Submitty required switching to a different 
              server directory, uploading a full config bundle, or using the limited Notebook Builder tool. 
              There was no support for directly editing a gradeable's <code>config.json</code> or supplemental files from the web interface.
            </p>
            <h3>Gradeable Config Editor (<a href="https://github.com/Submitty/Submitty/pull/10325">PR#10325</a>)</h3>
            <p>
              I inherited this PR from <a href="https://github.com/DarthNyan">Tate Whiteberg</a>, picking up where it was 
              left off, and completing it.
            </p>
            <h3>Live Editing with CodeMirror (<a href="https://github.com/Submitty/Submitty/pull/11814">PR#11814</a>)</h3>
            <p>
              Rather than just using a basic text area, I implemented CodeMirror to allow for a more customizable experience, and native tab support.
            </p>
            <h3>File & Folder Management (<a href="https://github.com/Submitty/Submitty/pull/11860">PR#11860</a>)</h3>
            <p>
              Added UI components to allow adding and deleting files and directories from the gradeable configuration.
            </p>
            <h3>Customizable Environment (<a href="https://github.com/Submitty/Submitty/pull/11924">PR#11924</a>)</h3>
            <p>
              Took advantages of CodeMirror's features by adding toggles for line numbers and tab size.
            </p>
            <h3>Download Config as ZIP (<a href="https://github.com/Submitty/Submitty/pull/11973">PR#11973</a>)</h3>
            <p>
              Added a button to download the entire config directory as a ZIP archive, allowing users to save edits they made on the site for future use.
            </p>
            <h3>Design & UX Polish (<a href="https://github.com/Submitty/Submitty/pull/11991">PR#11991</a> and <a href="https://github.com/Submitty/Submitty/pull/12003">PR#12003</a>)</h3>
            <p>
              Refined visual layout and interactions to feel intuitive and consistent with the rest of Submitty. Changes include
              <ul>
                <li>highlighting selected files</li>
                <li>adding tool tips to the customize toggles</li>
                <li>smoothing out the transition between text files</li>
                <li>ensuring correct file order (root-level directories first, then root-level files)</li>
                <li>improved overall spacing for readability</li>
              </ul>
            </p>
            <h3>Documentation (<a href="https://github.com/Submitty/submitty.github.io/pull/707">PR#707</a>)</h3>
            <p>
              <a href="https://submitty.org/instructor/assignment_configuration/configuration_editor">Documentation page</a>.
            </p>
            <h3 style={{ marginBottom: "2rem" }}>The Final Product</h3>
            <div id="content-img-container">
              <img src={configEditor}/>
            </div>
            <hr/>
            <h2>Dark Mode Toggle for the Documentation Site</h2>
            <h3>Initial PR (<a href="https://github.com/Submitty/submitty.github.io/pull/691">PR#691</a>)</h3>
            <p>
              To improve accessibility and match user expectations, I added a dark mode toggle to the Submitty 
              documentation site. The site is built with Jekyll and uses auto-generated styles, so integrating 
              theme switching required working around those constraints.
              <ul>
                <li><b>SCSS Theming</b> – Introduced a dedicated <code>_colors.scss</code> file to define color variables for both light and dark themes. 
                  These variables are applied across components to ensure consistency and maintainability.</li>
                <li><b>Style Overrides</b> - Since the site uses a mix of default and third-party CSS, I selectively overrode 
                conflicting styles via <code>dark_mode.css</code> to support dark mode without breaking layout or readability.</li>
                <li><b>JavaScript Toggle</b> - Implemented a lightweight JS toggle that saves user preference and dynamically applies the appropriate theme class. I actually 
                reused toggle for this portfolio site!</li>
                <li><b>Responsive Design</b> - Tested and refined the toggle to ensure it works seamlessly across devices, including mobile. All 
                elements have a 0.2s transition time for a smooth, polished theme change.</li>
              </ul>
            </p>
            <hr/>
            <h2>Additional Work</h2>
            <h3>Filter Withdrawn Students (<a href="https://github.com/Submitty/submitty.github.io/pull/11792">PR#11792</a>)</h3>
            <p>
              Initially created by GitHub user <a href="https://github.com/yanliw123">yanliw123</a>. To streamline grading, this PR adds 
              a toggle that hides withdrawn students from the grading page, so TAs can focus on active students only.
            </p>
            <h3>Add Audit / Withdrawn to Sample Data (<a href="https://github.com/Submitty/submitty.github.io/pull/11882">PR#11882</a>)</h3>
            <p>
              Added two students with registration_type set to <code>withdrawn</code> and two with <code>audit</code> to the existing sample data, 
              which uses a seeded random number generator. Modifying this data shifted all related values, requiring updates 
              to 20+ Cypress test files to ensure the feature could be integrated.
            </p>
            <h3>Add Audit / Withdrawn to Sample Data (<a href="https://github.com/Submitty/submitty.github.io/pull/11882">PR#11882</a>)</h3>
            <p>
              Initially created by <a href="https://submitty.org/developer/rensselaer_center_for_open_source/2024_Michael_Papadopoulos">Michael Papadopoulos</a>. 
              When overriding a grade in a team gradeable, instructors would have to process each student individually. Now, a popup listing the student’s 
              teammates displays, notifying the instructor that they have teammates, and asking if they want to override them as well.
            </p>
            <hr/>
            <h2>Future Plans / Work in Progress</h2>
            <p>
              I am currently working of Submitty for the Fall 2025 semester, and hopefully Spring 2026 (and beyond!) as well. 
              Here is my to-do list:
              <ul>
                <li><b>Mentor new developers</b> – Having experienced the challenge of learning Submitty’s large codebase as a newcomer, I’m eager to share my knowledge and help new contributors get up to speed quickly while enjoying the process along the way.</li>
                <li><b>Create a cloud instance</b> - Submitty currently requires self-hosting. By putting it on the cloud, anyone who is interested will be able to use it! I am in the process of setting up the cloud infrastructure for this.</li>
                <li><b>Enhance the Autograding Configuration page</b> – A vital tool for instructors; improving it means a better experience for everyone especially future cloud users since they won't have SSH access.</li>
                <li><b>Transform the home page into a dashboard</b> – Adding notifications was a good start, but there is more information to centralize such as grade summaries, upcoming gradeables, and an update feed.</li>
                <li><b>Convert more pages to Vue</b> – The component-based approach is a joy to work with and a strong candidate to become a core part of the stack if we continue to port existing Twig files.</li>
                <li><b>Work with the database</b> – I'm currently taking Database Systems, and am excited to apply what I learn to Submitty!</li>
              </ul>
            </p>
            <hr/>
            <h2>Reflection</h2>
            <p>
              Being a part of Submitty has been an invaluable experience in my journey to becoming a real-world software developer. 
              I would like to thank Professor Cutler, my teammates, mentors, and RPI for making this happen. I’m so proud of 
              all that we have accomplished and excited to see what we create next!
            </p>
          </div>
        </div>
        <NavButton
          left="Speed Roulette" leftNav="/projects/speedroulette"
          right="Course Website" rightNav="/projects/psoft"
        />
      </div>
    </>
  );
}

export default Submitty;
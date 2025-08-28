import Breadcrumbs from '../../components/Breadcrumb';
import TechStack from "../../components/TechStack";
import NavButton from '../../components/NavButton';

import submittyDuck from '../../assets/submitty_duck.png';
import githubLight from '../../assets/github-mark.png';
import githubDark from '../../assets/github-mark-white.png';

import homeNotis from '../../assets/home_page_notifications.png';

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
              onClick={() => window.open('https://submitty.org/index/overview', '_blank')}
              >
              <img src={submittyDuck} className="contact-image"/>
            </button>
            <button 
              className="contact-button project-contact-btn"
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
              system from the Rensselaer Center for Open Source Software (RCOS), Department of Computer 
              Science at Rensselaer Polytechnic Institute. Most of this writeup is from 
              my <a href="https://submitty.org/developer/rensselaer_center_for_open_source/2025_Justin_Manion">summer writeup</a>.
            </p>
            <hr/>
            <TechStack
              sections={[
                {
                  title: "Frontend",
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
                    { name: "Python", className: "python" }
                  ]
                },
                {
                  title: "Infrastructure & DevOps",
                  items: [
                    { name: "Docker", className: "docker" },
                    { name: "PostgreSQL", className: "postgres" }
                  ]
                },
                {
                  title: "Tooling",
                  items: [
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
              in every computer science course at RPI, Submitty is a large-scale project with endless opportunities 
              for growth and contribution.
            </p>
            <p>
              I began my journey with Submitty in January of 2025, taking it as a course for the spring semester. 
              I didn't have much experience with large projects, version control, or any of the technologies used, but 
              I knew I was in the right place to learn. I spent most of that semester finding my footing, reviewing 
              pull requests, troubleshooting my VM, and making small CSS changes. I was scared of JavaScript, had no idea how PHP worked, and 
              steered clear of anything that had to do with the database, Cypress, or Python. Despite this, Submitty was 
              by far my favorite course thanks to the real world experience I was gaining, and the guidance of the mentors. 
              At the end, I was excited to find out that I would be able to work on the project full-time for the summmer.
            </p>
            <h2>Summer 2025</h2>
            <p className="p-below-header">
              With a semester of experience under my belt, it was time to go a few layers deeper into the project and have a productive summer. 
              The first month was mainly cleaning up old pull requests from the last 2 semesters. We started with 81 open PRs, and 
              our goal was less than 25 by the end. Cleaning up these old pull requests was actually quite helpful for me, as I was finally beginning 
              to see how these contributions were meeting the existing structure. At some point, I realized, "If I can get these PRs merged, 
              why can't I just start making them myself?" By the end of June, the training wheels were off. Below are my key contributions to 
              Submitty, most of which are from the summer.
            </p>
            <h2>Displaying all Notifications on the Home Page</h2>
            <p className="p-below-header">
              Submitty previously only displayed notifications on a per-course basis, meaning users had to visit each individual 
              course to view or mark notifications as read. As we’ve added more advanced notification features, this limitation 
              became increasingly cumbersome, especially for users in multiple courses. On top of that, the home page 
              itself felt bare, with lots of unused space.
            </p>
            <h3>Initial PR (<a href="https://github.com/Submitty/Submitty/pull/11914">PR#11914</a>)</h3>
            <p className="p-below-header">
              Since this feature is now front and center on the site, thoughtful UI/UX design was essential. We started 
              with whiteboard sketches to explore layout ideas, then moved to Figma to create a polished mockup for feedback 
              and iteration. Throughout development, I regularly demoed progress to the group to gather input and refine both 
              functionality and design.
            </p>
            <p>
              The main challenge was efficiently aggregating notifications from multiple course databases. Since each course requires its own query and this feature now runs every time a user visits the home page, performance was crucial. To address this, I optimized the process by:
              <ul>
                <li>Limiting queries to only active courses</li>
                <li>Limiting each query to the 10 most recent notifications</li>
                <li>Sorting results server-side for efficiency</li>
                <li>Creating a new database index on created_a` and to_user_id, reducing the time complexity from <b>O(courses × notifications)</b> to <b>O(courses)</b></li>
              </ul>
            </p>
            <h3>Mark as Seen (<a href="https://github.com/Submitty/Submitty/pull/12007">PR#12007</a>)</h3>
            <p className="p-below-header">
              After the original feature was merged, it quickly became clear that users needed a way to dismiss unseen 
              notifications without being redirected. This PR adds an envelope icon next to each unseen notification, 
              allowing them to be marked as seen in place.
            </p>
            <h3>Improve Interactivity (<a href="https://github.com/Submitty/Submitty/pull/12012">PR#12012</a>)</h3>
            <p className="p-below-header">
              As mentioned above, it’s critical that this feature has a clean and intuitive UI. This PR improves the design with the following changes:
              - Added a star icon next to gradeable notifications.
              - Increased the font weight of notification content for better readability.
              - Linked each notification’s course name to that course’s notifications page.
              - Refactored click behavior: with three clickable elements in each container, only the individual elements are now clickable (rather than the entire container). 
              Each element also underlines on hover. This design is inspired by GitHub Actions' job design:
            </p>
            <h3>The Final Product</h3>
            <div className="content-img-container">
              <img src={homeNotis} className="project-img"/>
            </div>
            <p>
              This update not only streamlines how users interact with notifications, but also transforms the homepage into a more 
              dynamic and informative landing experience. Looking ahead, I hope to expand this space further by adding upcoming 
              gradeables, grade summaries, and other personalized insights to evolve the homepage into a true dashboard.
            </p>
            <h2>Gradeable Configuration Text Editor</h2>
            <p className="p-below-header">
              Historically, editing a gradeable’s configuration in Submitty required switching to a different 
              server directory, uploading a full config bundle, or using the limited Notebook Builder tool. 
              There was no support for directly editing config.json or supplemental files from the web interface.
            </p>
            <h3>Gradeable Config Editor (<a href="https://github.com/Submitty/Submitty/pull/10325">PR#10325</a>)</h3>
            <p className="p-below-header">
              I inherited this PR from <a href="https://github.com/DarthNyan">Tate Whiteberg</a> and completed the implementation 
              of the initial text editor for editing gradeable configuration files.
            </p>
            <h3>Live Editing with CodeMirror (<a href="https://github.com/Submitty/Submitty/pull/11814">PR#11814</a>)</h3>
            <p className="p-below-header">
              Rather than just using a basic text area, I implemented Code Mirror to allow for a more customizable experience, and native tab support.
            </p>
            <h3>File & Folder Management (<a href="https://github.com/Submitty/Submitty/pull/11860">PR#11860</a>)</h3>
            <p className="p-below-header">
              Added UI components to allow adding and deleting files and directories from the gradeable configuration.
            </p>
            <h3>Customizable Environment (<a href="https://github.com/Submitty/Submitty/pull/11924">PR#11924</a>)</h3>
            <p className="p-below-header">
              Took advantages of Code Mirror's features by adding toggles for line numbers and tab size.
            </p>
            <h3>Download Config as ZIP (<a href="https://github.com/Submitty/Submitty/pull/11973">PR#11973</a>)</h3>
            <p className="p-below-header">
              Added a button to download the entire config directory as a ZIP archive, allowing users to save edits they made on the site editor for future use.
            </p>
            <h3>Design & UX Polish (<a href="https://github.com/Submitty/Submitty/pull/11991">PR#11991</a> and <a href="https://github.com/Submitty/Submitty/pull/12003">PR#12003</a>)</h3>
            <p className="p-below-header">
              Refined visual layout and interactions to feel intuitive and consistent with the rest of Submitty. Changes include highlighting selected files, adding tool tips to the 
              customize toggles, smoothing out the transition between text files, ensuring correct file order (root-level directories first, then root-level files), and 
              improving overall spacing for readability.
            </p>
            <h3>Edit Directory File (Coming Soon)</h3>
            <p className="p-below-header">
              Allows users who pull from Submitty's private course repository to use the gradeable config editor. Before I can create this, there is a 
              security vulnerability that must to be addressed. Currently, there are no checks to ensure that the user pulling from the repository 
              owns the file. This means that anyone with SSH access would be able to edit any autograding configuration on the web app.
            </p>
            <h3>Documentation (<a href="https://github.com/Submitty/submitty.github.io/pull/707">PR#707</a>)</h3>
            <p className="p-below-header">
              View documentation page <a href="https://submitty.org/instructor/assignment_configuration/configuration_editor">here</a>.
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
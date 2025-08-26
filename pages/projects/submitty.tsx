import Breadcrumbs from '../../components/Breadcrumb';
import TechStack from "../../components/TechStack";
import NavButton from '../../components/NavButton';

import submittyDuck from '../../assets/submitty_duck.png';
import githubLight from '../../assets/github-mark.png';
import githubDark from '../../assets/github-mark-white.png';

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
              Rensselaer Center for Open Source is home to dozens of fun, innovative projects, but to me, one standss out 
              from the rest. Created in 2014 and now used by just about every single computer science course at RPI today, 
              Submitty is a massive project that will never run out of work to do.
            </p>
            <p>
              I began my journey with Submitty in January of 2025, when I took it as a course for the spring semester. 
              I didn't have much experience with large projects, version control, or any of the technologies used, but 
              I knew I was in the right place to learn. I spent most of that semester finding my footing, reviewing 
              contributions, troubleshooting my VM, and making small CSS changes. I was scared of JavaScript, had no idea how PHP worked, and 
              steered clear of anything that had to do with the database, Cypress, or Python. Despite my lack of prior experience, Submitty was 
              by far my favorite course thanks to the help of the mentors. At the end, I was super excited to find out that 
              I would be able to work on the project full-time for the summmer.
            </p>
            <h2>Summer 2025</h2>
            <p>
              With a semester of experience under my belt, it was time to go a few layers deeper into the project have a productive summer. 
              The first month was mainly cleaning up old pull requests from the last 2 semesters. We started the summer with 81 open PRs, and 
              our goal was 25 by the end. Cleaning up these old pull requests was actually quite helpful for me, as I was finally beginning 
              to see how these contributions were meeting the existing structure. At some point, I realized, "If I can get these PRs merged, 
              why can't I just start making them myself?" By the end of June, the training wheels were off. My contributions were becoming 
              more meaningful, and I was really enjoying the experience.
            </p>
            <h2>Contributions</h2>
            <h3>Displaying all Notifications on the Home Page</h3>
            <p>
              Submitty previously only displayed notifications on a per-course basis, meaning users had to visit each individual 
              course to view or mark notifications as read. As we’ve added more advanced notification features, this limitation 
              became increasingly cumbersome, especially for users in multiple courses. On top of that, the home page 
              itself felt bare, with lots of unused space.
            </p>
            <h3>Initial PR</h3>
            <p>
              Since this feature is now front and center on the site, thoughtful UI/UX design was essential. We started 
              with whiteboard sketches to explore layout ideas, then moved to Figma to create a polished mockup for feedback 
              and iteration. Throughout development, I regularly demoed progress to the group to gather input and refine both 
              functionality and design.
            </p>
            <p>
              The main challenge was efficiently aggregating notifications from multiple course databases. Since each course requires its own query and this feature now runs every time a user visits the home page, performance was crucial. To address this, I optimized the process by:
              - Limiting queries to only active courses
              - Limiting each query to the 10 most recent notifications
              - Sorting results server-side for efficiency
              - Creating a new database index on `created_at` and `to_user_id`, reducing the time complexity from **O(courses × notifications)** to **O(courses)**
            </p>
            <h3>Mark as Seen</h3>
            After the original feature was merged, it quickly became clear that users needed a way to dismiss unseen 
            notifications without being redirected. This PR adds an envelope icon next to each unseen notification, 
            allowing them to be marked as seen in place.
            <h3>Improve Interactivity</h3>
            <p>
              As mentioned above, it’s critical that this feature has a clean and intuitive UI. This PR improves the design with the following changes:
              - Added a star icon next to gradeable notifications.
              - Increased the font weight of notification content for better readability.
              - Linked each notification’s course name to that course’s notifications page.
              - Refactored click behavior: with three clickable elements in each container, only the individual elements are now clickable (rather than the entire container). 
              Each element also underlines on hover. This design is inspired by GitHub Actions' job design:
            </p>
            <h3>The Final Product</h3>
            <p>
              This update not only streamlines how users interact with notifications, but also transforms the homepage into a more 
              dynamic and informative landing experience. Looking ahead, I hope to expand this space further by adding upcoming 
              gradeables, grade summaries, and other personalized insights to evolve the homepage into a true dashboard.
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
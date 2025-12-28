import { useState } from 'react';
import ReadMoreBtn from '../../components/ReadMoreBtn.tsx'

import Breadcrumbs from '../../components/Breadcrumb';
import TechStack from "../../components/TechStack";
import NavButton from '../../components/NavButton';

import submittyDuck from '../../assets/submitty_duck.png';
import githubLight from '../../assets/github-mark.png';
import githubDark from '../../assets/github-mark-white.png';

import homeNotis from '../../assets/submitty-noti-ui.png';
import individualNotification from '../../assets/individual-notification-component.png';
import courseNotisBefore from '../../assets/course-notis-before.png';
import courseNotisAfter from '../../assets/course-notis-after.png';
import markSeenPopup from '../../assets/mark-all-seen-popup.png';
import additionalUnseenCount from '../../assets/additional-unseen-count.png';
import configEditor from '../../assets/completed-gradeable-config-editor.png';

function Submitty() {
  const [readMore, setReadMore] = useState(false);
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
              Created in 2014, Submitty is an open source course management, assignment submission, exam and grading 
              system from the Rensselaer Center for Open Source Software (RCOS). In 11 years, it has evolved from a simple
              homework submission server, to the default learning management system used by all computer science courses at
              Rensselaer Polytechnic Institute.
            </p>
            <p>
              I began my journey with Submitty in January of 2025, taking it as a course for the spring semester. 
              I didn't have much experience with large projects, GitHub, or any of the technologies used, but 
              I knew I was in the right place to learn. I spent most of that semester finding my footing, reviewing 
              pull requests, troubleshooting my VM, and making small CSS changes. I was scared of JavaScript, had no idea how PHP worked, and 
              steered clear of anything that had to do with the database, Cypress, or Python. Despite my inexperience, Submitty was 
              by far my favorite course thanks to the real world experience I was gaining, and the guidance of the mentors. 
            </p>
            <p>
              At the end of the spring semester, I was excited to learn that I had the opportunity to join the full-time development 
              team for the summer. This is where I really found my footing with the workflow and codebase, and started to make impactful contributions.
            </p>
            <p>
              I continued with Submitty in the Fall 2025 semester. We had a smaller group with many of the experienced developers 
              moving on, so I began to take a leadership/mentor role. This spring, I am once again working on Submitty, this time as 
              the official project leader.
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
            <div className={`${readMore ? '' : 'hide-read-more-container'}`}>
              <hr/>
              <p>
                Below are the key contributions I have made to Submitty.
              </p>
              <h2>Notifications UI Redesign</h2>
              <p>
                Submitty previously only displayed notifications on a per-course basis, meaning users had to visit each individual 
                course to view or mark notifications as read. As we added more advanced notification features, this limitation 
                became increasingly cumbersome, especially for users in multiple courses. Additionally, the UI was built with Twig, and 
                lacked crucial quality of life features.
              </p>
              <h3>Vue Notifications on the Home Page (<a href="https://github.com/Submitty/Submitty/pull/11914" target="_blank">PR#11914</a>)</h3>
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
              <h3>Mark as Seen (<a href="https://github.com/Submitty/Submitty/pull/12007" target="_blank">PR#12007</a>)</h3>
              <p>
                After the original feature was merged, it quickly became clear that users needed a way to dismiss unseen 
                notifications without being redirected. This PR adds an envelope icon next to each unseen notification, 
                allowing them to be marked as seen in place.
              </p>
              <h3>Improve Interactivity (<a href="https://github.com/Submitty/Submitty/pull/12012" target="_blank">PR#12012</a>)</h3>
              <p>
                As mentioned above, it’s important that this feature has a clean and intuitive UI. This PR improves the design with the following changes:
                <ul>
                  <li>Added a star icon next to gradeable notifications.</li>
                  <li>Increased the font weight of notification content for better readability.</li>
                  <li>Linked each notification’s course name to that course’s notifications page.</li>
                </ul>
              </p>
              <h3>Individual Notification Component (<a href="https://github.com/Submitty/Submitty/pull/12137" target="_blank">PR#12137</a>)</h3>
              <p>
                With new features continuously being added to the notifications UI, we were losing the benefits of modularizing code with 
                Vue components. To address this, I created a Notification component that would be used for each individual notification inside 
                the main display component. This split the 400 line file into two 200 line files, improving developer experience while maintaining 
                original functionality.
              </p>
              <div id="content-img-container">
                <img src={individualNotification}/>
                <p>Individual Notification Component</p>
              </div>
              <h3>Convert Course Notifications to Vue (<a href="https://github.com/Submitty/Submitty/pull/12159" target="_blank">PR#12159</a>)</h3>
              <p>
                With Vue being used for the home page and Twig still being used on course pages, it was time to convert the rest of the UI to Vue. 
                Since the prior PR nicely modularized the Vue code, this transition was seamless aside from a few tweaks to the props.
              </p>
              <div id="content-img-container">
                <img src={courseNotisBefore}/>
                <p>Before</p>
              </div>
              <div id="content-img-container">
                <img src={courseNotisAfter}/>
                <p>After</p>
              </div>
              <h3>Home Page Mark All Seen Popup (<a href="https://github.com/Submitty/Submitty/pull/12219" target="_blank">PR#12219</a>)</h3>
              <p>
                Despite the design of the course notification page's mark seen button where a single click of a button marks all notifications as seen, 
                the home page could not be so simple.  After much deliberation about a safedesign, we settled on a popup that displays the counts of 
                each course's unseen notifications. The user can then select specific courses to mark seen, or all of them. I like to think of it 
                as an "Are you sure?" popup with advanced functionality.
              </p>
              <div id="content-img-container">
                <img src={markSeenPopup}/>
              </div>
              <h3>Home Page Additional Unseen Count (<a href="https://github.com/Submitty/Submitty/pull/12227" target="_blank">PR#12227</a>)</h3>
              <p>
                Since the notifications display is on the home page, performance is essential. For this reason, only the 10 most recent 
                notifications from each of the user's courses are brought here. This means if the user has 11 unseen notifications in a course, they 
                will have no way to see it, or individually clear it from the home page. To address this, I implemented a count of how many unseen notifications 
                the user has beyond what is displayed. The tricky part of this PR was the edge cases:
                <ul>
                  <li>singular <b>vs</b> plural</li>
                  <li>"Show All" <b>vs</b> "Unseen Only"</li>
                  <li>notifications in the front-end, but not yet displayed <b>vs</b> notifications exceed limit, and cannot be brought to the front-end</li>
                </ul>
              </p>
              <div id="content-img-container">
                <img src={additionalUnseenCount}/>
              </div>
              <h3 style={{ marginBottom: "2rem" }}>The Final Product (Home Page)</h3>
              <div id="content-img-container">
                <img src={homeNotis}/>
              </div>
              <p>
                These updates have transformed the student experience of my peers and I this past semester. Taking four CS courses, combined 
                notification feed made it easy to stay organized and up to date. In the future, I hope to add more to both the notification 
                system and the home page, maximizing quality of life for the best user experience possible!
              </p>
              <hr/>
              <h2>Configuration Text Editor</h2>
              <p>
                Historically, editing a gradeable’s configuration in Submitty required switching to a different 
                server directory, uploading a full config bundle, or using the limited Notebook Builder tool. 
                There was no support for directly editing a gradeable's <code>config.json</code> or supplemental files from the web interface.
              </p>
              <h3>Gradeable Config Editor (<a href="https://github.com/Submitty/Submitty/pull/10325" target="_blank">PR#10325</a>)</h3>
              <p>
                I inherited this PR from <a href="https://github.com/DarthNyan">Tate Whiteberg</a>, picking up where it was 
                left off, and completing it.
              </p>
              <h3>Live Editing with CodeMirror (<a href="https://github.com/Submitty/Submitty/pull/11814" target="_blank">PR#11814</a>)</h3>
              <p>
                Rather than just using a basic text area, I implemented CodeMirror to allow for a more customizable experience, and native tab support.
              </p>
              <h3>File & Folder Management (<a href="https://github.com/Submitty/Submitty/pull/11860" target="_blank">PR#11860</a>)</h3>
              <p>
                Added UI components to allow adding and deleting files and directories from the gradeable configuration.
              </p>
              <h3>Customizable Environment (<a href="https://github.com/Submitty/Submitty/pull/11924" target="_blank">PR#11924</a>)</h3>
              <p>
                Took advantages of CodeMirror's features by adding toggles for line numbers and tab size.
              </p>
              <h3>Download Config as ZIP (<a href="https://github.com/Submitty/Submitty/pull/11973" target="_blank">PR#11973</a>)</h3>
              <p>
                Added a button to download the entire config directory as a ZIP archive, allowing users to save edits they made on the site for future use.
              </p>
              <h3>Design & UX Polish (<a href="https://github.com/Submitty/Submitty/pull/11991" target="_blank">PR#11991</a>, <a href="https://github.com/Submitty/Submitty/pull/12003">PR#12003</a>, and <a href="https://github.com/Submitty/Submitty/pull/12218">PR#12218</a>)</h3>
              <p>
                Refined visual layout and interactions to feel intuitive and consistent with the rest of Submitty. Changes include
                <ul>
                  <li>highlighting selected files</li>
                  <li>adding tool tips to the customize toggles</li>
                  <li>smoothing out the transition between text files</li>
                  <li>ensuring correct file order (root-level directories first, then root-level files)</li>
                  <li>improved overall spacing for readability</li>
                  <li>toggle folders instead of display all at once</li>
                  <li>close on repeat click</li>
                  <li>trivial binary file check</li>
                </ul>
              </p>
              <h3>Documentation (<a href="https://github.com/Submitty/submitty.github.io/pull/707" target="_blank">PR#707</a>)</h3>
              <p>
                <a href="https://submitty.org/instructor/assignment_configuration/configuration_editor" target="_blank">Documentation page</a>.
              </p>
              <h3 style={{ marginBottom: "2rem" }}>The Final Product</h3>
              <div id="content-img-container">
                <img src={configEditor}/>
              </div>
              <p>
                With this feature completed, I now aim to modularize the code. This will allow it to be used in other areas of the site 
                where text files are uploaded such as bulk upload redactions, and grade configurations. This is a very necessary quality of 
                life enhancement that will improve instructor productivity and experience.
              </p>
              <hr/>
              <h2>Dark Mode Toggle for the Documentation Site</h2>
              <h3>Initial PR (<a href="https://github.com/Submitty/submitty.github.io/pull/691" target="_blank">PR#691</a>)</h3>
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
                <b>Fun Fact:</b> I actually used the same design for the dark mode toggle on this site!
              </p>
              <hr/>
              <h2>Additional Work</h2>
              <h3>Team Grade Override (<a href="https://github.com/Submitty/Submitty/pull/10677" target="_blank">PR#10677</a>)</h3>
              <p>
                Initially created by <a href="https://submitty.org/developer/rensselaer_center_for_open_source/2024_Michael_Papadopoulos" target="_blank">Michael Papadopoulos</a>. 
                When overriding a grade in a team gradeable, instructors would have to process each student individually. Now, a popup listing the student’s 
                teammates displays, notifying the instructor that they have teammates, and asking if they want to override them as well.
              </p>
              <h3>Filter Withdrawn Students (<a href="https://github.com/Submitty/submitty.github.io/pull/11792" target="_blank">PR#11792</a>)</h3>
              <p>
                Initially created by GitHub user <a href="https://github.com/yanliw123">yanliw123</a>. To streamline grading, this PR adds 
                a toggle that hides withdrawn students from the grading page, so TAs can focus on active students only.
              </p>
              <h3>Add Audit / Withdrawn to Sample Data (<a href="https://github.com/Submitty/submitty.github.io/pull/11882" target="_blank">PR#11882</a>)</h3>
              <p>
                [IN PROGRESS] Added two students with registration_type set to <code>withdrawn</code> and two with <code>audit</code> to the existing sample data, 
                which uses a seeded random number generator. Modifying this data shifted all related values, requiring updates 
                to 20+ Cypress test files to ensure the feature could be integrated.
              </p>
              <h3>TA Grading Bugfixes (<a href="https://github.com/Submitty/Submitty/pull/12224" target="_blank">PR#12224</a> and <a href="https://github.com/Submitty/Submitty/pull/12227" target="_blank">PR#12227</a>)</h3>
              <p>
                In Summer 2025, there was rapid progress on the conversion of the TA Grading interface from Twig to Vue. With so much 
                legacy code being refactored, bugs were inevitable. Both of these PRs aim to address bugs that were affecting the workflow 
                of graders. Though the changes were small, the process of discovering the cause of the issues took some time. More bugfixes coming soon!
              </p>
              <hr/>
              <h2>Future Plans / Work in Progress</h2>
              <p>
                I now have 1 semester left at RPI, this time as the team leader of Submitty. 
                Here is what I hope to work on:
                <ul>
                  <li><b>Become a dependable leader</b> – I’m eager to create a collaborative environment where new contributors feel welcome. I intend to lead by example, and stress that I am always available to help.</li>
                  <li><b>Improve Operations</b> – Submitty has a tried and true system, but there is room for improvement. As the project lead, I want Submitty to operate like a well-oiled machine. I will achieve this by running a <i>quick</i> standup each meeting, redeveloping our onboarding process, and leaving a review on most pull requests that come in.</li>
                  <li><b>Create a cloud instance</b> - Submitty currently requires self-hosting. By putting it on the cloud, anyone who is interested will be able to demo the site without the need to set up their own server.</li>
                  <li><b>Modularize the Configuration Editor</b> – A vital tool for instructors; improving it means a better experience for everyone especially future cloud users since they won't have SSH access.</li>
                  <li><b>Transform the home page into a dashboard</b> – Adding notifications was a good start, but there is more information to centralize such as grade summaries and upcoming gradeables.</li>
                  <li><b>Convert more pages to Vue</b> – The component-based approach is a joy to work with and a strong candidate to become a core part of the stack if we continue to port existing Twig files.</li>
                  <li><b>Work with the database</b> – I am eager to apply what I have learned from the Database Systems course I took to Submitty!</li>
                  <li><b>Enhance Live Lecture Chat</b> – Recently, I have become interested in stateful (socketed) applications. I want to expand the features of Live Lecture Chat, while learning more about sockets along the way!</li>
                  <li><b>Bugfixes</b> – Yeah, their boring, but it's always fun to solve problems in areas of the site I'm not familiar with.</li>
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
          <ReadMoreBtn
            readMore={readMore}
            setReadMore={setReadMore}
          />
        </div>
        <NavButton
          right="Speed Roulette" rightNav="/projects/speedroulette"
        />
      </div>
    </>
  );
}

export default Submitty;
//import TechStack from '../../components/TechStack.tsx';
import NavButton from '../../components/NavButton.tsx';
import TextContentHeader from '../../components/TextContentHeader.tsx';
import TextContentPage from '../../components/TextContentPage.tsx';
import TextImage from '../../components/TextImage.tsx';

import submittyDuck from '../../assets/submitty/submitty_duck.png';
import homeNotis from '../../assets/submitty/submitty-noti-ui.png';
import individualNotification from '../../assets/submitty/individual-notification-component.png';
import courseNotisBefore from '../../assets/submitty/course-notis-before.png';
import courseNotisAfter from '../../assets/submitty/course-notis-after.png';
import markSeenPopup from '../../assets/submitty/mark-all-seen-popup.png';
import additionalUnseenCount from '../../assets/submitty/additional-unseen-count.png';
import configEditor from '../../assets/submitty/completed-gradeable-config-editor.png';
import orgToggle from '../../assets/submitty/submitty-org-mode-toggle.png';
import withdrawnToggle from '../../assets/submitty/withdrawn-toggle.png';
import submittyOverview from '../../assets/submitty/high-level-submitty.png';

export default function Submitty() {
    return (
        <TextContentPage
            header={
                <TextContentHeader
                    title="Submitty"
                    siteImg={submittyDuck}
                    siteLink="https://submitty.org/index/overview"
                    ghLink="https://github.com/Submitty/Submitty"
                />
            }
            navButton={<NavButton right="Speed Roulette" rightNav="/projects/speedroulette" />}
            preview={
                <>
                    <p>
                        Created in 2014, Submitty is Rensselaer Polytechnic Institute's open source, comprehensive course management system.
                    </p>
                    <p>
                        I began my journey with Submitty in January of 2025, where I spent the semester learning the technologies, 
                        conducting functionality reviews, and making minor UI changes. At the end, I was excited to learn that 
                        I would be joining Summer 2025's full-time development team where I would have the opportunity to make 
                        more impactful contributions.
                    </p>
                    <p>
                        I continued with Submitty through Fall 2025 and served as the team lead in Spring 2026. This
                        provided the opportunity for me to develop my technical leadership skills through onboarding, 
                        code reviews, and design discussions. For Summer 2026, I am mentoring a Google Summer of Code student 
                        tasked with migrating legacy Twig features to Vue.
                    </p>
                    <TextImage img={submittyOverview} desc="A high-level overview of the Submitty system."/>
                </>
            }
            main={
                <>
                    <hr />
                    <h2>Notifications UI Redesign</h2>
                    <p>
                        <b>Problem:</b> Notifications are stored within individual course databases, 
                        requiring users to navigate between courses to view them. As additional 
                        notification features were introduced, this workflow became increasingly 
                        cumbersome and fragmented.
                    </p>
                    <h3>
                        Vue Notifications on the Home Page (
                        <a href="https://github.com/Submitty/Submitty/pull/11914" target="_blank">
                            PR#11914
                        </a>
                        )
                    </h3>
                    <p>
                        Since this feature was going to be on the home page of the site, thoughtful design was
                        essential. As a group, we started with whiteboard sketches to explore layout ideas, then moved
                        to Figma to create a polished mockup for feedback and iteration. Throughout development, I
                        regularly demoed my progress to the group to gather input and continuously iterate on design and
                        functionality.
                    </p>
                    <p>
                        The technical challenge was efficiently aggregating notifications from multiple course
                        databases. Since each course requires its own query and this feature now runs every time a user
                        visits the home page, performance was crucial. To address this, I optimized the process by:
                        <ul>
                            <li>Limiting queries to only active courses</li>
                            <li>Limiting each query to the 10 most recent notifications</li>
                            <li>Sorting results server-side</li>
                            <li>
                                Creating a new database index on <code>to_user_id</code> and <code>created_at</code>,
                                which reduced the time complexity from <b>O(courses × notifications)</b> to{' '}
                                <b>O(courses)</b>
                            </li>
                        </ul>
                    </p>
                    <h3>
                        Mark as Seen (
                        <a href="https://github.com/Submitty/Submitty/pull/12007" target="_blank">
                            PR#12007
                        </a>
                        )
                    </h3>
                    <p>
                        After the original feature was merged, it became clear that users needed a way to dismiss unseen
                        notifications without being redirected. This PR added an envelope icon next to each unseen
                        notification, allowing them to be dynamically marked as seen.
                    </p>
                    <h3>
                        Improve Interactivity (
                        <a href="https://github.com/Submitty/Submitty/pull/12012" target="_blank">
                            PR#12012
                        </a>
                        )
                    </h3>
                    <p>
                        As mentioned above, it’s important that this feature has a clean and intuitive UI. This PR
                        improved the design with the following changes:
                        <ul>
                            <li>Added a star icon next to gradeable notifications.</li>
                            <li>Increased the font weight of notification content for better readability.</li>
                            <li>Linked each notification’s course name to that course’s notifications page.</li>
                        </ul>
                    </p>
                    <h3>
                        Individual Notification Component (
                        <a href="https://github.com/Submitty/Submitty/pull/12137" target="_blank">
                            PR#12137
                        </a>
                        )
                    </h3>
                    <p>
                        With new features continuously being added to the notifications UI, we were losing the benefits
                        of Vue components. To address this, I created a Notification component that would be used for
                        each individual notification inside the main display component. This split the 400 line file
                        into two 200 line files, separting concerns while maintaining original functionality.
                    </p>
                    <TextImage img={individualNotification} desc="Individual Notification Component"/>
                    <h3>
                        Convert Course Notifications to Vue (
                        <a href="https://github.com/Submitty/Submitty/pull/12159" target="_blank">
                            PR#12159
                        </a>
                        )
                    </h3>
                    <p>
                        With Vue being used for the home page and Twig still being used on course pages, it was time to
                        convert the rest of the UI to Vue. Since the prior PR nicely modularized the Vue code, this
                        transition was seamless.
                    </p>
                    <TextImage img={courseNotisBefore} desc="Before"/>
                    <TextImage img={courseNotisAfter} desc="After"/>
                    <h3>
                        Home Page Mark All Seen Popup (
                        <a href="https://github.com/Submitty/Submitty/pull/12219" target="_blank">
                            PR#12219
                        </a>
                        )
                    </h3>
                    <p>
                        Despite the design of the course notification page's mark seen button where a single click of a
                        button marks all notifications as seen, the home page could not be so simple. After much
                        deliberation about a safe design, we settled on a popup that displays the counts of each
                        course's unseen notifications. The user can then select specific courses to mark seen, or all of
                        them. I like to think of it as an "Are you sure?" popup with advanced functionality.
                    </p>
                    <TextImage img={markSeenPopup}/>
                    <h3>
                        Home Page Additional Unseen Count (
                        <a href="https://github.com/Submitty/Submitty/pull/12227" target="_blank">
                            PR#12227
                        </a>
                        )
                    </h3>
                    <p>
                        Since the notifications display is on the home page, performance is essential. For this reason,
                        only the 10 most recent notifications from each of the user's courses are brought here. This
                        means if the user has 11 unseen notifications in a course, they will have no way to see it, or
                        individually clear it from the home page. To address this, I implemented a count of how many
                        unseen notifications the user has beyond what is displayed. The tricky part of this PR was the
                        edge cases:
                        <ul>
                            <li>
                                singular <b>vs</b> plural
                            </li>
                            <li>
                                "Show All" <b>vs</b> "Unseen Only"
                            </li>
                            <li>
                                notifications in the front-end, but not yet displayed <b>vs</b> notifications exceed
                                limit, and cannot be brought to the front-end
                            </li>
                        </ul>
                    </p>
                    <TextImage img={additionalUnseenCount}/>
                    <h3 style={{ marginBottom: '2rem' }}>The Final Product (Home Page)</h3>
                    <TextImage img={homeNotis}/>
                    <p>
                        These updates have transformed the student experience of my peers and I this past semester.
                        Taking four computer science courses, a combined notification feed made it easy to stay
                        organized and up to date. In the future, I hope to add more to both the notification system and
                        the home page, maximizing quality of life for the best user experience possible!
                    </p>
                    <hr />
                    <h2>Configuration Text Editor</h2>
                    <p>
                        Historically, editing a gradeable’s configuration in Submitty required downloading the config,
                        making changes, and reuploading. There was no support for directly editing a gradeable's{' '}
                        <code>config.json</code> or supplemental files from the web interface.
                    </p>
                    <h3>
                        Gradeable Config Editor (
                        <a href="https://github.com/Submitty/Submitty/pull/10325" target="_blank">
                            PR#10325
                        </a>
                        )
                    </h3>
                    <p>
                        I inherited this PR from <a href="https://github.com/DarthNyan">Tate Whiteberg</a>, picking up
                        where it was left off, and completing it.
                    </p>
                    <h3>
                        Live Editing with CodeMirror (
                        <a href="https://github.com/Submitty/Submitty/pull/11814" target="_blank">
                            PR#11814
                        </a>
                        )
                    </h3>
                    <p>
                        Rather than just using a basic <code>textarea</code>, I implemented CodeMirror to allow for a
                        more customizable experience, and native tab support.
                    </p>
                    <h3>
                        File & Folder Management (
                        <a href="https://github.com/Submitty/Submitty/pull/11860" target="_blank">
                            PR#11860
                        </a>
                        )
                    </h3>
                    <p>
                        Added UI components to allow adding and deleting files and directories from the gradeable
                        configuration.
                    </p>
                    <h3>
                        Customizable Environment (
                        <a href="https://github.com/Submitty/Submitty/pull/11924" target="_blank">
                            PR#11924
                        </a>
                        )
                    </h3>
                    <p>Took advantages of CodeMirror's features by adding toggles for line numbers and tab size.</p>
                    <h3>
                        Download Config as ZIP (
                        <a href="https://github.com/Submitty/Submitty/pull/11973" target="_blank">
                            PR#11973
                        </a>so proud of all that we have accomplished and excited to see
                        what we create next!
                        )
                    </h3>
                    <p>
                        Added a button to download the entire config directory as a ZIP archive, allowing users to save
                        edits they made on the site for future use.
                    </p>
                    <h3>
                        Design & UX Polish (
                        <a href="https://github.com/Submitty/Submitty/pull/11991" target="_blank">
                            PR#11991
                        </a>
                        , <a href="https://github.com/Submitty/Submitty/pull/12003">PR#12003</a>, and{' '}
                        <a href="https://github.com/Submitty/Submitty/pull/12218">PR#12218</a>)
                    </h3>
                    <p>
                        Refined visual layout and interactions to feel intuitive and consistent with the rest of
                        Submitty. Changes include
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
                    <h3>
                        Documentation (
                        <a href="https://github.com/Submitty/submitty.github.io/pull/707" target="_blank">
                            PR#707
                        </a>
                        )
                    </h3>
                    <p>
                        <a
                            href="https://submitty.org/instructor/assignment_configuration/configuration_editor"
                            target="_blank"
                        >
                            Documentation page
                        </a>
                        .
                    </p>
                    <h3 style={{ marginBottom: '2rem' }}>The Final Product</h3>
                    <TextImage img={configEditor}/>
                    <hr />
                    <h2>Additional Work</h2>
                    <h3>
                        Dark Mode for Documentation Site (
                        <a href="https://github.com/Submitty/submitty.github.io/pull/691" target="_blank">
                            PR#691
                        </a>
                        )
                    </h3>
                    <p>
                        To improve accessibility and match user expectations, I added a dark mode toggle to the Submitty
                        documentation site. The site is built with Jekyll and uses auto-generated styles, so integrating
                        theme switching required working around those constraints. <b>Fun Fact:</b> I ended up using the 
                        same design for the dark mode toggle on this site! See the toggle in action <a href="https://submitty.org/index/overview"
                        target="_blank"> here</a>.
                    </p>
                    <TextImage img={orgToggle}/>
                    <h3>
                        Filter Withdrawn Students (
                        <a href="https://github.com/Submitty/submitty.github.io/pull/11792" target="_blank">
                            PR#11792
                        </a>
                        )
                    </h3>
                    <p>
                        This PR was created and abandoned by another contributor. It adds a toggle that hides withdrawn 
                        students from the grading page, so TAs can focus on active students only.
                    </p>
                    <TextImage img={withdrawnToggle}/>
                    <hr />
                    <h2>Team Lead</h2>
                        
                    <hr />
                    <h2>Reflection</h2>
                    <p>
                        Submitty has shaped me into the software engineer I am today. I would like to thank Professor Cutler, 
                        my teammates, mentors, and RPI for this experience. I am so proud of all that we have accomplished and excited to see
                        what we create next!
                    </p>
                </>
            }
        />
    );
}

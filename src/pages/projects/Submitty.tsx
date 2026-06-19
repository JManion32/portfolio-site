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
import olderUnseenCount from '../../assets/submitty/older-unseen-count.png';
import configEditor from '../../assets/submitty/completed-gradeable-config-editor.png';
import orgToggle from '../../assets/submitty/submitty-org-mode-toggle.png';
import withdrawnToggle from '../../assets/submitty/withdrawn-toggle.png';
import submittyOverview from '../../assets/submitty/high-level-submitty.png';
import oldNotifications from '../../assets/submitty/old-notifications.png';
import iterationCycle from '../../assets/submitty/iteration-cycle.png';
import notificationComponents from '../../assets/submitty/notification-components.png';
import oldHomeNotifications from '../../assets/submitty/old-home-notifications.png';
import spring2025Team from '../../assets/submitty/spring-2025-team.png';
import summer2025Team from '../../assets/submitty/summer-2025-team.png';
import finalPresentation1 from '../../assets/submitty/final-presentation-1.png';

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
                        Created in 2014, Submitty is Rensselaer Polytechnic Institute's open source, comprehensive
                        course management system.
                    </p>
                    <p>
                        I began my journey with Submitty in January of 2025, where I spent the semester learning the
                        technologies, conducting functionality reviews, making minor UI changes, and adding the Prettier
                        code formatter.
                    </p>
                    <TextImage img={spring2025Team} desc="The Spring 2025 team." />
                    <p>
                        In Summer 2025, I joined the full-time development team. This provided the opportunity to learn
                        the system at a deeper level, and make more substantial contributions.
                    </p>
                    <TextImage img={summer2025Team} desc="The Summer 2025 team." />
                    <p>
                        I continued with Submitty through Fall 2025 and served as the team lead in Spring 2026. This
                        provided the opportunity for me to develop my technical leadership skills through onboarding,
                        code reviews, and design discussions. For Summer 2026, I am mentoring a Google Summer of Code
                        student tasked with migrating legacy Twig features to Vue.
                    </p>
                    <TextImage img={submittyOverview} desc="A high-level overview of the Submitty system." />
                </>
            }
            main={
                <>
                    <hr />
                    <h2>Notifications UI Redesign</h2>
                    <p>
                        <b>Background:</b> Notifications are stored within individual course databases and were
                        originally used primarily by the discussion forum.
                    </p>
                    <p>
                        <b>Problem:</b> As new automated notification features were introduced, notifications became
                        increasingly important to users. Because notifications were decentralized, users could only view
                        them from within each individual course, requiring frequent navigation between courses to stay
                        informed.
                    </p>
                    <TextImage img={oldNotifications} desc="The old notifications system." />
                    <h3>
                        Notifications Panel on the Home Page (
                        <a href="https://github.com/Submitty/Submitty/pull/11914" target="_blank">
                            PR#11914
                        </a>
                        )
                    </h3>
                    <p>
                        I proposed a Vue component for the home page that would centralize all of the user's
                        notifications.
                    </p>
                    <h4>Design Challenge</h4>
                    <p>
                        Since this feature was going to be on the home page of the site, thoughtful design was
                        essential. As a group, we started with whiteboard sketches to explore layout ideas, then moved
                        to Figma to create a polished mockup for feedback and iteration. Once we reached consensus on
                        the general look and feel, I started the implementation, entering the feedback loop:
                    </p>
                    <TextImage img={iterationCycle} />
                    <h4>Performance Considerations</h4>
                    <p>
                        As with design, performance is critical on the home page. Notifications had to be aggregated
                        across multiple course databases, which can add up, especially for instructors in many courses.
                        Some optimizations I made include:
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
                    <TextImage img={oldHomeNotifications} desc="The completed panel." />
                    <h3>
                        Mark as Seen (
                        <a href="https://github.com/Submitty/Submitty/pull/12007" target="_blank">
                            PR#12007
                        </a>
                        )
                    </h3>
                    <p>
                        After the original feature was merged, it became clear that users needed a way to dismiss unseen
                        notifications without being redirected. This PR added an envelope icon to unseen notifications,
                        allowing them to be dynamically marked as seen.
                    </p>
                    <h3>
                        Improve Interactivity (
                        <a href="https://github.com/Submitty/Submitty/pull/12012" target="_blank">
                            PR#12012
                        </a>
                        )
                    </h3>
                    <p>
                        <ul>
                            <li>Added a star icon to indicate gradeable notifications.</li>
                            <li>Increased the font weight of notification content for enhanced readability.</li>
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
                        each individual notification inside the main display component. This split the 400 line file in
                        two, separating concerns while maintaining original functionality.
                    </p>
                    <TextImage img={individualNotification} desc="Individual Notification Component" />
                    <TextImage
                        img={notificationComponents}
                        desc="Red: NotificationDisplay component. Blue: Individual Notification components."
                    />
                    <h3>
                        Convert Course Notifications to Vue (
                        <a href="https://github.com/Submitty/Submitty/pull/12159" target="_blank">
                            PR#12159
                        </a>
                        )
                    </h3>
                    <p>
                        Reused the previously created Vue components on the course pages. The components are
                        self-contained, only requiring a few prop changes to implement.
                    </p>
                    <TextImage img={courseNotisBefore} desc="Before" />
                    <TextImage img={courseNotisAfter} desc="After" />
                    <h3>
                        Home Page Mark All Seen Popup (
                        <a href="https://github.com/Submitty/Submitty/pull/12219" target="_blank">
                            PR#12219
                        </a>
                        )
                    </h3>
                    <p>
                        Individual mark seen is helpful, but what if you have 50 unseen notifications? That's a lot of
                        clicking. The notifications panel needed a batch mark seen, but it wasn't that simple. If it was
                        just a button, then users could clear all of their notifications without seeing them. After much
                        deliberation (and even a presentation) about a safe design, we settled on a popup that displays
                        the counts of each course's unseen notifications. The user can then select specific courses to
                        clear, or all of them. I like to think of it as an "Are you sure?" popup with advanced
                        functionality.
                    </p>
                    <TextImage img={markSeenPopup} />
                    <h3>
                        Home Page Additional Unseen Count (
                        <a href="https://github.com/Submitty/Submitty/pull/12227" target="_blank">
                            PR#12227
                        </a>
                        )
                    </h3>
                    <p>
                        Limiting aggregated notifications to the 10 most recent from each course improved performance,
                        but what if the user had 11 unseen? They would have no way to see that 11th notification, or
                        individually clear it from the home page. To address this, I implemented a count of how many
                        unseen notifications the user has beyond what is currently displayed. The tricky part of this PR
                        was the edge cases:
                        <ul>
                            <li>
                                singular <b>vs</b> plural
                            </li>
                            <li>
                                "Show All" <b>vs</b> "Unseen Only"
                            </li>
                            <li>
                                Not displayed <b>vs</b> never brought to the panel
                            </li>
                        </ul>
                    </p>
                    <TextImage img={additionalUnseenCount} desc="Not yet displayed." />
                    <TextImage img={olderUnseenCount} desc="Never brought to the panel." />
                    <h3 style={{ marginBottom: '2rem' }}>The Final Product (Home Page)</h3>
                    <TextImage img={homeNotis} />
                    <hr />
                    <h2>Configuration Text Editor</h2>
                    <p>
                        <b>Problem:</b> There was no feature to edit gradeable configurations from the site. Instructors
                        had two options:
                        <ul>
                            <li>Reupload</li>
                            <li>SSH into the server and edit the file</li>
                        </ul>
                    </p>
                    <h3>
                        Gradeable Config Editor (
                        <a href="https://github.com/Submitty/Submitty/pull/10325" target="_blank">
                            PR#10325
                        </a>
                        )
                    </h3>
                    <p>This PR was in a half-completed state, and had been abandoned for over a year.</p>
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
                        </a>
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
                        ,{' '}
                        <a href="https://github.com/Submitty/Submitty/pull/12003" target="_blank">
                            PR#12003
                        </a>
                        , and{' '}
                        <a href="https://github.com/Submitty/Submitty/pull/12218" target="_blank">
                            PR#12218
                        </a>
                        )
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
                    <TextImage img={configEditor} />
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
                        theme switching required working around those constraints. See the toggle in action{' '}
                        <a href="https://submitty.org/index/overview" target="_blank">
                            {' '}
                            here
                        </a>
                        .
                    </p>
                    <TextImage img={orgToggle} />
                    <p>
                        <b>Fun Fact:</b> I ended up using the same design for the dark mode toggle on this site!
                    </p>
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
                    <TextImage img={withdrawnToggle} />
                    <hr />
                    <h2>Team Lead</h2>
                    <p>In Spring 2026, I had the opportunity to lead our team of 10 developers.</p>
                    <h3>Responsibilities</h3>
                    <p>
                        <ul>
                            <li>Present onboarding slides</li>
                            <li>Write weekly progress reports</li>
                            <li>1:1 check-ins with developers</li>
                            <li>Lead standups</li>
                            <li>Conduct code reviews</li>
                            <li>Create issues</li>
                            <li>Create posters for the CS exposition</li>
                            <li>A comprehensive final presentation</li>
                        </ul>
                    </p>
                    <TextImage img={finalPresentation1} desc="Final presentation with the team." />
                    <h3>Google Summer of Code</h3>
                    <p>
                        In February, Submitty was accepted to Google Summer of Code for the 7th time. GSoC is a Google
                        initiative that funds students to contribute to partnered open-source projects for a summer. To
                        be accepted to a project, candidates must write a proposal about their contributions to it. As a
                        result, Submitty was <i>flooded</i> with new activity. In a single semester, we saw:
                        <ul>
                            <li>
                                <b>288</b> pull requests created (excluding dependencies)
                            </li>
                            <li>
                                <b>107</b> issues created
                            </li>
                            <li>
                                <b>93</b> pull requests merged
                            </li>
                        </ul>
                    </p>
                    <h3>Approach to Code Reviews</h3>
                    <p>
                        With so many pull requests and a lack of experienced developers to keep up, I spent much of the
                        semester reviewing. I refined my approach into four steps:
                    </p>
                    <h4>1) High-Level Review</h4>
                    <p>
                        Mainly asking questions such as: "Are the changes necessary?", "Should the scope be adjusted?",
                        and "Did the author take the correct approach?". This step can save a lot of time.
                    </p>
                    <h4>2) Understand the Implementation</h4>
                    <p>
                        If the changes look good at a high level, the next step is understanding them. To accomplish
                        this, I typically verify the functionality according to the documentation provided by the
                        author. I also trace code execution.
                    </p>
                    <h4>3) Deeper Code Review</h4>
                    <p>
                        This is where I see if the code follows project conventions. Sometimes, people use best
                        practices, but if they aren't consistent with the rest of the project, the cost outweighs the
                        benefits. This is also where I look for security, performance, testing, and maintainability
                        concerns. Finally, I "bikeshed", going line-by-line to ensure quality.
                    </p>
                    <h4>4) Provide Thorough, Actionable Feedback</h4>
                    <p>
                        I make an effort to provide the author with as much information as possible so they can
                        understand my perspective, know what needs to change, and maybe even learn something new.
                    </p>
                    <h3>Challenges</h3>
                    <p>
                        With an influx in activity and many new developers, I encountered several leadership challenges.
                    </p>
                    <h4>Finding Tasks</h4>
                    <p></p>
                    <h4>Setting Expectations</h4>
                    <p></p>
                    <h4>Changing Priorities</h4>
                    <p></p>
                    <h3>Outcomes</h3>
                    <p></p>
                    <h3>Takeaways</h3>
                    <p></p>
                    <hr />
                    <h2>Reflection</h2>
                    <p>
                        Submitty has shaped me into the software engineer I am today. I would like to thank Professor
                        Cutler, my teammates, mentors, and RPI for this experience. I am so proud of all that we have
                        accomplished and excited to see what we create next!
                    </p>
                </>
            }
        />
    );
}

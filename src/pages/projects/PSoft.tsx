import NavButton from '../../components/NavButton.tsx';
import useNavigateTop from '../../hooks/useNavigateTop.ts';
import TextContentHeader from '../../components/TextContentHeader.tsx';
import TextContentPage from '../../components/TextContentPage.tsx';

import ogPsoftIndex from '../../assets/og-psoft-index.png';
import ogPsoftHW from '../../assets/og-psoft-hw-page-light.png';
import newPsoftHW from '../../assets/new-psoft-hw-page-light.png';
import mobilePsoft from '../../assets/mobile-psoft-scaling.png';
import newPsoftIndex from '../../assets/new-psoft-index.png';
import newPsoftIndex2 from '../../assets/new-psoft-index2.png';
import newPsoftIndexDM from '../../assets/new-psoft-index-dm.png';

export default function PSoft() {
    const navigateTop = useNavigateTop();
    return (
        <>
            <TextContentPage
                header={<TextContentHeader title="Course Website" />}
                navButton={
                    <NavButton
                        left="CChat"
                        leftNav="/projects/cchat"
                        right="Super Strikers"
                        rightNav="/projects/superstrikers"
                    />
                }
                preview={
                    <>
                        <p>
                            Revamped the course website for Principles of Software, a core computer science course at
                            Rensselaer Polytechnic Institute.
                        </p>
                        <div id="content-img-container">
                            <img src={ogPsoftIndex} />
                            <p>Before</p>
                        </div>
                        <div id="content-img-container">
                            <img src={newPsoftIndex2} />
                            <p>After</p>
                        </div>
                    </>
                }
                main={
                    <>
                        <hr />
                        <h3>Reformatted Pages</h3>
                        <p>The site’s main issue was readability. Each page had quirks that needed to be addressed:</p>
                        <h4>Home Page</h4>
                        <ul>
                            <li>
                                <b>Problem:</b> This was an issue across the site, but especially on the home page. Page
                                content had no margins, which diminished readability on larger screens. <b>Solution:</b>{' '}
                                I refactored the layout by separating the page container from the content container and
                                introducing a centered content width with consistent margins. This improved visual
                                hierarchy, increased readability, and helped guide the user’s focus toward the primary
                                content.
                            </li>
                            <li>
                                <b>Problem:</b> Information wasn’t presented in a clear or intentional way. For example,
                                important details like the lecture location were buried in small text in the middle of
                                the page. <b>Solution:</b> I removed unnecessary bloat, and broke the page into clearly
                                defined sections.
                            </li>
                        </ul>
                        <h4>Homework / Topics / Resources Pages</h4>
                        <p>
                            <b>Problem:</b> All three pages followed the same structure, with new content added to the
                            bottom each week. By the end of the semester, this created long, cumbersome pages that
                            required excessive scrolling to get to the newest content. <b>Solution:</b> I introduced
                            dropdowns so users can quickly access only what they need without being overwhelmed.
                        </p>
                        <div id="content-img-container">
                            <img src={ogPsoftHW} />
                            <p>Before</p>
                        </div>
                        <div id="content-img-container">
                            <img src={newPsoftHW} />
                            <p>After</p>
                        </div>
                        <h3>Dark Mode Toggle</h3>
                        <p>
                            <b>Problem:</b> After a semester of lowering my brightness every time I opened the site,
                            adding dark mode was a top priority. <b>Solution:</b> I created a dedicated{' '}
                            <code>colors.css</code> which defined all color variables used throughout the site, and
                            placed the toggle on the right side of the navigation bar.
                        </p>
                        <div id="content-img-container">
                            <img src={newPsoftIndexDM} />
                            <p>Home page in dark mode</p>
                        </div>
                        <h3>Components</h3>
                        <p>
                            <b>Problem:</b> In the original implementation, reused components were duplicated across
                            multiple HTML files, requiring repetitive edits for minor changes such as updating the
                            footer date. <b>Solution:</b> I modularized each component into a dedicated JavaScript file
                            where edits propogate to all pages of the site.
                        </p>
                        <h3>Replaced Bootstrap</h3>
                        <p>
                            <b>Problem:</b> The original site was built entirely with Bootstrap and didn’t include a
                            single custom CSS file, leaving the codebase <b>A MESS</b>. Maintainers had to sift through
                            countless classes and messy indentation to edit shown content. <b>Solution:</b> I removed{' '}
                            <b>ALL</b> Bootstrap in favor of traditional CSS files.
                        </p>
                        <h3>Responsive Scaling</h3>
                        <p>
                            <b>Problem:</b> Bootstrap was great because it took a mobile-first approach, and bad for
                            this same reason on larger screens. Without it, I would have to design the scaling myself,
                            and make it work for all screens. <b>Solution:</b> I created <code>scaling.css</code>, a
                            file with width-based media queries that altered CSS variables. It is the same approach I
                            took with this <a onClick={() => navigateTop('/projects/portfolio')}>portfolio site</a>.
                        </p>
                        <div id="content-img-container">
                            <img src={mobilePsoft} />
                            <p>Home page featuring a mobile nav bar!</p>
                        </div>
                        <h3>GitHub Workflow</h3>
                        <p>
                            <b>Problem:</b> The previous workflow for maintaining this site was inefficient. When I
                            started working on it, I was given a zip file of the site. This meant no two people could
                            work on it at once, and there was no version control to rollback or save new changes.{' '}
                            <b>Solution:</b> I established a private GitHub repository to manage all changes and
                            streamline collaboration. Now, <b>all</b> updates are tracked, instructors have controlled
                            repository access, and deployment is painless.
                        </p>
                        <h3>Template</h3>
                        <p>
                            With the GitHub workflow, I made the main branch a template, allowing instructors to create
                            separate instances of the site for each of their courses.
                        </p>
                        <h3>New Site Logo</h3>
                        <p>
                            The old site logo was a turtle, which doesn't have much to do with a Principles of Software
                            course. I updated it to a blue cogwheel to better represent the subject matter and match the
                            site’s theme. In choosing the new asset, I made sure to use an image with a Creative Commons
                            license.
                        </p>
                        <hr />
                        <h2>Reflection</h2>
                        <p>
                            This project was a solid benchmark for my growth as a front-end developer. I actually{' '}
                            <i>finished</i> the project twice: once at the start of Summer 2025, and again four months
                            later. Here was my first finished product:
                        </p>
                        <div id="content-img-container">
                            <img src={newPsoftIndex} />
                        </div>
                        <p>Certainly an improvement, but I'm much happier with the second iteration:</p>
                        <div id="content-img-container">
                            <img src={newPsoftIndex2} />
                        </div>
                    </>
                }
            />
        </>
    );
}

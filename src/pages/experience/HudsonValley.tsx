import TextContentPage from '../../components/TextContentPage.tsx';
import NavButton from '../../components/NavButton.tsx';
import TextContentHeader from '../../components/TextContentHeader.tsx';
import useNavigateTop from '../../hooks/useNavigateTop.ts';

import hudsonValleyAerial from '../../assets/hudson-valley-aerial.jpg';

function HudsonValley() {
    const navigateTop = useNavigateTop();
    return (
        <>
            <TextContentPage
                header={<TextContentHeader title="Hudson Valley Community College" />}
                navButton={
                    <NavButton
                        left="Price Chopper"
                        leftNav="/experience/pricechopper"
                        right="Streamer"
                        rightNav="/experience/streamer"
                    />
                }
                preview={
                    <>
                        <p>
                            When I enrolled in community college, I was unsure of what to pursue. Throughout the next
                            two years, I would discover my interest in computer science, and lay a strong foundation for
                            my transfer to university.
                        </p>
                        <div id="content-img-container">
                            <img src={hudsonValleyAerial} className="project-img" />
                        </div>
                    </>
                }
                main={
                    <>
                        <hr />
                        <h2>Notable Courses</h2>
                        <p>There were a handful of courses that shaped my journey at HVCC.</p>
                        <h3>Intro CS Courses</h3>
                        <p>
                            Initially, I enrolled in the undecided program. One of my favorite hobbies at the time was
                            building computers. This and my Dad being a software engineer led to my decision to take an
                            introductory computer science course. I found enjoyment in the hardware side of things, but
                            struggled with the software since it was brand new to me. By the end of that semester, I
                            switched my major from undecided to computer science, marking the true beginning of my
                            journey. I still wasn’t sure where my focus would be, but at least I had found direction.
                        </p>
                        <p>
                            In my second semester, I took an introductory programming course in Python. This helped
                            narrow down my field of interest: I wanted to write code. I just loved the idea that
                            programming is a skill to be continually developed, like leveling up in a video game.
                        </p>
                        <h3>Programming & Data Logic II</h3>
                        <p>
                            This was HVCC's data structures course. The assignments were far more complex than Python
                            Programming, but working through them helped me grow as a developer. Concepts included data
                            structures, generics, recursion, exception handling, inheritance, abstraction,
                            encapsulation, and polymorphism. My favorite, however, was JavaFX, which gave me my first
                            (and certainly not my last) taste of user interface development. By the end of the course, I
                            had built a foundation of real coding skills, and for the first time, I could solve problems
                            on my own with code which felt pretty awesome.
                        </p>
                        <h3>Honorable Mentions</h3>
                        <ul>
                            <li>
                                <b>Discrete Mathematics:</b> Covered a variety of interesting topics that prepared me
                                for <a onClick={() => navigateTop('/experience/rensselaer')}>RPI</a>
                                's Intro to Algorithms course.
                            </li>
                            <li>
                                <b>Assembly Language:</b> One of the few in-person computer science courses I took at
                                HVCC. It was fun, and a great introduction to low-level programming.
                            </li>
                            <li>
                                <b>History of Media and Culture in the US:</b> I took this course in my freshman fall.
                                It had nothing to do with computer science, but remains as one of the best courses I've
                                ever taken.
                            </li>
                            <li>
                                <b>Biology:</b> To earn my Associate’s at HVCC, I had to take Biology I and II. Sure, I
                                struggled to figure out how dissecting rats and memorizing flower anatomy had anything
                                to do with computer science, but it was fun.
                            </li>
                        </ul>
                        <hr />
                        <h2>Reflection</h2>
                        <p>
                            Hudson Valley Community College played a crucial role in laying the foundation for my
                            academic journey at <a onClick={() => navigateTop('/experience/rensselaer')}>RPI</a>. In my
                            first year, I explored my interests, moving from an undecided high schooler to a computer
                            science student with aspirations in software development. In my second year, I strengthened
                            my study habits and leveled up my skills. As great as my time at{' '}
                            <a onClick={() => navigateTop('/experience/rensselaer')}>RPI</a> has been, I wouldn’t change
                            a thing about my experience at HVCC; it was exactly where I needed to be to grow both
                            academically and personally. Go Vikings!
                        </p>
                    </>
                }
            />
        </>
    );
}

export default HudsonValley;

import TextContentPage from '../../components/TextContentPage.tsx';
import NavButton from '../../components/NavButton.tsx';
import TextContentHeader from '../../components/TextContentHeader.tsx';
import useNavigateTop from '../../hooks/useNavigateTop.ts';
import TextImage from '../../components/TextImage.tsx';

import summerSage from '../../assets/rpi/summer-sage.jpg';
import rpi1 from '../../assets/rpi/RPI_1.jpg';
import rpi2 from '../../assets/rpi/RPI_2.jpg';
import rpi3 from '../../assets/rpi/RPI_3.jpg';
import rpi4 from '../../assets/rpi/RPI_4.jpg';
import rpi5 from '../../assets/rpi/RPI_5.jpg';
import rpi6 from '../../assets/rpi/RPI_6.jpg';
import rpi7 from '../../assets/rpi/RPI_7.jpg';
import rpi8 from '../../assets/rpi/RPI_8.jpg';
import rpi9 from '../../assets/rpi/RPI_9.jpg';
import rpi10 from '../../assets/rpi/RPI_10.jpg';
import rpi11 from '../../assets/rpi/RPI_11.jpg';
import rpi12 from '../../assets/rpi/RPI_12.jpg';
import rpi13 from '../../assets/rpi/RPI_13.jpg';
import rpi14 from '../../assets/rpi/RPI_14.jpg';
import rpi15 from '../../assets/rpi/RPI_15.jpg';
import rpi16 from '../../assets/rpi/RPI_16.jpg';
import rpi17 from '../../assets/rpi/RPI_17.jpg';
import rpi18 from '../../assets/rpi/RPI_18.jpg';
import rpi19 from '../../assets/rpi/RPI_19.jpg';
import rpi20 from '../../assets/rpi/RPI_20.jpg';
import rpi21 from '../../assets/rpi/RPI_21.jpg';
import rpi22 from '../../assets/rpi/RPI_22.jpg';
import rpi23 from '../../assets/rpi/RPI_23.jpg';
import rpi24 from '../../assets/rpi/RPI_24.jpg';
import rpi25 from '../../assets/rpi/RPI_25.jpg';
import rpi26 from '../../assets/rpi/RPI_26.jpg';
import rpi27 from '../../assets/rpi/RPI_27.jpg';
import rpi28 from '../../assets/rpi/RPI_28.jpg';
import rpi29 from '../../assets/rpi/RPI_29.jpg';

export default function Rensselaer() {
    const navigateTop = useNavigateTop();
    return (
        <>
            <TextContentPage
                header={<TextContentHeader title="Rensselaer Polytechnic Institute" />}
                navButton={<NavButton right="IT Technician" rightNav="/experience/stewarts" />}
                preview={
                    <>
                        {' '}
                        <p>
                            Rensselaer Polytechnic Institute has provided countless opportunities for personal and
                            professional growth. The challenging coursework, real-world experience from{' '}
                            <a onClick={() => navigateTop('/projects/Submitty')}>Submitty</a>, and the friendships I
                            built at <a onClick={() => navigateTop('/experience/lambdachi')}>Lambda Chi Alpha</a> has
                            made tuition worth every penny.
                        </p>
                        <TextImage img={summerSage}/>
                    </>
                }
                main={
                    <>
                        <hr />
                        <h2>Fall 2024</h2>
                        <p>
                            Transferring from community college to RPI was a stark adjustment. My first semester was
                            exciting, but stressful.
                        </p>
                        <p><b>Courses:</b> Physics I, Multivariable Calculus, Writing for Technical Communication, and most importantly:</p>
                        <h3>Data Structures</h3>
                        <p>
                            Featuring 10 homework assignments, weekly labs, and 4 exams, it was far more involved than
                            any academic work I had ever done previously. My excitement and confidence was quickly met
                            with many hours of studying, writing code, and learning.
                        </p>
                        <p>
                            Though it was uncomfortable, pressure makes diamonds and I came out as a 10x better
                            than I was going in. During the subsequent winter break, I examined a ~3,000 line
                            project I created the year prior, and was able to refactor it down to ~1,000 lines without
                            changing any functionality!
                        </p>
                        <hr />
                        <h2>Spring 2025</h2>
                        <p>
                            <b>Courses:</b> Linear Algebra, Introduction to Algorithms, Principles of
                            Software (whose <a onClick={() => navigateTop('/projects/psoft')}>website</a> I would later
                            revamp), and Rensselaer Center for Open Source, where I joined the{' '}
                            <a onClick={() => navigateTop('/projects/Submitty')}>Submitty</a> project.
                        </p>
                        <h3>Key Course: Intro to Algorithms</h3>
                        <p>
                            What better way to follow up Data Structures than with an algorithms course? Topics included
                            divide-and-conquer, graph decompositions, paths, greedy algorithms, dynamic programming,
                            linear programming, and NP-complete problems.
                        </p>
                        <hr />
                        <h2>Fall 2025</h2>
                        <p>
                            <b>Courses:</b> Database
                            Systems, Programming Languages, Software Analysis and Debugging, and{' '}
                            <a onClick={() => navigateTop('/projects/Submitty')}>Submitty</a> (RCOS).
                        </p>
                        <h3>Key Course: Database Systems</h3>
                        <p>
                            One of the best courses I have ever taken. The
                            material included relational algebra, normal forms, ER diagrams, SQL, PGSQL, optimization,
                            and more. I received an A in the course, a testament to my newfound proficiency with the
                            material. A special thank you to Professor{' '}
                            <a href="https://en.wikipedia.org/wiki/Sibel_Adal%C4%B1" target="_blank">
                                Sibel Adali
                            </a>{' '}
                            for her engaging lectures and organized approach.
                        </p>
                        <hr />
                        <h2>Spring 2026</h2>
                        <p>
                            My final semester of college.
                        </p>
                        <p>
                            <b>Courses:</b> Operating Systems, Software Design and
                            Documentation, Distributed Systems, and once again{' '}
                            <a onClick={() => navigateTop('/projects/Submitty')}>Submitty</a>.
                        </p>
                        <h3>Key Course: Operating Systems</h3>
                        <p>
                            This course took a deep dive into C programming, Linux, and the building 
                            blocks of operating systems. I even learned VIM!
                        </p>
                        <hr />
                        <h2>Reflection</h2>
                        <p>RPI was an incredible experience that molded me into who I am today. Go Engineers!</p>
                        <div id="rpi-collage-container">
                            <img src={rpi1} className="rpi-collage-img" />
                            <img src={rpi2} className="rpi-collage-img" />
                            <img src={rpi3} className="rpi-collage-img" />
                            <img src={rpi4} className="rpi-collage-img" />
                            <img src={rpi5} className="rpi-collage-img" />
                            <img src={rpi6} className="rpi-collage-img" />
                            <img src={rpi7} className="rpi-collage-img" />
                            <img src={rpi8} className="rpi-collage-img" />
                            <img src={rpi9} className="rpi-collage-img" />
                            <img src={rpi10} className="rpi-collage-img" />
                            <img src={rpi11} className="rpi-collage-img" />
                            <img src={rpi12} className="rpi-collage-img" />
                            <img src={rpi13} className="rpi-collage-img" />
                            <img src={rpi14} className="rpi-collage-img" />
                            <img src={rpi15} className="rpi-collage-img" />
                            <img src={rpi16} className="rpi-collage-img" />
                            <img src={rpi17} className="rpi-collage-img" />
                            <img src={rpi18} className="rpi-collage-img" />
                            <img src={rpi19} className="rpi-collage-img" />
                            <img src={rpi20} className="rpi-collage-img" />
                            <img src={rpi21} className="rpi-collage-img" />
                            <img src={rpi22} className="rpi-collage-img" />
                            <img src={rpi23} className="rpi-collage-img" />
                            <img src={rpi24} className="rpi-collage-img" />
                            <img src={rpi25} className="rpi-collage-img" />
                            <img src={rpi26} className="rpi-collage-img" />
                            <img src={rpi27} className="rpi-collage-img" />
                            <img src={rpi28} className="rpi-collage-img" />
                            <img src={rpi29} className="rpi-collage-img" />
                        </div>
                    </>
                }
            />
        </>
    );
}

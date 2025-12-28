import { useState } from 'react';
import ReadMoreBtn from '../../components/ReadMoreBtn.tsx'

import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';
import useNavigateTop from "../../hooks/useNavigateTop";

import rpiFall from '../../assets/rpi-fall.png';
import summerSage from '../../assets/summer-sage.jpg';

function Rensselaer() {
  const navigateTop = useNavigateTop();
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Rensselaer Polytechnic Institute</h1>
          </div>
          <div id="text-body">
            <p>
              Rensselaer Polytechnic Institute has provided me with countless opportunities for both personal and professional growth. 
              The challenging coursework, real-world experience from <a onClick={() => navigateTop("/projects/Submitty")}>Submitty</a>, 
              and the brotherhood I found at <a onClick={() => navigateTop("/experience/lambdachi")}>Lambda Chi Alpha</a> has made tuition worth every penny.
            </p>
            <div id="content-img-container">
              <img src={summerSage} className="project-img"/>
            </div>
            <div className={`${readMore ? '' : 'hide-read-more-container'}`}>
              <hr/>
              <h2>Fall 2024</h2>
              <p>
                Transferring from community college to RPI was a massive adjustment. My first semester was 
                exciting, but stressful. I was finding my footing on campus, rushing <a onClick={() => navigateTop("/experience/lambdachi")}>Lambda Chi Alpha</a>, 
                and commuting from home all while trying to keep up with the rigor of my courses. I took four courses totaling 16 credits. They were: Physics I, Multivariable Calculus, Writing 
                for Technical Communication, and the most impactful of all:
              </p>
              <h3>Data Structures</h3>
              <p>
                This course is known for being among the most challenging in the CS curriculum, commonly referred to as a "weed-out course". Featuring 10 homework assignments, 
                weekly labs, and 4 exams, it was far more involved than any academic work I had ever done previously. Despite the reputation, I approached 
                this course with excitement and confidence. I already had experience with the material from <a onClick={() => navigateTop("/experience/HudsonValley")}>Submitty</a>, and I was finally going 
                to write large-scale coding projects for school!
              </p>
              <p>
                Reality hit by the second homework, when I failed to complete the assignment. From there on, I had my work cut out for me. 
                I dug as deep as I could, practically living in the library every single day. Even then, I 
                still felt behind. <i>It was humbling</i>, but it was all worth it. Pressure makes diamonds and I came out as a 10x better programmer than I was going in. 
                During the subsequent winter break, I examined a ~3,000 line project I created the year prior, and was able to refactor it down to ~1,000 lines without changing any 
                functionality!
              </p>
              <hr/>
              <h2>Spring 2025</h2>
              <p>
                With my “Welcome to RPI” semester behind me, I was ready for round two. Once again, I took 4 courses totaling 16 
                credits: Linear Algebra, Introduction to Algorithms, Principles of Software (whose website I would later <a onClick={() => navigateTop("/projects/psoft")}>revamp</a>), and 
                Rensselaer Center for Open Source, where I joined the <a onClick={() => navigateTop("/projects/Submitty")}>Submitty</a> project.
              </p>
              <h3>Key Course: Intro to Algorithms</h3>
              <p>
                What better way to follow up Data Structures than with an algorithms course? Topics included divide-and-conquer, graph decompositions, 
                paths, greedy algorithms, dynamic programming, linear programming, and NP-complete problems. This paired with ds has equipped me with 
                the skills and confidence necessary to think through complex problems, and perform in technical interviews.
              </p>
              <hr/>
              <h2>Fall 2025</h2>
              <p>
                This semester was, as usual, 4 courses totalling 16 credits. 
                The courses were: Database Systems, Programming Languages, Software Analysis and Debugging, 
                and <a onClick={() => navigateTop("/projects/Submitty")}>Submitty</a> (RCOS). So far, good!
              </p>
              <h3>Key Course: Database Systems</h3>
              <p>
                This is one of the best courses I have ever taken.  Before this, I was knowledgeable with databases, having worked with them on 
                both <a onClick={() => navigateTop("/projects/speedroulette")}>Speed Roulette</a> and <a onClick={() => navigateTop("/projects/Submitty")}>Submitty</a>. Now, 
                I am proficient. The material included relational algebra, normal forms, ER diagrams, SQL, PGSQL, optimization, and more. 
                I received an A in the course, a testament to my newfound proficiency with the material. A special thank you to 
                Professor <a href="https://en.wikipedia.org/wiki/Sibel_Adal%C4%B1" target="_blank">Sibel Adali</a>. I wish she could teach all of my courses!
              </p>
              <hr/>
              <h2>Spring 2026</h2>
              <p>
                My final semester of college. I am taking Operating Systems, Software Design and Documentation, 
                Distributed Systems, and once again <a onClick={() => navigateTop("/projects/Submitty")}>Submitty</a>, but this time as the 
                project lead. It will be a busy semester, but I am super excited for all 4 of these courses, and the journey that lies beyond them!
              </p>
              <hr/>
              <h2>Reflection</h2>
              <p>
                RPI is awesome.
              </p>
              <div id="content-img-container">
                <img src={rpiFall} className="project-img"/>
                <p>
                  Especially in the fall.
                </p>
              </div>
            </div>
          </div>
          <ReadMoreBtn
            readMore={readMore}
            setReadMore={setReadMore}
          />
        </div>
        <NavButton
          right="IT Technician" rightNav="/experience/stewarts"
        />
      </div>
    </>
  );
}

export default Rensselaer;
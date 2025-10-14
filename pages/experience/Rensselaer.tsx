import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';
import useNavigateTop from "../../hooks/useNavigateTop";

import rpiFall from '../../assets/rpi-fall.png';

function Rensselaer() {
  const navigateTop = useNavigateTop();
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
              and the brotherhood I found at <a onClick={() => navigateTop("/experience/lambdachi")}>Lambda Chi Alpha</a> has made my tuition worth every penny. Below are recaps from each of my semesters.
            </p>
            <hr/>
            <h2>Fall 2024</h2>
            <p>
              Transferring from community college to RPI was a much larger change than I had anticipated. My first semester was 
              exciting, but stressful. I was finding my footing on campus, rushing a fraternity, and adjusting to the rigor that 
              defines the institution. I took 4 courses totalling 16 credits. They were: Physics I, Multivariable Calculus, Writing 
              for Technical Communication, and the most impactful of all:
            </p>
            <h3>Data Structures</h3>
            <p>
              This course is known for being among the most challenging in the entire CS curriculum. Featuring 10 homework assignments, 
              weekly labs, and 4 exams, it put any academic work I had done previously to shame. Despite the reputation, I approached 
              this course with excitement and confidence. I already had experience with the material from Hudson Valley, and I was finally going 
              to write large-scale coding projects for school!
            </p>
            <p>
              Reality hit by the second homework. I dug as deep as I could staying in the library until close every single night. Even then, I 
              still felt behind. <i>It was humbling</i>. With that said, pressure makes diamonds and I came out as a 10x better programmer than I was during that summer. 
              During the subsequent winter break, I examined a ~3,000 line project I created the year prior, and was able to refactor it down to ~1,000 lines without changing any 
              functionality!
            </p>
            <hr/>
            <h2>Spring 2025</h2>
            <p>
              With my “Welcome to RPI” semester behind me, I was ready for round two. Once again, I took on four courses totaling 16 
              credits: Linear Algebra, Introduction to Algorithms, Principles of Software (whose website I would later <a onClick={() => navigateTop("/projects/psoft")}>revamp</a>), and 
              the Rensselaer Center for Open Source, where I joined the <a onClick={() => navigateTop("/projects/Submitty")}>Submitty</a> project.
            </p>
            <h3>Key Course: Intro to Algorithms</h3>
            <p>
              What better way to follow up Data Structures than with an algorithms course? Topics included divide-and-conquer, graph decompositions, 
              paths, greedy algorithms, dynamic programming, linear programming, and NP-complete problems. This paired with ds has equipped me with 
              the skills and confidence necessary to think through complex problems, and perform in coding technical interviews.
            </p>
            <hr/>
            <h2>Fall 2025</h2>
            <p>
              The current semester. From now on, I have to take exclusively CS courses. This semester is, as usual, 4 courses totalling 16 credits. 
              The courses are: Database Systems, Programming Languages, Software Analysis and Debugging, and 
              <a onClick={() => navigateTop("/projects/Submitty")}>Submitty</a> (RCOS). So far, good!
            </p>
            <h3>Key Course: Database Systems</h3>
            <p>
              Before this course, I was knowledgeable with databases. Now, I am becoming proficient. I find the material to be engaging, while also 
              being practical. Few courses have material that I am confident I will apply in the real world, but this is certainly one of them.
            </p>
            <hr/>
            <h2>Spring 2026</h2>
            <p>
              My final semester of college. Courses I am interesting in taking here include Operating Systems, Software Design and Documentation, 
              Distributed Systems, and <a onClick={() => navigateTop("/projects/Submitty")}>Submitty</a> (RCOS). Stay tuned!
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
        <NavButton
          right="IT Technician" rightNav="/experience/stewarts"
        />
      </div>
    </>
  );
}

export default Rensselaer;
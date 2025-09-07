import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

function HudsonValley() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Hudson Valley Community College</h1>
        </div>
        <div id="text-body">
          <p>
            When I enrolled in community college, I entered the undecided program. Throughout 
            the next two years, I would discover my interest in programming, and lay a strong foundation 
            for my transfer to university.
        </p>
          <hr/>
          <h2>Freshman Year</h2>
          <p>
            The only interest I had that could be a valid study in college was building computers. Because of 
            this and the fact that my dad is a software engineer, I decided to take an introductory computer science 
            course. I enjoyed the hardware side of things, but struggled with the software since it was all brand 
            new to me. By the end of that semester, I switched my major from undecided to computer science and truly 
            began my journey. I still wasn’t sure which area of computer science I would focus on, but at least I had 
            found a direction.
          </p>
          <p>
            In my second semester, I took an introductory programming course in Python. The course was online, so 
            I negelcted the learning process, instead opting to take shortcuts to secure an A. 
            I still found the material interesting, and especially liked the idea that programming is a skill 
            you can continually build, like leveling up in a video game. Unfortunately, I didn’t do much 
            “leveling up” during this course.
          </p>
          <p>
            After my first two semesters, my 4.0 GPA was still intact, and I was fully committed to computer 
            science. Even so, I struggled with discipline, especially in online courses. The consequences 
            hadn’t caught up to me yet, but with sophomore year on the horizon, I knew they eventually would if 
            I didn't focus up.
          </p>
          <hr/>
          <h2>Sophomore Year</h2>
          <p>
            With all of the introductory courses out of the way, it was time to get to the good stuff. In my first semester, 
            the main courses on the radar was Calc 2, and Programming and Data Logic 2 (HVCC's version of data structures). It 
            wasn't a great start as I quickly realized there was no way I could pass Calc 2, and switched to Calc 1 despite already having credit 
            from high school. These two courses would ultimately the driving force that made me take school seriously.
          </p>
          <h3>Calculus 1</h3>
          <p>
            "I already took this in high school so its going to be a breeze, right?" Wrong. Very wrong. Here was the course's grade breakdown:
            <ul>
              <li><b>Exams:</b> 100%</li>
            </ul>
            If I wanted to succeed, I had to dig deep and have rock solid study habits.
          </p>
          <p>
            I received an 82 on the first exam, which wasn't a bad start. Unfortunately, the next few exams didn't go so well, dropping my average to 
            the low 70s heading into the final. I needed at least a C to receive credit for this course, so there was a lot of pressure heading into the final. 
            This was the last notification I received from the course:
          </p>
          <p>
            I failed. I had to take Calc 1 a third time. It was devastating. That is what I thought until I checked DegreeWorks. Since I already had 
            credit for the course and HVCC has a forgiving retake policy, my transcript took the old grade, rather than the new one. Somehow, I 
            still had a 4.0, and all of my struggles were in vain. Despite all this, I still learned a good amount, and promised myself that I would 
            never fall so far behind again, especially with Calc 2 next semester.
          </p>
          <h3>Programming and Data Logic 2</h3>
          <p>
            Another online course. The language was Java, and there was a vast amount of foundational programming concepts 
            covered here. 
          </p>
          <h3>The Final Semester</h3>
          <p>
            After making it through my third semester with the 4.0 still intact, it was time to finish strong. I was taking 20 credits, with the 
            key courses being Calc 2, Assembly Language, and Discrete Mathematics. I felt confident going in, but new I had my work cut out for me.
          </p>
          <hr/>
          <h2>Reflection</h2>
          <p>
            Hudson Valley Community College laid the foundation for my academic journey at RPI. Looking back, I 
            sometimes ponder how things might have turned out if I was at RPI from the very beginning. 
            Even so, given the chance, I wouldn’t change a thing. I saved a boatload of money, figured out my interests, 
            learned valuable lessons, and was able to work 30 hours per week the entire time.
          </p>
        </div>
        </div>
        <NavButton
          left="Price Chopper" leftNav="/experience/pricechopper"
          right="Streamer" rightNav="/experience/streamer"
        />
      </div>
    </>
  );
}

export default HudsonValley;
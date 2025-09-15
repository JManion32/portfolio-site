import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

import failingCalc from '../../assets/failing-calc-1.png';

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
            When I enrolled in community college, I was unsure of what to pursue. Throughout 
            the next two years, I would discover my interest in programming, and lay a strong foundation 
            for my transfer to university.
          </p>
          <hr/>
          <h2>Notable Courses</h2>
          <p>
            There were a handful of courses that shaped my journey at HVCC.
          </p>
          <h3>Intro CS Courses</h3>
          <p>
            Initially, I enrolled in the undecided program. One of my favorite hobbies at the time was building computers. Because of 
            this and the fact that my dad is a software engineer, I decided to take an introductory computer science 
            course. I found enjoyment in the hardware side of things, but struggled with the software since it was brand 
            new to me. By the end of that semester, I switched my major from undecided to computer science, marking 
            the true beginning of my journey. I still wasn’t sure which area I would focus on, but at least I had 
            found a direction.
          </p>
          <p>
            In my second semester, I took an introductory programming course in Python. This helped to narrow 
            down my field of interest: I wanted to write code. I just loved the idea that programming is a skill that is continually 
            developed, like leveling up in a video game. This along with many other courses I was taking were 
            completely online. While I enjoyed the material, I struggled to stay disciplined enough to maximize my learning. 
            Despite my lack of "leveling up", I was excited for what lied ahead, and determined to change my habits.
          </p>
          <h3>Programming & Data Logic II</h3>
          <p>
            Like Python Programming, this course was fully online. However, there would be no shortcuts, as the assignments were far more complex.
          </p>
          <p>
            The assignments were due on Mondays, and I struggled through them each weekend, staying 
            up late trying to understand what I was doing while making zero progress. It just wouldn’t click for me, but this was the price 
            I payed for not taking the prerequisite seriously. Thankfully, my Dad would spend hours working with me every Monday, 
            helping me through my assignments while making sure I understood them. I am beyond thankful for his efforts 
            during this time. If it wasn’t for him, I probably would have given up.
          </p>
          <p>
            After spending the first half of the semester submitting assignments on the day they were due and attempting to learn 
            what I should’ve already known, things started to click. The course covered a variety of core concepts each 
            week including data structures, generics, recursion, exception handling, inheritance, abstraction, encapsulation, 
            polymorphism, and more. These topics were cool and all, but my favorite by far was JavaFX. JavaFX is a toolkit 
            for Java that allows you to create GUIs. This was my first taste of front end development, and I absolutely loved it. By the 
            end of the course, I had finally developed the foundation of my coding skill set. It had taken 3 semesters, but I could finally solve 
            problems on my own with code, and that felt pretty awesome.
          </p>
          <h3>Calculus I & II</h3>
          <p>
            I entered HVCC with credit for Calculus I, but after failing a review quiz in Calculus II, I decided it was best 
            to retake Calculus I first. "I already took this in high school so its going to be a breeze, right?" Perhaps, but it was going 
            to take substantial effort. Here was the course's grade breakdown:
            <ul>
              <li><b>Exams:</b> 100%</li>
            </ul>
            If I wanted to succeed, I had to find the discipline I had been searching for.
          </p>
          <p>
            The semester’s struggles meant I needed a 70+ on the final. I walked in confident, armed with a double-sided 
            crib sheet crammed with everything I could think of. At first, I felt steady, cruising through the early 
            questions. But as the exam pressed on, my confidence slipped. I skipped one page, then another, until I 
            realized I could only answer about half. Before I left the room, I knew I had come up short, and sure enough, I ended with a 68,
            which was a D in the course.
          </p>
          <p>
            It was official. I had failed. The 4.0 was no more. I went to DegreeWorks to see the damage, only to make a shocking revelation. 
            Since I already had credit for the course, the transcript just took the better score. All of my struggles were in vain, 
            or were they? I had still learned 68% of the material, and received the reality check that I so desparately needed. 
            This result floored me so hard, I ended up receiving a B in Calculus II the following semester.
          </p>
          <h3>Honorable Mentions</h3>
          <ul>
            <li><b>Discrete Mathematics:</b> Covered a variety of interesting topics that prepared me for RPI's Intro to Algorithms course</li>
            <li><b>Assembly Language:</b> One of the few in-person CS courses I took at HVCC. It was fun, and a great intro to low-level programming.</li>
            <li><b>History of Media and Culture in the US:</b> I took this course in my freshman fall. It had nothing to do with CS, but it remains as one of the best courses I have ever taken.</li>
            <li><b>Biology:</b> To earn my Associate’s at HVCC, I had to take Biology I and II. Sure, I struggled to figure ou how dissecting rats and memorizing flower anatomy had anything to do with CS, but it was fun.</li>
          </ul>
          <hr/>
          <h2>Reflection</h2>
          <p>
            Hudson Valley Community College played a crucial role in laying the foundation for my academic journey at RPI. 
            During my first year, I explored my interests, moving from an undecided high schooler to a computer science 
            student with aspirations in software development. In my second year, I strengthened my study 
            habits, developed academic discipline, and leveled up my skills. As great as my time at RPI has been, I wouldn’t change a thing 
            about my experience at HVCC; it was exactly where I needed to be to grow both academically and personally. 
            Go Vikings!
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
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
            When I enrolled in community college, I entered the undecided program. Throughout 
            the next two years, I would discover my interest in programming, and lay a strong foundation 
            for my transfer to university.
        </p>
          <hr/>
          <h2>Freshman Year</h2>
          <p>
            One of my favorite hobbies at the time was building computers. Because of 
            this and the fact that my dad is a software engineer, I decided to take an introductory computer science 
            course. I found enjoyment in the hardware side of things, but struggled with the software since it was brand 
            new to me. By the end of that semester, I switched my major from undecided to computer science and truly 
            began my journey. I still wasn’t sure which area I would focus on, but at least I had 
            found a direction.
          </p>
          <p>
            In my second semester, I took an introductory programming course in Python. I enjoyed learning the basic concepts, 
            and completing assignments was rewarding. Because it was fully online, I struggled to stay engaged with the 
            material and often relied on shortcuts to secure an A. Even so, I was able to narrow down my field of 
            interest: I wanted to write code. I just loved the idea that programming is a skill that can be continually 
            developed, much like leveling up in a video game. While I didn’t do much “leveling up” in this course, 
            I was eager for what lay ahead.
          </p>
          <p>
            After my first two semesters, my 4.0 was still intact, and I was fully committed to computer 
            science. Even so, I struggled with discipline, especially in online courses. The consequences 
            hadn’t caught up to me yet, but with sophomore year on the horizon, I knew it was inevitable if 
            I didn't focus up.
          </p>
          <hr/>
          <h2>Sophomore Fall</h2>
          <p>
            With the introductory courses behind me, it was time to move on to the more challenging material. 
            The main courses on my radar for this fall were Calculus II and Programming and Data 
            Logic II (HVCC’s version of data structures). That plan quickly changed when I realized I wasn’t 
            ready for Calculus II and switched to Calculus I, despite already having credit from high school. 
          </p>
          <h3>Programming and Data Logic 2</h3>
          <p>
            Seventy percent of Programming and Logic was our weekly projects, and they were challenging. Everything built off 
            of the course I had taken previously, yet nothing seemed to make sense. It was frustrating. 
            Why hadn't I taken this seriously before? What was I thinking? I had been foolish, but 
            there was no time to dwell. The assignments were due on Mondays, and I struggled through them each weekend, staying 
            up late and trying to understand what I was doing while making zero progress. It just wouldn’t click for me, but this was the price 
            I payed for not taking the introductory course seriously. If I wanted this to be my career, being lazy was no longer an option. Thankfully my 
            Dad would spend hours working with me every Monday, helping me through my assignments while making sure I 
            understood them. I am beyond thankful for his efforts during this time. If it wasn’t for him, I probably would have given up.
          </p>
          <p>
            After spending the first half of the semester handing in assignments on the day they were due and attempting to learn 
            what I should’ve already known, things started to click. New topics were becoming easier to grasp 
            and I was no longer depending on my Dad to help me with the work. The course covered loads of core concepts each 
            week including data structures, generics, recursion, exception handling, inheritance, abstraction, encapsulation, 
            polymorphism, and more. These topics were cool and all, but my favorite by far was JavaFX. JavaFX is a toolkit 
            for Java that allows you to create a Graphical User Interface. This was my first taste of front end development, but definitely not the last. By the 
            end of the course, I had finally developed the foundation of my coding skill set. It had taken 3 semesters, but I could finally solve 
            problems on my own with code, and that felt pretty awesome. 
          </p>
          <h3>Calculus I</h3>
          <p>
            "I already took this in high school so its going to be a breeze, right?" Perhaps, but it was going 
            to take substantial effort. Here was the course's grade breakdown:
            <ul>
              <li><b>Exams:</b> 100%</li>
            </ul>
            If I wanted to succeed, I had to find the discipline I had been searching for.
          </p>
          <p>
            I received an 82 on the first exam, which wasn't a bad start. Unfortunately, the next few exams didn't go so well, dropping my average to 
            the low 70s heading into the final. I needed at least a C to receive credit for this course, so the pressure was on. 
          </p>
          <p>
            I walked into the final exam confident and composed, armed with a massive double-sided crib sheet packed with nearly every topic 
            I could think of. Even if I didn’t know the material, I had it written down. At first, things went smoothly; I still had a solid 
            grasp of the exam one concepts. But as I moved deeper into the packet, my confidence began to fade. I skipped one page, then another, 
            until I realized I could only answer about half the exam. By the end, I had lost all confidence. I had come up short, and I knew it.
          </p>
          <p>
            This was my exact issue with school. I spend an entire day making a crib sheet, rather than actually studying. It was the easy way out. 
            Looking back, I'm glad that the consequences caught up with me here.
          </p>
          <p>
            It was a true reality check. In the following week, 
            I received the dreaded confirmation:
          </p>
          <div id="content-img-container">
            <img src={failingCalc}/>
          </div>
          <p>
            It was official. I had failed. The 4.0 was no more. I went to DegreeWorks to see the damage, only to make a shocking revelation. 
            Since I already had credit for the course, the transcript just took the better score. All of my struggles were in vain, 
            or were they? I had still learned 68% of the material, and received the reality check that I so desparately needed. 
            With a clean slate, it was now up to me to conquer the looming 20 credit spring semester that included Calculus II.
          </p>
          <hr/>
          <h2>The Final Semester</h2>
          <p>
            It was time to finish strong. I was taking 20 credits, with key courses including Calculus II, Assembly Language, 
            and Discrete Mathematics. I wouldn't describe myself as confident going in, I was just invigorated by the chance to prove 
            that I could rise to the challenge.
          </p>
          <p>
          </p>
          <h3>Calculus II</h3>
          <p>
            It is said that this course is the hardest of the calcs, and throughout this semester, I learned why. On the first day, 
            my professor said that students usually get one letter grade lower in Calc 2 than calc 1 which, in my case, was an F. 
            That was a little scary to hear, but there was no more safetly nets, I just had to do it. When the dust settled, 
            I had just barely scraped a B, a result that I was beyond content with.
          </p>
          <h3>The Rest</h3>
          <p>
            This was also my first semester where most of my classes were held in person, and I found myself enjoying the experience. 
            Discrete Mathematics and Assembly Language stood out in particular, both of which gave me valuable preparation for RPI. 
            I also made friends who would eventually transfer alongside me, making the transition even smoother. 
            Altogether, it was a great semester, and I wrapped up community college with a 3.94 GPA.
          </p>
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
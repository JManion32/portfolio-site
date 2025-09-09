import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

import useNavigateTop from "../../hooks/useNavigateTop";
import failingCalc from '../../assets/failing-calc-1.png';

function HudsonValley() {
  const navigateTop = useNavigateTop();
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
            In my second semester, I took an introductory programming course in Python. I enjoyed 
            learning the basic concepts, and completing assignments was rewarding. I was especially 
            drawn to the idea that programming is a skill that can be continually developed, much 
            like leveling up in a video game. Unfortunately, I did not do much "leveling up" during this 
            course. Because it was fully online, I struggled to learn the material, instead taking 
            shortcuts to secure an A.
          </p>
          <p>
            After my first two semesters, my 4.0 was still intact, and I was fully committed to computer 
            science. Even so, I struggled with discipline, especially in online courses. The consequences 
            hadn’t caught up to me yet, but with sophomore year on the horizon, I knew it was inevitable if 
            I didn't focus up.
          </p>
          <hr/>
          <h2>Sophomore Year</h2>
          <p>
            With the introductory courses behind me, it was time to move on to the more challenging material. 
            In my first semester, the main courses on my schedule were Calculus II and Programming and Data 
            Logic II (HVCC’s version of data structures). That plan quickly changed when I realized I wasn’t 
            ready for Calculus II and switched to Calculus I, despite already having credit from high school. 
          </p>
          <h3>Programming and Data Logic 2</h3>
          <p>
            Another online course. The language was Java, and there was a vast amount of foundational programming concepts 
            covered here. With only a limited understanding of Python, this was going to be a challenge. I started with the only 
            study habit I knew: scribing seven 60+ page slide decks into my notebook. I never looked at those notes again.
          </p>
          <p>
            Seventy percent of Programming and Logic was our weekly projects, and they were not easy. This course built off of the 
            fundamentals that Python Programming established (you know, the course I didn’t learn much from) and so the projects 
            were more challenging. Nothing made any sense, and now that I was actually committed to learning, it was frustrating. 
            Why hadn't I taken this seriously before? What was I thinking? These were good questions. I had been foolish, but 
            there was no time to dwell. The assignments were due on Mondays, and I struggled through them each weekend, staying 
            up late and trying to understand what I was doing while making zero progress. It just wouldn’t click for me, but I 
            knew I had to push through it. I wanted this to be my career, being lazy was no longer an option. Thankfully my 
            Dad would spend hours working with me every Monday helping me through my assignments while making sure that I 
            understood them. I am beyond thankful for his efforts during this time. If it wasn’t for him, I probably would have given up.
          </p>
          <p>
            After spending the first half of the semester handing in assignments on the day they were due and attempting to learn 
            what I should’ve already known, things were actually starting to click. New topics were becoming easier to grasp 
            and I was no longer depending on my Dad to help me with the work. The course covered loads of core concepts each 
            week including data structures, generics, recursion, exception handling, inheritance, abstraction, encapsulation, 
            polymorphism, and more. These topics were cool and all, but my favorite by far was JavaFX. JavaFX is a toolkit 
            for Java that allows you to create a Graphical User Interface, also known as a GUI. We learned the basics of creating 
            user interfaces such as grids, buttons, and textfields, as well as how to utilize CSS to make it look pretty. When 
            I streamed on Twitch, I would spend hours fine tuning my overlays to exactly how I wanted them. I found it so cool 
            to be able to do this with a computer application where I could not just move things around and resize them, but 
            also create the functionality. This was my first taste of front end development, but definitely not the last. By the 
            end of the course, I had finally developed a coding skill set. It had only taken 3 semesters, but I could now solve 
            problems on my own with code, and that felt pretty awesome. 
          </p>
          <h3>Calculus 1</h3>
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
            I went into the final exam room confident, and composed. I had a massive double sided crib sheet with just about every 
            topic I could possibly need on it. I started off strong, still having a solid grasp on the exam 1 concepts. This 
            confidence dwindled as I dove further into the packet. I skipped a page, only to skip the next one, and so on until 
            I realized that I was only able to do half of the packet. By the end, I had lost all confidence. I had come up short, and I knew it.
          </p>
          <p>
            I failed, and would have to take Calc 1 for a third time. I was devastated. My drive home was quiet. I had 
            nobody to blame but myself for this lack of preparation. It was a true reality check. In the following week, 
            I received the dreaded notification:
          </p>
          <div id="content-img-container">
            <img src={failingCalc}/>
          </div>
          <p>
            It was official. I had failed. The 4.0 was no more. I went to DegreeWorks to see the damage, only to make a shocking revelation. 
            Since I already had credit for the course, the transcript just took the better score. All of my struggles were in vain, 
            or were they? I had still learned 68% of the material, and received the reality check that I so desparately needed. 
            It was now up to me to conquer the looming 20 credit spring semester that included Calc 2.
          </p>
          <h3>The Final Semester</h3>
          <p>
            It was time to finish strong. I was taking 20 credits, with key courses including Calculus II, Assembly Language, 
            and Discrete Mathematics. I wouldn't describe myself as confident going in, I was just envigorated by the chance to prove to myself 
            that I could rise to the challenge.
          </p>
          <hr/>
          <h2>Reflection</h2>
          <p>
            Hudson Valley Community College laid the foundation for my academic journey at RPI. Looking back, I sometimes 
            wonder how things might have turned out if I had attended RPI from the very beginning. While the outcome could 
            have been better or worse, I wouldn’t change a thing. During my time there, I saved a significant amount of 
            money, discovered my interests, gained valuable lessons, and worked 20–30 hours per week 
            at <a onClick={() => navigateTop("/experience/pricechopper")}>Price Chopper</a>. In the end, 
            HVCC was exactly where I needed to be to grow both academically and personally. Go Vikings!
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
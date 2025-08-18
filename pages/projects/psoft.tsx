import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

function PSoft() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <h1 className="page-header">Course Website</h1>
          <div id="text-body">
            <p>
              Principles of Software is a core computer science class at RPI, typically taken by students in their sophomore year.
              The course covers core software engineering practices, focusing on requirements, design, implementation, testing, and maintenance. 
              While the course had a lot to offer, its website was lackluster at best. I met with the professor, and got the gig to revamp it 
              during the summer of 2025.
            </p>
          </div>
        </div>
        <NavButton
          left="Submitty" leftNav="/projects/submitty"
          right="Portfolio Site" rightNav="/projects/portfolio"
        />
      </div>
    </>
  );
}

export default PSoft;
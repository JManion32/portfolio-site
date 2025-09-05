import Breadcrumbs from "../components/Breadcrumb";

function Resume() {
  return (
    <div className="page">
      <div className="content resume-content">
        <div className="resume-breadcrumb-container">
          <Breadcrumbs />
        </div>

        <iframe
          className="resume-frame"
          src="/resume.pdf#page=1&zoom=100"
          title="Resume"
        />
        <noscript>
          <p>
            View the resume: <a href="/resume.pdf">Open PDF</a>
          </p>
        </noscript>
      </div>
    </div>
  );
}

export default Resume;

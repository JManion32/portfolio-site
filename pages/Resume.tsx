function Resume() {
  return (
    <div className="page">
      <div className="content resume-content">
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

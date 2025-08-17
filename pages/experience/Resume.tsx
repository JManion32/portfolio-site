import Breadcrumbs from "../../components/Breadcrumb";
import ResumeInteractive from "../../components/ResumeInteractive";

function Rensselaer() {
  return (
    <div className="page">
      <div className="content">
        <div className="resume-breadcrumb-container">
          <Breadcrumbs />
        </div>
        <ResumeInteractive />
      </div>
    </div>
  );
}

export default Rensselaer;

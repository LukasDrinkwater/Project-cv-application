import { CVPersonal } from "./cv-personal";
import { CVEducation } from "./cv-Education";
import { CVExperience } from "./cvExperience";

function CVPreview({ personalData, educationData, experienceData }) {
  return (
    <div className="CVPreviewContainer">
      <CVPersonal personalData={personalData} />
      <div className="educationH2Container">
        <h2>Education</h2>
      </div>
      <CVEducation educationData={educationData} />
      <div className="experienceH2Container">
        <h2>Professional Experience</h2>
      </div>
      <CVExperience experienceData={experienceData} />
    </div>
  );
}

export { CVPreview };

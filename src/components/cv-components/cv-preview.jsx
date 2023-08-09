import { CVPersonal } from "./cv-personal";
import { CVEducation } from "./cv-Education";
import { CVExperience } from "./cvExperience";

function CVPreview({ personalData, educationData, experienceData }) {
  return (
    <div className="CVPreviewContainer">
      <CVPersonal personalData={personalData} />
      <CVEducation educationData={educationData} />
      <CVExperience experienceData={experienceData} />
    </div>
  );
}

export { CVPreview };

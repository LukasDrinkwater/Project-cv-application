import { CVPersonal } from "./cv-personal";
import { CVEducation } from "./cv-Education";

function CVPreview({ personalData, educationData, experienceData }) {
  return (
    <div className="CVPreviewContainer">
      <CVPersonal personalData={personalData} />
      <CVEducation educationData={educationData} />
    </div>
  );
}

export { CVPreview };

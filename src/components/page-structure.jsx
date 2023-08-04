import { PersonalDetailsBox } from "./sidebar/sidebar-personal-details";
import { EducationBox } from "./sidebar/sidebar-education";
import { ExperienceBox } from "./sidebar/sidebar-experience";
import { SubmitForm } from "./sidebar/submit-form";

// component that creates the sidebar structure and calls the personal details,
// education and experience components.
function Sidebar({
  personalData,
  setPersonalData,
  educationData,
  setEducationData,
  experienceData,
  setExperienceData,
}) {
  return (
    <div className="sidebarContainer">
      <PersonalDetailsBox data={personalData} setData={setPersonalData} />
      <EducationBox data={educationData} setData={setEducationData} />
      <ExperienceBox data={experienceData} setData={setExperienceData} />
      <SubmitForm />
    </div>
  );
}

export { Sidebar };

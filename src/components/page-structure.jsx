import { PersonalDetailsBox } from "./sidebar/sidebar-personal-details";
import { EducationBox } from "./sidebar/sidebar-education";
import { ExperienceBox } from "./sidebar/sidebar-experience";
import { SubmitForm } from "./sidebar/submit-form";
// component that creates the sidebar structure and calls the personal details,
// education and experience components.
function Sidebar() {
  return (
    <div className="sidebarContainer">
      <PersonalDetailsBox />
      {/* <EducationBox /> */}
      {/* <ExperienceBox /> */}
      <SubmitForm />
    </div>
    // call personal details component

    // call education component

    // call experience component
  );
}

export { Sidebar };

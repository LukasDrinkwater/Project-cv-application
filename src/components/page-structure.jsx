import { PersonalDetailsBox } from "./sidebar-personal-details";
import { EducationBox } from "./sidebar-education";
import { ExperienceBox } from "./sidebar-experience";

// component that creates the sidebar structure and calls the personal details,
// education and experience components.
function Sidebar() {
  return (
    <div className="sidebarContainer">
      <PersonalDetailsBox />
      <EducationBox />
      <ExperienceBox />
    </div>
    // call personal details component

    // call education component

    // call experience component
  );
}

export { Sidebar };

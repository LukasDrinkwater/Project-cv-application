import { PersonalDetailsBox } from "./sidebar-personal-details";

// component that creates the sidebar structure and calls the personal details,
// education and experience components.
function Sidebar() {
  return (
    <div className="personalDetailsContainer">
      <PersonalDetailsBox></PersonalDetailsBox>
    </div>
    // call personal details component

    // call education component

    // call experience component
  );
}

export { Sidebar };

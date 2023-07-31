import { PersonalDetailsBox } from "./sidebar/sidebar-personal-details";
import { EducationBox } from "./sidebar/sidebar-education";
import { ExperienceBox } from "./sidebar/sidebar-experience";
import { SubmitForm } from "./sidebar/submit-form";
import { useState } from "react";

// component that creates the sidebar structure and calls the personal details,
// education and experience components.
function Sidebar() {
  const [fullNameValue, setFullName] = useState("");

  return (
    <div className="sidebarContainer">
      <PersonalDetailsBox
        fullNameValue={fullNameValue}
        setFullName={setFullName}
      />
      {/* <EducationBox /> */}
      {/* <ExperienceBox /> */}
      <SubmitForm />
    </div>
  );
}

export { Sidebar };

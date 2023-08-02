import { PersonalDetailsBox } from "./sidebar/sidebar-personal-details";
import { EducationBox } from "./sidebar/sidebar-education";
import { ExperienceBox } from "./sidebar/sidebar-experience";
import { SubmitForm } from "./sidebar/submit-form";
import { useState } from "react";
import { v4 as uuid } from "uuid";

// component that creates the sidebar structure and calls the personal details,
// education and experience components.
function Sidebar() {
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const [expereinceData, setExperienceData] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    experience: [{ id: uuid(), text: "" }],
  });

  return (
    <div className="sidebarContainer">
      <PersonalDetailsBox data={personalData} setData={setPersonalData} />
      <EducationBox data={educationData} setData={setEducationData} />
      <ExperienceBox data={expereinceData} setData={setExperienceData} />
      <SubmitForm />
    </div>
  );
}

export { Sidebar };

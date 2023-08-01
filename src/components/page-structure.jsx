import { PersonalDetailsBox } from "./sidebar/sidebar-personal-details";
import { EducationBox } from "./sidebar/sidebar-education";
import { ExperienceBox } from "./sidebar/sidebar-experience";
import { SubmitForm } from "./sidebar/submit-form";
import { useState } from "react";
import { v4 as uuid } from "uuid";

// component that creates the sidebar structure and calls the personal details,
// education and experience components.
function Sidebar() {
  // PersonalDetailsBox
  const [fullNameValue, setFullName] = useState("");
  const [emailValue, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  // EducationBox
  const [schoolValue, setSchool] = useState("");
  const [degreeValue, setDegree] = useState("");
  const [startDateValueEducation, setStartDateEducation] = useState("");
  const [endDateValueEducation, setEndDateEducation] = useState("");

  // ExperienceBox
  const [companyValue, setCompany] = useState("");
  const [positionValue, setPosition] = useState("");
  const [startDateValueExperience, setStartDateExperience] = useState("");
  const [endDateValueExperience, setEndDateExperience] = useState("");
  const [locationValue, setLocation] = useState("");
  const [lines, setLines] = useState([{ id: uuid(), text: "" }]);

  return (
    <div className="sidebarContainer">
      <PersonalDetailsBox
        fullNameValue={fullNameValue}
        setFullName={setFullName}
        emailValue={emailValue}
        setEmail={setEmail}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        address={address}
        setAddress={setAddress}
      />
      <EducationBox
        schoolValue={schoolValue}
        setSchool={setSchool}
        degreeValue={degreeValue}
        setDegree={setDegree}
        startDateValueEducation={startDateValueEducation}
        setStartDateEducation={setStartDateEducation}
        endDateValueEducation={endDateValueEducation}
        setEndDateEducation={setEndDateEducation}
      />
      <ExperienceBox
        companyValue={companyValue}
        setCompany={setCompany}
        positionValue={positionValue}
        setPosition={setPosition}
        startDateValueExperience={startDateValueExperience}
        setStartDateExperience={setStartDateExperience}
        endDateValueExperience={endDateValueExperience}
        setEndDateExperience={setEndDateExperience}
        locationValue={locationValue}
        setLocation={setLocation}
        lines={lines}
        setLines={setLines}
      />
      <SubmitForm />
    </div>
  );
}

export { Sidebar };

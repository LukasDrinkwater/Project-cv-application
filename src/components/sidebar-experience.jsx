import { useState } from "react";

function ExperienceBox() {
  // const experienceList =

  return (
    <div className="experienceContainer">
      <h2>Experience</h2>
      <CompanyInput />
      <PositionInput />
      <StartDateExperienceInput />
      <EndDateExperienceInput />
      <ExperienceLocationInput />
      <div className="experienceList">{}</div>
    </div>
  );
}

function CompanyInput() {
  const [companyValue, setCompany] = useState("");

  return (
    <div className="experienceInputContainer">
      <input
        type="text"
        value={companyValue}
        placeholder="Company Name"
        onChange={(event) => setCompany(event.target.value)}
      />
    </div>
  );
}

function PositionInput() {
  const [positionValue, setPosition] = useState("");

  return (
    <div className="positionInputContainer">
      <input
        type="text"
        value={positionValue}
        placeholder="Position"
        onChange={(event) => setPosition(event.target.value)}
      />
    </div>
  );
}

function StartDateExperienceInput() {
  const [startDateValue, setStartDate] = useState("");

  return (
    <div className="startDateInputContainer">
      <p>Start Date</p>
      <input
        type="text"
        value={startDateValue}
        placeholder="Start Date"
        onChange={(event) => setStartDate(event.target.value)}
      />
    </div>
  );
}

function EndDateExperienceInput() {
  const [endDateValue, setEndDate] = useState("");

  return (
    <div className="endDateInputContainer">
      <p>End Date</p>
      <input
        type="text"
        value={endDateValue}
        placeholder="End Date"
        onChange={(event) => setEndDate(event.target.value)}
      />
    </div>
  );
}

function ExperienceLocationInput() {
  const [locationValue, setLocation] = useState("");

  return (
    <div className="experienceLocationContainer">
      <p>Location</p>
      <input
        type="text"
        value={locationValue}
        placeholder="Location"
        onChange={(event) => setLocation(event.target.value)}
      />
    </div>
  );
}

function ExperienceDescriptionLine(props) {
  const [descriptionLineValue, setDescriptionLine] = useState(
    "Description/Responsibility"
  );

  return <li value={descriptionLineValue} />;
}

function AddExperienceButton() {
  <div className="addExperienceButtonContainer">
    <button>Add Experience</button>
  </div>;
}

export { ExperienceBox };

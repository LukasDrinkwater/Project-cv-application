import { useState } from "react";
import { v4 as uuid } from "uuid";

function ExperienceBox(props) {
  const companyValue = props.companyValue;
  const setCompany = props.setCompany;

  const positionValue = props.positionValue;
  const setPosition = props.setPosition;

  const startDateValueExperience = props.startDateValueExperience;
  const setStartDateExperience = props.setStartDateExperience;

  const endDateValueExperience = props.endDateValueExperience;
  const setEndDateExperience = props.setEndDateExperience;

  const locationValue = props.locationValue;
  const setLocation = props.setLocation;

  const lines = props.lines;
  const setLines = props.setLines;
  return (
    <div className="experienceContainer">
      <h2>Professional Experience</h2>
      <form>
        <CompanyInput companyValue={companyValue} setCompany={setCompany} />
        <PositionInput
          positionValue={positionValue}
          setPosition={setPosition}
        />
        <StartDateExperienceInput
          startDateValueExperience={startDateValueExperience}
          setStartDateExperience={setStartDateExperience}
        />
        <EndDateExperienceInput
          endDateValueExperience={endDateValueExperience}
          setEndDateExperience={setEndDateExperience}
        />
        <ExperienceLocationInput
          locationValue={locationValue}
          setLocation={setLocation}
        />
        <ExperienceDescription lines={lines} setLines={setLines} />
      </form>
    </div>
  );
}

function CompanyInput(props) {
  // const [companyValue, setCompany] = useState("");
  const companyValue = props.companyValue;
  const setCompany = props.setCompany;

  return (
    <div className="experienceInputContainer">
      <label>Company Name</label>
      <input
        type="text"
        value={companyValue}
        placeholder="Company Name"
        onChange={(event) => setCompany(event.target.value)}
      />
    </div>
  );
}

function PositionInput(props) {
  // const [positionValue, setPosition] = useState("");
  const positionValue = props.positionValue;
  const setPosition = props.setPosition;
  return (
    <div className="positionInputContainer">
      <label>Position</label>
      <input
        type="text"
        value={positionValue}
        placeholder="Position"
        onChange={(event) => setPosition(event.target.value)}
      />
    </div>
  );
}

function StartDateExperienceInput(props) {
  // const [startDateValueExperience, setStartDateExperience] = useState("");

  const startDateValueExperience = props.startDateValueExperience;
  const setStartDateExperience = props.setStartDateExperience;

  return (
    <div className="startDateInputContainer">
      <label>Start Date</label>
      <input
        type="text"
        value={startDateValueExperience}
        placeholder="Start Date"
        onChange={(event) => setStartDateExperience(event.target.value)}
      />
    </div>
  );
}

function EndDateExperienceInput(props) {
  // const [endDateValueExperience, setEndDateExperience] = useState("");
  const endDateValueExperience = props.endDateValueExperience;
  const setEndDateExperience = props.setEndDateExperience;

  return (
    <div className="endDateInputContainer">
      <label>End Date</label>
      <input
        type="text"
        value={endDateValueExperience}
        placeholder="End Date"
        onChange={(event) => setEndDateExperience(event.target.value)}
      />
    </div>
  );
}

function ExperienceLocationInput(props) {
  // const [locationValue, setLocation] = useState("");
  const locationValue = props.locationValue;
  const setLocation = props.setLocation;

  return (
    <div className="experienceLocationContainer">
      <label>Location</label>
      <input
        type="text"
        value={locationValue}
        placeholder="Location"
        onChange={(event) => setLocation(event.target.value)}
      />
    </div>
  );
}

// Component that is the contaner for the expereince list
function ExperienceDescription(props) {
  // const [lines, setLines] = useState([{ id: uuid(), text: "" }]);
  const lines = props.lines;
  const setLines = props.setLines;

  const handleDelete = (id) => {
    const newLines = lines.filter((line) => line.id !== id);
    setLines(newLines);
  };

  const handleAddLine = () => {
    let newLine = { id: uuid(), text: "" };
    setLines([...lines, newLine]);
    console.log("add");
  };

  const handleChange = (line, e) => {
    // console.log(line.id);
    const arrayIndex = lines.findIndex((listLine) => listLine.id === line.id);
    const newLines = lines.slice();
    newLines[arrayIndex].text = e.target.value;
    setLines(newLines);
  };

  return (
    <div className="experienceLinesContainer">
      <label>Tasks/Responsibilities</label>
      <ExperienceLines
        lines={lines}
        handleDelete={handleDelete}
        handleChange={handleChange}
      />
      <button
        type="button"
        onSubmit={(event) => event.preventDefault}
        onClick={() => handleAddLine()}
      >
        Add
      </button>
    </div>
  );
}

// Component that creates the experience lines
function ExperienceLines(props) {
  const lines = props.lines;
  const handleDelete = props.handleDelete;
  const handleChange = props.handleChange;

  return (
    <div className="experienceLists">
      {lines.map((line) => (
        <div className="experienceLine" key={line.id}>
          <textarea
            value={line.text}
            placeholder={"Description/Responsibility"}
            onChange={(event) => handleChange(line, event)}
          ></textarea>
          <button onClick={() => handleDelete(line.id)}>X</button>
        </div>
      ))}
    </div>
  );
}

export { ExperienceBox };

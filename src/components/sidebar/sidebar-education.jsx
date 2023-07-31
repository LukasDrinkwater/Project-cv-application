import { useState } from "react";

function EducationBox() {
  return (
    <div className="educationBoxContainer">
      <h2>Education</h2>
      <form>
        <SchoolInput />
        <DegreeInput />
        <StartDateInput />
        <EndDateInput />
      </form>
    </div>
  );
}

function SchoolInput() {
  const [schoolValue, setSchool] = useState("");

  return (
    <div className="schoolInputContainer">
      <label>School</label>
      <input
        type="text"
        value={schoolValue}
        placeholder="School/University"
        onChange={(event) => setSchool(event.target.value)}
      />
    </div>
  );
}

function DegreeInput() {
  const [degreeValue, setDegree] = useState("");

  return (
    <div className="degreeInputContainer">
      <label>Degree/Course</label>
      <input
        type="text"
        value={degreeValue}
        placeholder="Degree/Field of Study"
        onChange={(event) => setDegree(event.target.value)}
      />
    </div>
  );
}

function StartDateInput() {
  const [startDateValue, setStartDate] = useState("");

  return (
    <div className="startDateInputContainer">
      <label>Start Date</label>
      <input
        type="text"
        value={startDateValue}
        placeholder="Start Date"
        onChange={(event) => setStartDate(event.target.value)}
      />
    </div>
  );
}

function EndDateInput() {
  const [endDateValue, setEndDate] = useState("");

  return (
    <div className="endDateInputContainer">
      <label>End Date</label>
      <input
        type="text"
        value={endDateValue}
        placeholder="End Date"
        onChange={(event) => setEndDate(event.target.value)}
      />
    </div>
  );
}

function OptionsContainer() {
  // const [ ]

  return (
    <div className="educationOptionsContainer">
      <button className="deleteButton">Delete</button>
      <button className="cancelButton">Cancel</button>
      <button className="saveButton">Save</button>
      <button className="educationCourseSwitchButton"></button>
    </div>
  );
}

export { EducationBox };

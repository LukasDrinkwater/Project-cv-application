import { useState } from "react";

function EducationBox(props) {
  const schoolValue = props.schoolValue;
  const setSchool = props.setSchool;

  const degreeValue = props.degreeValue;
  const setDegree = props.setDegree;

  const startDateValueEducation = props.startDateValueEducation;
  const setStartDateEducation = props.setStartDateEducation;

  const endDateValue = props.endDateValue;
  const setEndDate = props.setEndDate;
  return (
    <div className="educationBoxContainer">
      <h2>Education</h2>
      <form>
        <SchoolInput schoolValue={schoolValue} setSchool={setSchool} />
        <DegreeInput degreeValue={degreeValue} setDegree={setDegree} />
        <StartDateInput
          startDateValueEducation={startDateValueEducation}
          setStartDateEducation={setStartDateEducation}
        />
        <EndDateInput endDateValue={endDateValue} setEndDate={setEndDate} />
      </form>
    </div>
  );
}

function SchoolInput(props) {
  // const [schoolValue, setSchool] = useState("");
  const schoolValue = props.schoolValue;
  const setSchool = props.setSchool;

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

function DegreeInput(props) {
  // const [degreeValue, setDegree] = useState("");
  const degreeValue = props.degreeValue;
  const setDegree = props.setDegree;

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

function StartDateInput(props) {
  // const [startDateValue, setStartDate] = useState("");
  const startDateValueEducation = props.startDateValueEducation;
  const setStartDateEducation = props.setStartDateEducation;

  return (
    <div className="startDateInputContainer">
      <label>Start Date</label>
      <input
        type="text"
        value={startDateValueEducation}
        placeholder="Start Date"
        onChange={(event) => setStartDateEducation(event.target.value)}
      />
    </div>
  );
}

function EndDateInput(props) {
  // const [endDateValue, setEndDate] = useState("");
  const endDateValue = props.endDateValue;
  const setEndDate = props.setEndDate;

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

// function OptionsContainer() {
//   // const [ ]

//   return (
//     <div className="educationOptionsContainer">
//       <button className="deleteButton">Delete</button>
//       <button className="cancelButton">Cancel</button>
//       <button className="saveButton">Save</button>
//       <button className="educationCourseSwitchButton"></button>
//     </div>
//   );
// }

export { EducationBox };

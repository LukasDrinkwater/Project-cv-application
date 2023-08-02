import { useState } from "react";
import { LineInputText } from "./LineInputText";

function EducationBox({ data, setData }) {
  const updateData = (propToUpdate, value) => {
    // prevData is a variable you can access when running an arrow
    // function when calling a set function.
    setData((prevData) => ({
      ...prevData,
      [propToUpdate]: value,
    }));
  };

  return (
    <div className="educationBoxContainer">
      <h2>Education</h2>
      <form>
        <LineInputText
          label={"School"}
          placeholder={"School/University"}
          className={"schoolInputContainer"}
          forProp={"school"}
          value={data.school}
          handleSetFullName={updateData}
        />
        <LineInputText
          label={"Degree"}
          placeholder={"Degree/Field of Study"}
          className={"degreeInputContainer"}
          forProp={"degree"}
          value={data.degree}
          handleSetFullName={updateData}
        />
        <LineInputText
          label={"Start Date"}
          placeholder={"Start Date"}
          className={"startDateInputContainer"}
          forProp={"startDate"}
          value={data.startDate}
          handleSetFullName={updateData}
        />
        <LineInputText
          label={"End Date"}
          placeholder={"End Date"}
          className={"endDateInputContainer"}
          forProp={"endDate"}
          value={data.endDate}
          handleSetFullName={updateData}
        />
      </form>
    </div>
  );
}

export { EducationBox };

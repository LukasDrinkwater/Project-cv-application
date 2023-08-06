import { v4 as uuid } from "uuid";
import { LineInputText } from "./LineInputText";

function ExperienceContainer({ experienceData, setExperienceData }) {
  // console.log(experienceData);

  const handleAddCompany = () => {
    // console.log("here");
    let newCompany = {
      id: uuid(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      experience: [{ id: uuid(), text: "" }],
    };

    setExperienceData([...experienceData, newCompany]);
  };

  return (
    <div className="experienceContainerMain">
      <h2>Professional Experience</h2>
      {experienceData.map((experience) => (
        <ExperienceBox
          experience={experience}
          setExperienceData={setExperienceData}
          experienceData={experienceData}
          key={experience.id}
        />
      ))}
      <button
        type="button"
        onSubmit={(event) => event.preventDefault}
        onClick={() => handleAddCompany()}
      >
        Add Company
      </button>
    </div>
  );
}

function ExperienceBox({ experience, setExperienceData, experienceData }) {
  const updatePropData = (propToUpdate, value, line) => {
    // prevData is a variable you can access when running an arrow
    // function when calling a set function.
    // console.log(propToUpdate);

    //
    setExperienceData((prevData) => {
      return prevData.map((company) => {
        if (company.id === experience.id) {
          // console.log(experience);
          return {
            ...company,
            [propToUpdate]: company[propToUpdate].map((property) => {
              // console.log("here");
              if (property.id === line.id) {
                return { ...property, text: value };
              }
              console.log(property);
              return { ...property, value };
            }),
          };
        }
        return company;
      });
    });
    //

    // setExperienceData((prevData) => ({
    //   // i need to navigate the the specific company first.
    //   ...prevData,
    //   [propToUpdate]: value,
    // }));
  };
  return (
    <div className="experienceContainer">
      <form>
        <LineInputText
          label={"Company Name"}
          placeholder={"Company Name"}
          className={"companyInputContainer"}
          forProp={"company"}
          value={experience.company}
          updatePropData={updatePropData}
        />
        <LineInputText
          label={"Position"}
          placeholder={"Position"}
          className={"positionInputContainer"}
          forProp={"position"}
          value={experience.position}
          updatePropData={updatePropData}
        />
        <LineInputText
          label={"Start Date"}
          placeholder={"Start Date"}
          className={"startDateInputContainer"}
          forProp={"startDate"}
          value={experience.startDate}
          updatePropData={updatePropData}
        />
        <LineInputText
          label={"End Date"}
          placeholder={"End Date"}
          className={"endDateInputContainer"}
          forProp={"endDate"}
          value={experience.endDate}
          updatePropData={updatePropData}
        />
        <LineInputText
          label={"Location"}
          placeholder={"Location"}
          className={"experienceLocationContainer"}
          forProp={"location"}
          value={experience.location}
          updatePropData={updatePropData}
        />
        <ExperienceDescription
          experience={experience}
          // handleSet={updateData}
          setExperienceData={setExperienceData}
          experienceData={experienceData}
          updatePropData={updatePropData}
        />
      </form>
    </div>
  );
}

// Component that is the contaner for the experience list
function ExperienceDescription({
  experience,
  setExperienceData,
  experienceData,
  updatePropData,
}) {
  // console.log(companyArray);
  const lines = experience.experience;

  const handleDelete = (id) => {
    const companyIndex = experienceData.filter(
      (company) => company.id === experience.id
    );

    const newLines = lines.filter((line) => line.id !== id);
    const updateCompany = experienceData;
    updateCompany[companyIndex].ExperienceLines = newLines;
    console.log(updateCompany);
    // const newData = data;
    // newData.experience = newLines;
    setExperienceData(updateCompany);
  };

  const handleAddLine = () => {
    let newLine = { id: uuid(), text: "" };
    setExperienceData((prevData) => {
      return prevData.map((company) => {
        if (company.id === experience.id) {
          console.log(company);
          const newExperienceLines = [...company.experience, newLine];
          return { ...company, experience: newExperienceLines };
        }
      });
    });
  };

  const handleChange = (line, event) => {
    updatePropData("experience", event.target.value, line);
  };

  return (
    <div className="experienceLinesBox">
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
        Add Task
      </button>
    </div>
  );
}

// Component that creates the experience lines
function ExperienceLines({ lines, handleDelete, handleChange }) {
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

export { ExperienceBox, ExperienceContainer };

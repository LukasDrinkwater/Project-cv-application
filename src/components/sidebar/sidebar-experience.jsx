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
  const updatePropData = (propToUpdate, value) => {
    // console.log(propToUpdate, value);
    // prevData is a variable you can access when running an arrow
    // function when calling a set function.
    console.log(experience);

    //
    setExperienceData((prevData) => {
      return prevData.map((company) => {
        if (company.id === experience.id) {
          return {
            ...company,
            [propToUpdate]: company[propToUpdate].map((property) => {
              if (property.id === line.id) {
                return { ...property, text: value };
              }
              return { ...property, [propToUpdate]: value };
            }),
          };
        }
        return company;
      });
    });
    //

    // setExperienceData((prevData) => {
    //   const newData = prevData.map((company) => {
    //     if(company.id === experience.id){
    //       // return (...company, [propToUpdate]: {value},)
    //       const newExperience = company.map((property) => {

    //       })
    //     }
    //   })
    // });

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
          updatrePropData={updatePropData}
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
    // handleSet([...lines, newLine]);
    handleSet("experience", [...lines, newLine]);
  };

  const handleChange = (line, event) => {
    // console.log(line.id);
    // finds index of line from line id
    const arrayIndex = lines.findIndex((listLine) => listLine.id === line.id);
    // or [...lines]
    const newLines = lines.slice();
    newLines[arrayIndex].text = event.target.value;
    handleSet(newLines);
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

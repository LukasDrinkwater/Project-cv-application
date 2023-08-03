import { v4 as uuid } from "uuid";
import { LineInputText } from "./LineInputText";

function ExperienceBox({ data, setData }) {
  // const lines = data.experience;
  // const setLines = setData;

  const updateData = (propToUpdate, value) => {
    // prevData is a variable you can access when running an arrow
    // function when calling a set function.
    setData((prevData) => ({
      ...prevData,
      [propToUpdate]: value,
    }));
  };
  return (
    <div className="experienceContainer">
      <h2>Professional Experience</h2>
      <form>
        <LineInputText
          label={"Company Name"}
          placeholder={"Company Name"}
          className={"companyInputContainer"}
          forProp={"company"}
          value={data.company}
          handleSet={updateData}
        />
        <LineInputText
          label={"Position"}
          placeholder={"Position"}
          className={"positionInputContainer"}
          forProp={"position"}
          value={data.position}
          handleSet={updateData}
        />
        <LineInputText
          label={"Start Date"}
          placeholder={"Start Date"}
          className={"startDateInputContainer"}
          forProp={"startDate"}
          value={data.startDate}
          handleSet={updateData}
        />
        <LineInputText
          label={"End Date"}
          placeholder={"End Date"}
          className={"endDateInputContainer"}
          forProp={"endDate"}
          value={data.endDate}
          handleSet={updateData}
        />
        <LineInputText
          label={"Location"}
          placeholder={"Location"}
          className={"experienceLocationContainer"}
          forProp={"location"}
          value={data.location}
          handleSet={updateData}
        />
        <ExperienceDescription data={data} handleSet={updateData} />
      </form>
    </div>
  );
}

// Component that is the contaner for the expereince list
function ExperienceDescription({ data, handleSet }) {
  // const [lines, setLines] = useState([{ id: uuid(), text: "" }]);
  const lines = data.experience;
  // const setLines = props.setLines;

  const handleDelete = (id) => {
    const newLines = lines.filter((line) => line.id !== id);
    const newData = data;
    // console.log(id);
    newData.experience = newLines;
    handleSet(newData);
  };

  const handleAddLine = () => {
    let newLine = { id: uuid(), text: "" };
    // handleSet([...lines, newLine]);
    handleSet("experience", [...lines, newLine]);
  };

  const handleChange = (line, e) => {
    // console.log(line.id);
    const arrayIndex = lines.findIndex((listLine) => listLine.id === line.id);
    const newLines = lines.slice();
    newLines[arrayIndex].text = e.target.value;
    handleSet(newLines);
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

export { ExperienceBox };

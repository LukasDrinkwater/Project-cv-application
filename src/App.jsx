import { useState } from "react";
import { Sidebar } from "./components/page-structure";
import { v4 as uuid } from "uuid";
import "./App.css";

function App() {
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

  const [experienceData, setExperienceData] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    experience: [{ id: uuid(), text: "" }],
  });

  return (
    <Sidebar
      personalData={personalData}
      setPersonalData={setPersonalData}
      educationData={educationData}
      setEducationData={setEducationData}
      experienceData={experienceData}
      setExperienceData={setExperienceData}
    />
  );
}

export default App;

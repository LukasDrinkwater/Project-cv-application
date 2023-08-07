import { useState } from "react";
import { Sidebar } from "./components/sidebar/sidebar";
import { CVPreview } from "./components/cv-components/cv-preview";
import { v4 as uuid } from "uuid";
import "./styles/app.css";

function App() {
  const [personalData, setPersonalData] = useState({
    name: "Lukas",
    email: "email@email.com",
    phoneNumber: "0721551",
    address: "99 street",
  });

  const [educationData, setEducationData] = useState({
    school: "test school",
    degree: "coding",
    startDate: "2020",
    endDate: "2022",
  });

  const [experienceData, setExperienceData] = useState([
    {
      id: uuid(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      experience: [{ id: uuid(), text: "" }],
    },
  ]);

  return (
    <div className="appContainer">
      <Sidebar
        personalData={personalData}
        setPersonalData={setPersonalData}
        educationData={educationData}
        setEducationData={setEducationData}
        experienceData={experienceData}
        setExperienceData={setExperienceData}
      />
      <CVPreview
        personalData={personalData}
        educationData={educationData}
        experienceData={experienceData}
      />
    </div>
  );
}

export default App;

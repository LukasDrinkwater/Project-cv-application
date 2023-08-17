import { useState } from "react";
import { Sidebar } from "./components/sidebar/sidebar";
import { CVPreview } from "./components/cv-components/cv-preview";
import { v4 as uuid } from "uuid";
import "./styles/app.css";
import "./styles/cv-preview.css";

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

  const [experienceData, setExperienceData] = useState([
    {
      id: uuid(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      experience: [
        { id: uuid(), text: "" },
        { id: uuid(), text: "" },
      ],
    },
  ]);

  const [showCVPreview, setShowCVPreview] = useState(false);

  return (
    <div className="appContainer">
      <Sidebar
        personalData={personalData}
        setPersonalData={setPersonalData}
        educationData={educationData}
        setEducationData={setEducationData}
        experienceData={experienceData}
        setExperienceData={setExperienceData}
        // toggle CV states
        showCVPreview={showCVPreview}
        setShowCVPreview={setShowCVPreview}
      />
      <CVPreview
        personalData={personalData}
        educationData={educationData}
        experienceData={experienceData}
        // toggle CV states
        showCVPreview={showCVPreview}
        setShowCVPreview={setShowCVPreview}
      />
    </div>
  );
}

export default App;

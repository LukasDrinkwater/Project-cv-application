import { useState, createContext } from "react";
import { Sidebar } from "./components/sidebar/sidebar";
import { CVPreview } from "./components/cv-components/cv-preview";
import { v4 as uuid } from "uuid";
import "./styles/app.css";
import "./styles/cv-preview.css";

import { ShowCVPreviewProvider } from "./context/showCVPreviewContext";

// export the showCVPreviewContext and export it so I can use it
// through the app
export const ShowCVPreviewContext = createContext();

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

  // const ShowCVPreviewContext = createContext();
  // const [showCVPreview, setShowCVPreview] = useState(false);

  // const [showCVPreview, setShowCVPreview] = useState(false);

  // const ShowCVPreviewProvider = ({ children }) => {
  //   const [showCVPreview, setShowCVPreview] = useState(false);
  // };

  return (
    <div className="appContainer">
      <ShowCVPreviewProvider>
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
      </ShowCVPreviewProvider>
    </div>
  );
}

export default App;

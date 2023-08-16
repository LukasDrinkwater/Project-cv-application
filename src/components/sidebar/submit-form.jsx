import { ShowCVPreviewContext } from "../../App";
import { useContext } from "react";
import {
  useShowCVPreview,
  useShowCVPreviewUpdate,
} from "../../context/showCVPreviewContext";

function SubmitForm() {
  // const setShowCVPreview =

  // const generateCV = () => {
  //   // set a state to true so it shows the cv preview
  //   setShowCVPreview(true);
  // };

  return (
    <>
      <button onClick={toggleShowCV}>Generate CV</button>;
    </>
  );
}

export { SubmitForm };

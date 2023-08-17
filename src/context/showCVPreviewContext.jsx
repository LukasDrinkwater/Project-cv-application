// import { useState, createContext, useContext } from "react";
// // import { ShowCVPreviewContext } from "../App"

// const ShowCVPreviewContext = createContext();

// const ShowCVPreviewUpdateContext = createContext();

// export function useShowCVPreview() {
//   return useContext(ShowCVPreviewContext);
// }

// export function useShowCVPreviewUpdate() {
//   return useContext(ShowCVPreviewUpdateContext);
// }

// export function ShowCVPreviewProvider({ children }) {
//   const [showCVPreview, setShowCVPreview] = useState(false);

//   const toggleShowCV = () => {
//     // set a state to true so it shows the cv preview
//     setShowCVPreview((prevState) => !prevState);
//   };

//   return (
//     <ShowCVPreviewContext.Provider value={showCVPreview}>
//       <ShowCVPreviewUpdateContext.Provider value={toggleShowCV}>
//         {children}
//       </ShowCVPreviewUpdateContext.Provider>
//     </ShowCVPreviewContext.Provider>
//   );
// }

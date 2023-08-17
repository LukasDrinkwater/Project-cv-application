function SubmitForm({ setShowCVPreview }) {
  // const setShowCVPreview =

  const toggleShowCV = () => {
    // set a state to true so it shows the cv preview
    setShowCVPreview(true);
    console.log("here");
  };

  return (
    <>
      <button onClick={toggleShowCV}>Generate CV</button>;
    </>
  );
}

export { SubmitForm };

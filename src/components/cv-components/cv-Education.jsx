function CVEducation({ educationData }) {
  return (
    // can add a forEach loop if I allow the user to add more schools
    <div className="cdEducationContainer">
      <div className="startEndDate">
        <p>{`${educationData.startDate} - ${educationData.endDate}`}</p>
      </div>
      <div className="educationInfoContainer">
        <p>{educationData.school}</p>
        <p>{educationData.degree}</p>
      </div>
    </div>
  );
}

export { CVEducation };

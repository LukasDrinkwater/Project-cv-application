function CVEducation({ educationData }) {
  return (
    // can add a forEach loop if I allow the user to add more schools
    <div className="CVEducationContainer">
      <div className="startEndDate">
        {educationData.startDate && (
          <p>{`${educationData.startDate} - ${educationData.endDate}`}</p>
        )}
      </div>
      <div className="educationInfoContainer">
        <p className="school">{educationData.school}</p>
        <p className="degree">{educationData.degree}</p>
      </div>
    </div>
  );
}

export { CVEducation };

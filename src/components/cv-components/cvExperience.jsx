import { Fragment } from "react";

function CVExperience({ experienceData }) {
  // console.log(experienceData);

  return (
    <div className="CVExperienceContainer">
      {experienceData.map((element) => (
        <Fragment key={element.id}>
          <div className="companyContainer">
            <div className="locationContainer">
              <p className="dateP">{`${element.startDate} - ${element.endDate}`}</p>
              <p className="locationP">{element.location}</p>
            </div>
            <div className="experienceDetailContainer">
              <CVExperienceLine element={element} />
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

function CVExperienceLine({ element }) {
  console.log(element.experience);

  return (
    // <div className="experienceDetailContainer" key={element.id}>
    <>
      <div className="companyInfo">
        <p className="company">{element.company}</p>
        <p className="job">{element.position}</p>
      </div>
      <div className="experienceLines">
        <ul>
          {element.experience.map((line) => (
            <li key={line.id}>{line.text}</li>
          ))}
        </ul>
      </div>
    </>
    // </div>
  );
}

{
  /* {Object.keys(element).map((line) => (
        <div className="experienceLine" key={line}>
          {line === "experience" ? (
            <ul>
              {element[line].map((exp) => (
                <li key={exp.id}>{exp.text}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))} */
}

export { CVExperience };

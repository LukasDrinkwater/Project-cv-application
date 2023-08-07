function CVPersonal({ personalData }) {
  return (
    <div className="cvPersonalContainer">
      {Object.keys(personalData).map((key) => (
        <div key={key} className={key}>
          <p>{personalData[key]}</p>
        </div>
      ))}
    </div>
  );
}

export { CVPersonal };

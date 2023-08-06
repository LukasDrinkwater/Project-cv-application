function LineInputText({
  label,
  placeholder,
  className,
  forProp,
  value,
  updatePropData,
}) {
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => updatePropData(forProp, event.target.value)}
      ></input>
    </div>
  );
}

export { LineInputText };

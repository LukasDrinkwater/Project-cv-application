function LineInputText({
  label,
  placeholder,
  className,
  forProp,
  value,
  handleSet,
}) {
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => handleSet(forProp, event.target.value)}
      ></input>
    </div>
  );
}

export { LineInputText };

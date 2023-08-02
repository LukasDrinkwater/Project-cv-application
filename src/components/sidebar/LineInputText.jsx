function LineInputText({
  label,
  placeholder,
  className,
  forProp,
  value,
  handleSetFullName,
}) {
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => handleSetFullName(forProp, event.target.value)}
      ></input>
    </div>
  );
}

export { LineInputText };

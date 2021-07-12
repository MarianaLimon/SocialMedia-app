import React from "react";
import "./appTextarea.css";

export default function AppTextarea(props) {
  const {
    idInput,
    name,
    classTextArea = "",
    isDisabled = false,
    isRequired = false,
    value,
    row,
    placeholder,
  } = props;

  const onChange = (event) => {
    if (props.onChange) props.onChange(event)
  }

  return (
    <textarea
      id={idInput}
      className={`textarea ${classTextArea}`}
      name={name}
      placeholder={placeholder}
      disabled={isDisabled}
      required={isRequired}
      onChange={onChange}
      value={value}
      row={row}
    />
  );
}

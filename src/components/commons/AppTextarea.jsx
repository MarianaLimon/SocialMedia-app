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

  return (
    <textarea
      id={idInput}
      className={`textarea ${classTextArea}`}
      name={name}
      placeholder={placeholder}
      disabled={isDisabled}
      required={isRequired}
      onChange={(event) => props.callback(event.target.value)}
      value={value}
      row={row}
    />
  );
}

import React from "react";

import Styles from "./AppCheckbox.module.css"

const AppCheckbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className={`${Styles.CheckboxComponent}`}>
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);

export default AppCheckbox;

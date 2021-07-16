import React from "react";

import Styles from "./AppCheckbox.module.css"

const AppCheckbox = ({ label, isSelected, onCheckboxChange, onClick, dataID }) => (
  <div className={`${Styles.CheckboxComponent}`}>
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
        onClick={onClick}
        data-id={dataID}
      />
      {label}
    </label>
  </div>
);

export default AppCheckbox;

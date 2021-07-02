// component pass ✅
import React, { useState, useEffect } from 'react'

import Styles from "./AppInput.module.css"

const Input = ({
  //classNameInput = '',
  classContainerInput = '',
  ariaDescribedBy,
  isDisabled = false,
  isRequired = false,
  placeholder = "",
  value,
  ...props
}) => {
  const [inputState, setInputState] = useState(value)

  useEffect(() => {
    setInputState(value)
  }, [props])

  // Pass the onChange function to it´s parent
  const onChange = (event) => {
    if (props.onChange) props.onChange(event)
  }
  // Pass the onKeyPressInput function to it´s parent
  const onKeyPressInput = (e) => {
    if (props.onKeyPressInput) props.onKeyPressInput(e)
  }

  return (
    <div className={`control ${classContainerInput}`}>
      <input
        //className={`${classNameInput}`}
        type={props.type ? props.type : "text"}
        className={`${Styles.InputComponent}`}
        placeholder={`${placeholder}`}
        aria-describedby={ariaDescribedBy}
        disabled={isDisabled}
        required={isRequired}
        defaultValue={inputState}
        onChange={onChange}
        onKeyPress={onKeyPressInput}
        {...props}
      />
    </div>
  )
}

export default Input

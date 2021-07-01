import React from "react";

const AppSelect = ({
  label,
  classSelect = "",
  ariaDescribedBy,
  idSelect,
  isDisabled = false,
  helperClass = "",
  classContainerInput = "",
  options,
  keyNameOption,
  keyNameValue,
  errorMessage = "",
  ...props
}) => {
  const optionsRender =
    options && options.length !== 0
      ? options.map((itemOption) => {
          return (
            <option
              key={itemOption[keyNameValue]}
              value={itemOption[keyNameValue]}
            >
              {itemOption[keyNameOption]}
            </option>
          );
        })
      : null;

  const onChange = (event) => {
    if (props.onChange) props.onChange(event);
  };

  return (
    <div className={`field ${classContainerInput}`}>
      <label
        id={`${idSelect}Label`}
        className={`label ${classSelect}`}
        htmlFor={idSelect}
      >
        {label}
        <div className=" mb-2">
          <div className="form-group select is-full-width">
            <select
              id={idSelect}
              className={`form-control select ${classSelect} is-full-width`}
              aria-labelledby={`${label}Label`}
              aria-describedby={ariaDescribedBy}
              disabled={isDisabled}
              onChange={onChange}
              {...props}
            >
              <option value="">Seleccione una opción</option>
              {optionsRender}
            </select>
          </div>
        </div>
      </label>
      {errorMessage ? (
        <p className="help has-text-weight-medium has-text-danger has-text-right has-margin-top-10">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
};

export default AppSelect;

//usage example
/*
      <AppSelect
        classSelect="col-12"
        idSelect="especialidad"  
        classContainerInput="col-5"
        options={options}            //array de llave valor[["uno", "1"],["dos", "2"],];
        keyNameOption={0}            //posicion del option en el array 
        keyNameValue={1}             //posicion del value en el array
        value={especiality}          // 
        onChange={(event) => setEspeciality(event.target.value)}
        callback={setEspeciality}
      />

*/

import React from "react";
import "./appButton.css";

function AppButton({ classButton, type, text, url, ...props }) {
  const className = classButton ? classButton : "";

  if (type === "anchor") {
    return (
      <a href={`${url}`} className={`btn btn-link ${className}`}>
        {text ? text : ""}
      </a>
    );
  }

  if (type === "submit") {
    return (
      <div className="form-group">
        <input
          type="submit"
          value={text ? text.toUpperCase() : ""}
          className={`form-control btn button ${className} m-3`}
        />
      </div>
    );
  }

  return (
    <button className={`btn button ${className} m-3`} type="button" {...props}>
      {text ? text.toUpperCase() : ""}
    </button>
  );
}

export default AppButton;

//            usage example
/*

<AppButton
  classButton="aqua"    //aqua blue secondary
  type="anchor"         //anchor, submit, button
  text="Registrar"
  url="http://url"      // only for anchor
/>

*/

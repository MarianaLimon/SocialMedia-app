import React from "react";
import "./appFeedback.css";

function AppFeedback({ feedback, className, props }) {
  const erroMessage = feedback ? feedback : "";

  return <small className={`text-danger ${className}`}>{erroMessage}</small>;
}

export default AppFeedback;

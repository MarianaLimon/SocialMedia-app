import React from "react";
import "./appImage.css";

export default function AppImage(props) {

  const { 
    pathImage, 
    altImage, 
    classImage 
  } = props;

  return (
    
    <img 
    src={pathImage} 
    alt={altImage} 
    className={classImage} 
    />

  )

}



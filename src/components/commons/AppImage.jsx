import React from "react";

export default function AppImage(props) {
  const { pathImage, altImage, classImage } = props;
  return <img src={pathImage} alt={altImage} className={classImage} />;
}

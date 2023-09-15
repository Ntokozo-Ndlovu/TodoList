import React from "react";
import styleClasses from "./ErrorText.moduel.css";

const ErrorText = (props) => {
  return props.text && <div className={styleClasses.error}>{props.text}</div>;
};

export default ErrorText;

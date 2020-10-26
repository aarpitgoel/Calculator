import React from "react";
import "./../styles.css";

//function to render screen
export default function Screen(props) {
  return <div className="screen">{props.result}</div>;
}

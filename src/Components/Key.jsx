import React from "react";
import "./../styles.css";

//function to render key component
export default function Key(props) {
  const { value, onClick } = props;
  return (
    <>
      <div className="key" onClick={() => onClick(value)}>
        {value}
      </div>
    </>
  );
}

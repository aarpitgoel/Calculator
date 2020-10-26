import React from "react";
import Key from "./Key";
import "./../styles.css";
import Screen from "./Screen";
import { evaluate } from "mathjs";

export default function Keys() {
  const [result, setResult] = React.useState("");

  //function to handle Click and store input in result
  const handleClick = function (value) {
    //console.log("clicked");
    const newResult = result.toString() + value;
    setResult(newResult);
  };

  //function to calculate desired expression
  const calculate = function () {
    // console.log("calculate button clicked");
    let expression;
    try {
      expression = evaluate(result);
      setResult(expression);
    } catch (ex) {
      setResult("");
    }
  };

  //function to clear screen
  const clearScreen = function () {
    //console.log("clear screen button clicked");
    setResult("");
  };

  //calling components
  return (
    <>
      <div className="container">
        <div className="screenContainer">
          <Screen key={1000} result={result} />
        </div>
        <div className="keyContainer">
          {[7, 8, 9, "/", 4, 5, 6, "-", 1, 2, 3, "+", 0, "*"].map((el) => (
            <Key key={el} value={el} onClick={handleClick} />
          ))}
          <div className="key" onClick={calculate}>
            =
          </div>
          <div className="key" onClick={clearScreen}>
            clear
          </div>
        </div>
      </div>
    </>
  );
}

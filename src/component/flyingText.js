import React from "react";
import "./flyingText.css";

export default function FlyingText(props) {
  let txtArray = props.txt.split("");
  return (
    <div className="dancingLetters">
         {txtArray.map((string, index) => (
        <span key={index}>{string}</span>
      ))}
    </div>
  );
}

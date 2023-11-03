import React, { useReducer } from "react";
import "./styles.css";
import numberReducer from "../state/reducers/numberReducer";

const Career = () => {
  const reducer = numberReducer;
  const [state, dispatch] = useReducer(reducer, 200);

  const handleClickBox = () => {
    dispatch({ type: "add", value: 500 });
  };

  setTimeout(() => {
    const boxElement = document.getElementById("box1");
    const newNode = document.createElement("div");
    const textContent = document.createTextNode("Text Added");

    newNode.appendChild(textContent);

    boxElement.insertBefore(newNode, boxElement.childNodes[0]);
  }, 3000);

  console.log("state", state);
  return (
    <div className="parent-div">
      <div className="child-div box1" id="box1" onClick={handleClickBox}>
        <div>Box1</div>
        <div>Chilly</div>
      </div>
    </div>
  );
};

export default Career;

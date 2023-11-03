import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import InfoContext from "../context/InfoContext";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, subtractNumber } from "../state/actions";

const Home = () => {
  // const navigate = useNavigate();

  const { name } = useContext(InfoContext);
  console.log("name::", name);

  const reduxData = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeDom = () => {
    dispatch(addNumber(200));
    console.log("reduxData", reduxData);
    dispatch(subtractNumber(100));
    console.log("reduxData", reduxData);

    const headingDom = document.getElementById("home-heading");

    const mapping = { color: "blue", backgroundColor: "red" };

    const newNode = document.createElement("p");
    const textNode = document.createTextNode(`Paragraph Added : ${name}`);

    newNode.appendChild(textNode);

    headingDom.insertBefore(newNode, headingDom.lastChild);
    headingDom.insertBefore(newNode, headingDom.lastChild);
    headingDom.insertBefore(newNode, headingDom.lastChild);

    Object.keys(mapping).forEach((itemKey) => {
      headingDom.style[itemKey] = mapping[itemKey];
    });

    headingDom.setAttribute("dom-value", "dom-value");

    document.getElementById("natureImage").src =
      "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg";

    // headingDom[0].style.color = "blue";
    // headingDom[0].style.backgroundColor = "red";

    setTimeout(() => {
      newNode.remove();
    }, 3000);
  };

  return (
    <div className={styles.homeContainer}>
      <img
        id="natureImage"
        src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg"
        width={400}
        alt="natureImage"
      />

      <div id="home-heading">
        <p>HTML content</p>
        <p>P content</p>
      </div>

      <br />
      <button
        onClick={() => {
          changeDom();

          // navigate("/about");
        }}
      >
        Go to About Page
      </button>
    </div>
  );
};

export default Home;

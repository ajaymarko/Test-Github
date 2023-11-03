import React from "react"; // useMemo
// import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

// const calculation = (a, b) => {
//   console.log(a, b);
//   return a * b;
// };

const About = () => {
  // const navigate = useNavigate();
  // const a = 100,
  //   b = 20;

  // const newValue = useMemo(() => calculation(a, b), [a, b]);

  const divStyle = { margin: "8px" };
  const validateForm = () => {
    const formElement = document.forms["myForm"];

    console.log(
      "formElement",
      formElement.firstname.value,
      formElement.surname.value
    );
  };

  return (
    <div className={styles.homeContainer}>
      <div title="Working Working">This is About</div>
      <br />
      <form name="myForm" id="myForm">
        <div style={divStyle}>
          <label htmlFor="firstname">Name : </label>
          <input id="firstname" name="firstname" required />
        </div>

        <div style={divStyle}>
          <label htmlFor="surname">Surname : </label>
          <input id="surname" name="surname" required />
        </div>
      </form>

      <button
        form="myForm"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          validateForm();
          // navigate("/home");
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default About;

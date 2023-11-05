import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="box-container">
          <div>Box1</div>
        </div>

        <div className="box-container">
          <div>box2</div>
        </div>
      </div>

      <div className="content-container">This is my new content page</div>
      <div className="content-container">This is my new content page</div>
      <div className="content-container">This is my new content page</div>
    </>
  );
};

export default Home;

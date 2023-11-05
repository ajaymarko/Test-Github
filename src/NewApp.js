import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./newcomponents/Home";
import About from "./newcomponents/About";
import Contact from "./newcomponents/Contact";
import Career from "./newcomponents/Career";
import Navbar from "./newcomponents/Navbar";
import "./NewApp.css";
import Footer from "./newcomponents/Footer";

const NewApp = () => {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/career" element={<Career />}></Route>
        </Routes>
        <div className="bottom-bubble">^</div>
        <Footer />
      </Router>
    </div>
  );
};

export default NewApp;

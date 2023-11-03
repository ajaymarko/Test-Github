import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import InfoContext from "../src/context/InfoContext";
import Career from "./components/Career";
import ReactHookForm from "./components/ReactHookForm/ReactHookForm";
function App() {
  return (
    <InfoContext.Provider value={{ name: "Ajay Kumar Marko" }}>
      <div className="App">
        <div className="heading">Learnig Javascript</div>

        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/career" element={<Career />} />
              <Route path="/form" element={<ReactHookForm />} />
            </Routes>
          </Router>
        </div>
      </div>
    </InfoContext.Provider>
  );
}

export default App;

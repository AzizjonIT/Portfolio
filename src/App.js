import React from "react";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About.jsx"
import Projects from "./Pages/Projects/Projects.jsx"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About/" element={<About />} />
        <Route path="/Projects/" element={<Projects/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

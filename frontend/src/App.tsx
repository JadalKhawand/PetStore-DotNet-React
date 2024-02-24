import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components/pages/home/Home.page";
const App: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Wrapper */}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

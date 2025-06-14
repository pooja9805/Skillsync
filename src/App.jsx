import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
     <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-slate-200">


        <Navbar />
        <Routes>
          <Route path="/" element={<div className="pt-24 text-center text-3xl font-semibold text-gray-800">Welcome to SkillSync</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

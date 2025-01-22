import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MyPage from "./MyPage";
import About from "./About";
import Query from "./Query";
import Business from "./Business";
import Learning from "./Learning";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/query" element={<Query />} />
        <Route path="/business" element={<Business />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </Router>
  );
}

export default App;

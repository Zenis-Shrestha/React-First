import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs"; // Import Breadcrumbs

function Learning() {
  return (
    <div>
      <Breadcrumbs /> {/* Display breadcrumb navigation */}

      <h1>Learning Page</h1>
      <p>This is the Learning page.</p>

      {/* Navigation Buttons */}
      <button><Link to="/">Home</Link></button>
      <button><Link to="/about">About</Link></button>
      <button><Link to="/query">Query</Link></button>
      <button><Link to="/business">Business</Link></button>
    </div>
  );
}

export default Learning;

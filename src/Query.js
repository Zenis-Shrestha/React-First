import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs"; // Import Breadcrumbs

function Query() {
  return (
    <div>
      <Breadcrumbs /> {/* Display breadcrumb navigation */}

      <h1>Query Page</h1>
      <p>This is the Query page.</p>

      {/* Navigation Buttons */}
      <button><Link to="/">Home</Link></button>
      <button><Link to="/about">About</Link></button>
      <button><Link to="/business">Business</Link></button>
      <button><Link to="/learning">Learning</Link></button>
    </div>
  );
}

export default Query;

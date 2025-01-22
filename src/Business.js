import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs"; // Import Breadcrumbs

function Business() {
  return (
    <div>
      <Breadcrumbs /> {/* Display breadcrumb navigation */}

      <h1>Business Page</h1>
      <p>This is the Business page.</p>

      {/* Navigation Buttons */}
      <button><Link to="/">Home</Link></button>
      <button><Link to="/about">About</Link></button>
      <button><Link to="/query">Query</Link></button>
      <button><Link to="/learning">Learning</Link></button>
    </div>
  );
}

export default Business;

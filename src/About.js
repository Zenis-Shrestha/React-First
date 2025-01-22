import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs"; // Import Breadcrumbs

function About() {
  return (
    <div>
      <Breadcrumbs /> {/* Display breadcrumb navigation */}

      <h1>About Page</h1>
      <p>This is the About page.</p>

      {/* Navigation Buttons */}
      <button><Link to="/">Home</Link></button>
      <button><Link to="/query">Query</Link></button>
      <button><Link to="/business">Business</Link></button>
      <button><Link to="/learning">Learning</Link></button>
    </div>
  );
}

export default About;

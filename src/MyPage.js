import React from "react";
import { Link } from "react-router-dom";

function MyPage() {
  return (
    <div>
      <h1>Welcome to My Page</h1>
      <p>Select a page to explore:</p>

      {/* Navigation Buttons */}
      <button><Link to="/about">About</Link></button>
      <button><Link to="/query">Query</Link></button>
      <button><Link to="/business">Business</Link></button>
      <button><Link to="/learning">Learning</Link></button>
    </div>
  );
}

export default MyPage;

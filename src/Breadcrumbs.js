import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    // Get the current path and split it into parts
    const pathArray = location.pathname.split("/").filter((x) => x);
    
    // Create breadcrumb links
    const breadcrumbTrail = pathArray.map((path, index) => {
      const routeTo = "/" + pathArray.slice(0, index + 1).join("/");
      return { name: path.charAt(0).toUpperCase() + path.slice(1), path: routeTo };
    });

    setBreadcrumbs(breadcrumbTrail);
  }, [location]);

  return (
    <nav>
      <p>
        <Link to="/">Home</Link> {/* Always show Home */}
        {breadcrumbs.map((crumb, index) => (
          <span key={index}>
            {" > "}
            <Link to={crumb.path}>{crumb.name}</Link>
          </span>
        ))}
      </p>
    </nav>
  );
}

export default Breadcrumbs;

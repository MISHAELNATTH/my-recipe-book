import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Oops! This page doesn’t exist.</h2>
      <p>The link you followed may be broken or the page has been removed.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
};

export default NotFound;

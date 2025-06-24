import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <bar style={styles.bar}>
      <Link to="/" className="bar-link">Home</Link>
      <Link to="/add" className="bar-link">Add Recipe</Link>
      <Link to="/favorites" className="bar-link">Favorites</Link>
    </bar>
  );
};

const styles = {
  bar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "1rem",
    backgroundColor: "#f8f8f8",
    borderBottom: "1px solid #ccc"
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold"
  }
};

export default Topbar;

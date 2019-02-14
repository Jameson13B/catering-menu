import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div className="Navigation">
      <Link to="/">Home</Link>
      <Link to="/mains">Mains</Link>
      <Link to="/sides">Sides</Link>
      <Link to="/condiments">Condiments</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navigation;

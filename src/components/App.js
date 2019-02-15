import React from "reactn";
import { Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Mains from "./Mains";
import Sides from "./Sides";
import Sauces from "./Sauces";
import Contact from "./Contact";
import "../styles/App.css";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">
          Atomic<span style={{ fontWeight: "bold" }}>10</span> Cookbook
        </h1>
        <Navigation />
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/mains" component={Mains} />
      <Route path="/sides" component={Sides} />
      <Route path="/sauces" component={Sauces} />
      <Route path="/contact" component={Contact} />
      <p className="sig">
        Website by{" "}
        <a href="https://jamesonb.com/" target="_blanks">
          Jameson Brown
        </a>
      </p>
    </div>
  );
};

export default App;

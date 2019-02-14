import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navigation from "./Navigation";
import Mains from "./Mains";
import Sides from "./Sides";
import Condiments from "./Condiments";
import Contact from "./Contact";
import "../styles/App.css";

class App extends Component {
  render() {
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
        <Route path="/condiments" component={Condiments} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

const Home = () => {
  return <h1>Home</h1>;
};

export default App;

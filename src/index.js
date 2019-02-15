import React, { setGlobal } from "reactn";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/App";

setGlobal({
  mains: [],
  sides: [],
  sauces: []
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

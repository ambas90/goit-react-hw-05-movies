import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import Pomidor, { foo } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="App-header">
    <Pomidor />
  </div>
);

React.createElement("div");

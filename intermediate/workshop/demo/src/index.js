import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const initialTodos = [
  {
    title: "Learn React",
    done: false,
  },
  {
    title: "Go to Code.Hub",
    done: true,
  },
  {
    title: "Go out for a drink",
    done: false,
  },
];

ReactDOM.render(
  <App initialTodos={initialTodos} />,
  document.getElementById("root")
);

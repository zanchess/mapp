import React from "react";
import ReactDOM from "react-dom";

const today = new Date().toLocaleDateString()
const App = () => (
  <h2>My React and TypeScript App!!!! Date: {today}</h2>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
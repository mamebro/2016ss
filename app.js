import React from "react";
import ReactDOM from "react-dom";
import MamebroApp from "./MamebroApp";

ReactDOM.render(
  <MamebroApp url="http://localhost:3000" pollInterval={2000} />,
  document.getElementById('container')
);

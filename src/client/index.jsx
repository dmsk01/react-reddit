import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "../shared/components/Header/Header";

window.addEventListener("load", () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Header />);
  // ReactDOM.hydrate(<Header />, document.getElementById("root"));
});

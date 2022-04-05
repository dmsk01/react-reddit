import React from "react";
import * as ReactDOM from "react-dom/client";
import { Header } from "../shared/components/Header/Header";

window.addEventListener("load", () => {
  ReactDOM.hydrateRoot(document.getElementById("root"), <Header />);
});

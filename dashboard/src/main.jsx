import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";
import { Analytics } from "@vercel/analytics/react";
ReactDOM.render(
  <ContextProvider>
    <App />
    <Analytics />
  </ContextProvider>,
  document.getElementById("root")
);

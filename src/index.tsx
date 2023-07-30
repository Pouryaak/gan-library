import React from "react";
import ReactDOM from "react-dom/client";
import RoutesComponent from "./routes";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <CssBaseline />
    <RoutesComponent />
  </>
);

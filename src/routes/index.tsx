import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";
import Layout from "../components/UI/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { THEME } from "../theme";

const theme = createTheme({
  palette: {
    primary: {
      main: THEME.secondaryColor,
    },
  },
  typography: {
    fontFamily: "'Outfit', sans-serif",
  },
});

const RoutesComponent = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
        </Route>
      </Routes>
    </Router>
  </ThemeProvider>
);

export default RoutesComponent;

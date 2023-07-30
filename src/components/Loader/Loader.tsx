import { Box } from "@mui/material";
import React from "react";
import { SpinningLogo } from "./Loader.styles";
import logo from "../../assets/img/gan-logo.png";

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="20vh"
    >
      <SpinningLogo src={logo} alt="logo" />
    </Box>
  );
};

export default Loader;

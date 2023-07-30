import Logo from "./../../../assets/img/gan-logo.png";
import Grid from "@mui/material/Grid";
import React from "react";
import { Header, HeaderTitle, LogoLink, MenuLink } from "./MenuBar.styles";
import { Stack } from "@mui/material";

const MenuBar = () => {
  return (
    <Header>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={10}>
          <LogoLink to="/">
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src={Logo} width={80} height={80} alt="" />
              <HeaderTitle>GAN Library</HeaderTitle>
            </Stack>
          </LogoLink>
        </Grid>
        <Grid item xs={12} sm={2}>
          <MenuLink to="/books">Books</MenuLink>
        </Grid>
      </Grid>
    </Header>
  );
};

export default MenuBar;

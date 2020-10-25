import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Basile Fengos</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

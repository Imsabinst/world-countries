import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <AppBar
      position="static"
      style={{ background: theme?.background, color: theme.color }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          onClick={switchTheme}
        >
          <DarkModeIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Country
        </Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="cart-logo"
        >
          <ShoppingCartCheckoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

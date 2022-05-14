import React, { useContext } from "react";

import { MdWavingHand } from "react-icons/md";

import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";

import { ThemeContext } from "../../context/ThemeContext";
import SearchCountry from "../search";
import { Cart } from "../carts";

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
          <WbIncandescentIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hello World <MdWavingHand />
        </Typography>

        <SearchCountry />
        <Cart />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

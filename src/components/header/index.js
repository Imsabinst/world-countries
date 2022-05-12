import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Cart } from "../cart";
import SearchCountry from "../search";
import { MdWavingHand } from "react-icons/md";

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
          Hello World <MdWavingHand />
        </Typography>

        <SearchCountry />
        <Cart />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React, { useContext } from "react";

import { ImSwitch } from "react-icons/im";

import { ThemeContext } from "../../context/ThemeContext";
import { Cart } from "../cart";

import "./navbar.scss";

const Navbar = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{ background: theme?.background, color: theme.color }}
      className={`navbar navbar-${theme}`}
    >
      <div className="navbar__content">
        <ImSwitch onClick={switchTheme} className="navbar__switch" />
        <h2>Countries</h2>
      </div>
      <div className="navbar__cart">
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;

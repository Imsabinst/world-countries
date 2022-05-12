import React, { useState } from "react";
import { Routes } from "../Routes";
import { themes } from "../types";

export const ThemeContext = React.createContext({
  theme: themes.light,
  switchTheme: () => {},
});

export const ThemeProvider = () => {
  const [context, setContext] = useState({
    theme: themes.light,
    switchTheme: () => {
      setContext((current) => ({
        ...current,
        theme: current.theme === themes.light ? themes.dark : themes.light,
      }));
    },
  });
  return (
    <ThemeContext.Provider value={context}>
      <Routes />
    </ThemeContext.Provider>
  );
};

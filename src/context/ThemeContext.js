import React, { useState } from "react";
import { Routes } from "../Route";
import { themes } from "../types";

// Context has been created
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

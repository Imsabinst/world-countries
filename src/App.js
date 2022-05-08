import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <div>
      <ThemeProvider>
        <Route />
      </ThemeProvider>
    </div>
  );
}

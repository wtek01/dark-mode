import React, { useEffect } from "react";
import "./styles.css";
import { ThemeProvider, useTheme } from "./theme-context";

const App = () => (
  <ThemeProvider>
    <Main />
  </ThemeProvider>
);

const Main = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className="App">
      <h1>React Dark Mode Example</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default App;

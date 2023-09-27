import Router from "./Router";
import "./App.css";
import { GlobalStyle } from "./style";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
      <ThemeBtn toggleTheme={toggleTheme} isDark={isDark} />
    </ThemeProvider>
  );
}

export default App;

import Router from "./Router";
import "./App.css";
import { GlobalStyle } from "./style";
import { ReactQueryDevtools } from "react-query/devtools";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDarkState } from "./atom";

function App() {
  const isDark = useRecoilValue(isDarkState);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools />
      <ThemeBtn />
    </ThemeProvider>
  );
}

export default App;

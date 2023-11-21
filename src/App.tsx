import Router from "./Router";
import "./App.css";
import { Main } from "./style/Main";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDarkState, isSideActiveState } from "./atom";
import SideMenu from "./components/SideMenu";
import { GlobalStyle } from "./style/GlobalStyle";
// import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const isDark = useRecoilValue(isDarkState);
  const isSideActive = useRecoilValue(isSideActiveState);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <SideMenu />
      <Main style={{ marginLeft: isSideActive ? "250px" : 0 }}>
        <Router />
      </Main>
      {/* <ReactQueryDevtools /> */}
    </ThemeProvider>
  );
}

export default App;

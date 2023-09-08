import Router from "./Router";
import "./App.css";
import { GlobalStyle } from "./style";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;

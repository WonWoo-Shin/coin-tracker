import Router from "./Router";
import "./App.css";
import { GlobalStyle } from "./style";
import { QueryClient, QueryClientProvider } from "react-query";

const qureyClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={qureyClient}>
        <GlobalStyle />
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;

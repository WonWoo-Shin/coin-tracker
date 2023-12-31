import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Header from "./components/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/:coinId`}>
          <Coin />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`}>
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

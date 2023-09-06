import {
  Link,
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import {
  Container,
  Description,
  Tabs,
  Tab,
  Header,
  Overview,
  Title,
} from "../style";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Price from "./Price";
import Chart from "./Chart";

interface CoinParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const { coinId } = useParams<CoinParams>();
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState<InfoData>();
  const [price, setPrice] = useState<PriceData>();
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  const fetchCoin = async () => {
    const infoData = await (
      await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
    ).json();
    const priceData = await (
      await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
    ).json();
    setIsLoading(false);
    setInfo(infoData);
    setPrice(priceData);
  };
  useEffect(() => {
    fetchCoin();
  }, []);
  return (
    <Container>
      <Header>
        <Title>
          {state?.name ? state.name : isLoading ? "WAIT..." : info?.name}
        </Title>
      </Header>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Overview>
            <div>
              <span>RANK</span>
              <span>{info?.rank}</span>
            </div>
            <div>
              <span>SYMBOL</span>
              <span>{info?.symbol}</span>
            </div>
            <div>
              <span>OPEN SOURCE</span>
              <span>{info?.open_source ? "YES" : "NO"}</span>
            </div>
          </Overview>
          <Description>{info?.description}</Description>
          <Overview>
            <div>
              <span>TOTAL SUPPLY</span>
              <span>{price?.total_supply}</span>
            </div>
            <div>
              <span>MAX SUPPLY</span>
              <span>{price?.max_supply}</span>
            </div>
          </Overview>
          <Tabs>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>PRICE</Link>
            </Tab>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>CHART</Link>
            </Tab>
          </Tabs>
          <Switch>
            <Route path={"/:coinId/price"}>
              <Price />
            </Route>
            <Route path={"/:coinId/chart"}>
              <Chart />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}

export default Coin;

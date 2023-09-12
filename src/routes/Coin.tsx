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
  GoHome,
} from "../style";
import Loading from "../components/Loading";
import Price from "./Price";
import Chart from "./Chart";
import { useQuery } from "react-query";
import { fetchInfo, fetchPrice } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
  const { state } = useLocation<RouteState>();
  const { isLoading: infoLoading, data: info } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchInfo(coinId)
  );
  const { isLoading: priceLoading, data: price } = useQuery<PriceData>(
    ["price", coinId],
    () => fetchPrice(coinId)
  );
  const isLoading = infoLoading || priceLoading;
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  return (
    <Container>
      <Header>
        <GoHome>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </GoHome>
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
              <span>PRICE</span>
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
            <Tab $isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>CHART</Link>
            </Tab>
            <Tab $isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>PRICE</Link>
            </Tab>
          </Tabs>
          <Switch>
            <Route path={"/:coinId/chart"}>
              <Chart coinId={coinId} />
            </Route>
            <Route path={"/:coinId/price"}>
              <Price />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}

export default Coin;

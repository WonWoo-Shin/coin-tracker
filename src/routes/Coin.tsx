import {
  Link,
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Container, Box, Error } from "../style/Main";
import Loading from "../components/Loading";
import Price from "./Price";
import Chart from "./Chart";
import { useQuery } from "react-query";
import { fetchInfo, fetchPrice } from "../api";
import {
  Description,
  InfoContainer,
  Overview,
  OverviewTop,
  Tab,
  Tabs,
  Title,
} from "../style/CoinDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

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
  error: string;
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
  error: string;
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
  const ERROR_MESSAGE = "id not found";
  const isError =
    info?.error === ERROR_MESSAGE || price?.error === ERROR_MESSAGE;
  const priceMatch = useRouteMatch(`${process.env.PUBLIC_URL}/:coinId/price`);
  const chartMatch = useRouteMatch(`${process.env.PUBLIC_URL}/:coinId/chart`);
  return (
    <Container>
      {isError ? (
        <Error>
          <FontAwesomeIcon icon={faFaceSadTear} fontSize={"200px"} />
          <div>404 Not Found</div>
        </Error>
      ) : (
        <>
          <Box>
            <Title>{state?.name ?? info?.name}</Title>
            {isLoading ? (
              <Loading />
            ) : (
              <InfoContainer>
                <OverviewTop>
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
                </OverviewTop>
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
                <Description>
                  <p>{info?.description}</p>
                </Description>
              </InfoContainer>
            )}
          </Box>
          <Box>
            <InfoContainer>
              <Tabs>
                <Tab $isActive={chartMatch !== null}>
                  <Link to={`${process.env.PUBLIC_URL}/${coinId}/chart`}>
                    CHART
                  </Link>
                </Tab>
                <Tab $isActive={priceMatch !== null}>
                  <Link to={`${process.env.PUBLIC_URL}/${coinId}/price`}>
                    PRICE
                  </Link>
                </Tab>
              </Tabs>
              <Switch>
                <Route path={`${process.env.PUBLIC_URL}/:coinId/chart`}>
                  <Chart coinId={coinId} />
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/:coinId/price`}>
                  <Price coinId={coinId} />
                </Route>
              </Switch>
            </InfoContainer>
          </Box>
        </>
      )}
    </Container>
  );
}

export default Coin;

import { useLocation, useParams } from "react-router-dom";
import { Container, Header, Title } from "../style";
import { useState } from "react";
import Loading from "../components/Loading";

interface CoinParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

function Coin() {
  const { coinId } = useParams<CoinParams>();
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useLocation<RouteState>();
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading"}</Title>
      </Header>
      {isLoading ? <Loading /> : null}
    </Container>
  );
}

export default Coin;

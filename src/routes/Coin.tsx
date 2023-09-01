import { useLocation, useParams } from "react-router-dom";
import { Container, Header, Title } from "../style";
import { useState } from "react";

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
      {isLoading ? <h1>Loading...</h1> : null}
    </Container>
  );
}

export default Coin;

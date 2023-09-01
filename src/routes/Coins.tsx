import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Coin, CoinsList, Container, Header, Title } from "../style";

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchCoins = async () => {
    const response = await axios.get("https://api.coinpaprika.com/v1/coins");
    const { data } = response;
    setCoins(data.slice(0, 100));
    setIsLoading(false);
  };
  useEffect(() => {
    fetchCoins();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />{" "}
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;

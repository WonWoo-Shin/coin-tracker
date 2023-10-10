import { Link } from "react-router-dom";
import {
  Box,
  Coin,
  CoinImg,
  CoinList,
  CoinsCotainer,
  Container,
  Header,
  Logo,
} from "../style";
import Loading from "../components/Loading";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import mainLogo from "../img/logo.png";

interface ICoins {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading, data: coins } = useQuery<ICoins[]>("coins", fetchCoins);
  return (
    <>
      <Header></Header>
      <Container>
        <Box>
          {isLoading ? (
            <Loading />
          ) : (
            <CoinsCotainer>
              <CoinList>
                {coins?.slice(0, 100).map((coin) => (
                  <Coin>
                    <Link
                      to={{
                        pathname: `/${coin.id}`,
                        state: { name: coin.name },
                      }}
                    >
                      <CoinImg>
                        <img
                          src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                          alt=""
                        />
                      </CoinImg>
                      <span>{coin.name}</span>
                    </Link>
                  </Coin>
                ))}
              </CoinList>
            </CoinsCotainer>
          )}
        </Box>
        <Box>
          <Logo src={mainLogo} alt="" />
        </Box>
      </Container>
    </>
  );
}

export default Coins;

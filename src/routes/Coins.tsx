import { Link } from "react-router-dom";
import { Box, Container, Logo } from "../style/Main";
import Loading from "../components/Loading";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { useRecoilValue } from "recoil";
import { isDarkState } from "../atom";
import { Coin, CoinImg, CoinList, CoinsCotainer } from "../style/CoinList";

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
  const isDark = useRecoilValue(isDarkState);
  return (
    <Container>
      <Box>
        {isLoading ? (
          <Loading />
        ) : (
          <CoinsCotainer>
            <CoinList>
              {coins?.slice(0, 100).map((coin) => (
                <Coin key={coin.id}>
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
        {
          <Logo
            src={isDark ? "/logo_dark.png" : "/logo_light.png"}
            alt=""
            height="100px"
          />
        }
      </Box>
    </Container>
  );
}

export default Coins;

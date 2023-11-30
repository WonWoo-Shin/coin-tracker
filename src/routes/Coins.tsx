import { Link } from "react-router-dom";
import { Box, Container, Logo } from "../style/Main";
import Loading from "../components/Loading";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { useRecoilValue } from "recoil";
import { isDarkState } from "../atom";
import {
  Coin,
  CoinImg,
  CoinList,
  CoinsCotainer,
  Search,
} from "../style/CoinList";
import { useState } from "react";

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
  const [search, setSearch] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };
  return (
    <Container>
      <Box>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Search>
              <input type="text" placeholder="Search" onChange={onChange} />
            </Search>
            <CoinsCotainer>
              <CoinList>
                {coins
                  ?.slice(0, 100)
                  .filter((coin) =>
                    search === ""
                      ? coin
                      : coin.name.toLowerCase().includes(search.toLowerCase())
                      ? coin
                      : null
                  )
                  .map((coin) => (
                    <Coin key={coin.id}>
                      <Link
                        to={{
                          pathname: `${process.env.PUBLIC_URL}/${coin.id}/chart`,
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
          </>
        )}
      </Box>
      <Box>
        {
          <Logo
            src={
              isDark
                ? `${process.env.PUBLIC_URL}/logo_dark.png`
                : `${process.env.PUBLIC_URL}/logo_light.png`
            }
            alt=""
            height="100px"
          />
        }
      </Box>
    </Container>
  );
}

export default Coins;

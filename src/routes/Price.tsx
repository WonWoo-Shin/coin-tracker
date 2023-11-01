import { useQuery } from "react-query";
import { fetchPrice } from "../api";
import Loading from "../components/Loading";
import { HighCost, PriceContainer } from "../style";
import CostItem from "../components/CostItem";

interface PriceProps {
  coinId: string;
}

interface IPrice {
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data: price } = useQuery<IPrice>(["price", coinId], () =>
    fetchPrice(coinId)
  );
  const USD = price?.quotes?.USD;
  const date = USD?.ath_date as string;
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <PriceContainer>
          <HighCost>
            <span>
              {new Date(date).toLocaleString()} <br />
              최고가 달성
            </span>
            <span>${USD?.ath_price.toFixed(3)}</span>
          </HighCost>
          <CostItem time="1시간" price={USD?.percent_change_1h as number} />
          <CostItem time="6시간" price={USD?.percent_change_6h as number} />
          <CostItem time="12시간" price={USD?.percent_change_12h as number} />
          <CostItem time="24시간" price={USD?.percent_change_24h as number} />
          <CostItem time="7일" price={USD?.percent_change_7d as number} />
          <CostItem time="30일" price={USD?.percent_change_30d as number} />
        </PriceContainer>
      )}
    </>
  );
}

export default Price;

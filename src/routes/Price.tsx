import { useQuery } from "react-query";
import { fetchCoinHistory, fetchPrice } from "../api";
import Loading from "../components/Loading";
import { CostItem, HighCost, PriceContainer } from "../style";

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
          <CostItem></CostItem>
          <CostItem></CostItem>
          <CostItem></CostItem>
          <CostItem></CostItem>
          <CostItem></CostItem>
          <CostItem></CostItem>
        </PriceContainer>
      )}
    </>
  );
}

export default Price;

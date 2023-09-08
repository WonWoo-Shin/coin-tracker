import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import Loading from "../components/Loading";

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery(["history", coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(data);
  return isLoading ? <Loading /> : <h1>Chart</h1>;
}

export default Chart;

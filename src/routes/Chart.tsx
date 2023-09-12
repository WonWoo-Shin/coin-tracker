import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import Loading from "../components/Loading";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistory {
  time_open: string;
  open: string;
  high: string;
  low: string;
  close: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistory[]>(["history", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: data?.map((price) => {
                return {
                  x: new Date(price.time_open),
                  y: [
                    Number(price.open),
                    Number(price.high),
                    Number(price.low),
                    Number(price.close),
                  ],
                };
              }) as any,
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#DF7D46",
                  downward: "#3C90EB",
                },
              },
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
            xaxis: {
              type: "datetime",
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;

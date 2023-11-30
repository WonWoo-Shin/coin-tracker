import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import Loading from "../components/Loading";
import ApexChart from "react-apexcharts";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import { ChartContainer } from "../style/Price";
import { Error } from "../style/Main";

interface ChartProps {
  coinId: string;
}

interface IHistory {
  time_open: number;
  open: string;
  high: string;
  low: string;
  close: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistory[]>(["history", coinId], () =>
    fetchCoinHistory(coinId)
  );
  const isError = data?.length === undefined;
  const theme = useContext(ThemeContext);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error>
          <FontAwesomeIcon icon={faFaceSadTear} fontSize={"80px"} />
          <div>Chart data not found</div>
        </Error>
      ) : (
        <ChartContainer>
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
              chart: {
                height: "auto",
                width: 500,
                toolbar: {
                  show: false,
                },
                foreColor: theme?.textColor,
                background: theme?.tabColor,
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
        </ChartContainer>
      )}
    </>
  );
}

export default Chart;

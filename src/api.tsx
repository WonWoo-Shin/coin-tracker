export const fetchCoins = () =>
  fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );

export const fetchInfo = (coinId: string) =>
  fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`).then((response) =>
    response.json()
  );

export const fetchPrice = (coinId: string) =>
  fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`).then((response) =>
    response.json()
  );

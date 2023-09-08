const BASED_URL = "https://api.coinpaprika.com/v1";

export const fetchCoins = () =>
  fetch(`${BASED_URL}/coins`).then((response) => response.json());

export const fetchInfo = (coinId: string) =>
  fetch(`${BASED_URL}/coins/${coinId}`).then((response) => response.json());

export const fetchPrice = (coinId: string) =>
  fetch(`${BASED_URL}/tickers/${coinId}`).then((response) => response.json());

export const fetchCoinHistory = (coinId: string) =>
  fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`).then(
    (response) => response.json()
  );

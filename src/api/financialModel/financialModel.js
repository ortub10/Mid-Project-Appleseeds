export const fetchNasdaqStocks = async () => {
  const response = await fetch(
    "https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=90115d197c5821905e19a65e7c1b1ea6"
  );
  const nasdaqStocks = await response.json();
  return nasdaqStocks;
};

export const fetchDatesStock = async (symbol) => {
  const response = await fetch(
    `https://financialmodelingprep.com/api/v3/technical_indicator/daily/${symbol}?period=10&type=ema&apikey=90115d197c5821905e19a65e7c1b1ea6`
  );
  const datesStock = await response.json();
  return datesStock;
};

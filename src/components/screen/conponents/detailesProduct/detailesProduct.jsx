import { useEffect, useState } from "react";
import AddProduct from "./components/addProduct/AddProduct";
import "./detailesProduct.css";
const DetailesProduct = ({
  match: {
    params: { symbol },
  },
}) => {
  const [dates, setDates] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await fetch(
          `https://financialmodelingprep.com/api/v3/technical_indicator/daily/${symbol}?period=10&type=ema&apikey=90115d197c5821905e19a65e7c1b1ea6`
        );
        const data = await response.json();
        setDates(data.slice(0, 10));
        setIsLoad(false);
      } catch (e) {
        console.log(e);
      }
    };
    callApi();
  }, [symbol]);

  return (
    <>
      {isLoad ? (
        <div className="spinner"></div>
      ) : (
        <div>
          <button onClick={() => setButtonPopup(true)}>Save</button>
          <AddProduct
            symbol={symbol}
            trigger={buttonPopup}
            setTrigger={setButtonPopup}
          />
          <div className="contain_detailes">
            <h2>{symbol}</h2>
            <table>
              <thead>
                <tr>
                  <th>date</th>
                  <th>Open</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>Close</th>
                  <th>Volume</th>
                  <th>Ema</th>
                </tr>
              </thead>
              <tbody>
                {dates.map((item) => {
                  return (
                    <tr key={item.date}>
                      <td>{item.date}</td>
                      <td>{item.open}</td>
                      <td>{item.high}</td>
                      <td>{item.low}</td>
                      <td>{item.close}</td>
                      <td>{item.volume}</td>
                      <td>{item.ema}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailesProduct;

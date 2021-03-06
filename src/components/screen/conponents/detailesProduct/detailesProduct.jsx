import { useEffect, useState } from "react";
import AddProduct from "./components/addProduct/AddProduct";
import { NavLink } from "react-router-dom";
import "./detailesProduct.css";
import { fetchDatesStock } from "../../../../api/financialModel/financialModel";
import Graph from "./components/graph/graph";

const DetailesProduct = ({
  match: {
    params: { symbol },
  },
}) => {
  const [dates, setDates] = useState({
    pending: true,
    data: [],
    error: "",
  });

  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    const callApi = async () => {
      try {
        const datesStock = await fetchDatesStock(symbol);
        setDates({
          pending: false,
          data: datesStock.slice(0, 10).reverse(),
          error: "",
        });
      } catch (e) {
        setDates({
          pending: true,
          data: [],
          error: e,
        });
      }
    };
    callApi();
  }, [symbol]);

  if (dates.pending) return <div className="spinner"></div>;

  return (
    <div>
      <button className="save_btn" onClick={() => setButtonPopup(true)}>
        <i className="fa fa-save"></i> Save
      </button>
      <AddProduct
        symbol={symbol}
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
      />
      <div className="contain_detailes">
        <h2>{symbol}</h2>
        <Graph dates={dates.data} />
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
            {dates.data.map((item) => {
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
        <NavLink to="./">
          <button className="back_btn">
            Back <i className="fa fa-angle-double-left"></i>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default DetailesProduct;

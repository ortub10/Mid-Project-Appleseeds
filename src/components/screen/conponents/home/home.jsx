import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { myContext } from "../../screen";
import "./home.css";

const Home = () => {
  const [inputSearch, setInputSearh] = useState("");
  const { productsData } = useContext(myContext);
  return (
    <div className="contain_products">
      <div className="contain_search">
        <label htmlFor="">Search: </label>
        <input
          placeholder="Enter Symbol"
          type="text"
          value={inputSearch}
          onChange={(evt) => setInputSearh(evt.target.value)}
        />
      </div>

      <div className="table">
        <div className="header">Symbol</div>
        <div className="header">Name</div>
        <div className="header">sector</div>
        <div className="header">subSector</div>
        <div className="header">headQuarter</div>
        <div className="header">Type</div>
      </div>

      {productsData.map((product) => {
        if (
          product.symbol.toLowerCase().startsWith(inputSearch.toLowerCase())
        ) {
          return (
            <NavLink to={`./${product.symbol}`} key={product.symbol}>
              <div className="table">
                <div>{product.symbol}</div>
                <div>{product.name}</div>
                <div>{product.sector}</div>
                <div>{product.subSector}</div>
                <div>{product.headQuarter}</div>
                <div>Stock</div>
              </div>
            </NavLink>
          );
        }
        return "";
      })}
    </div>
  );
};

export default Home;

import { useContext, useState } from "react";
import { myContext } from "../../screen";
import "./detailesProduct.css";

const DetailesProduct = ({
  match: {
    params: { symbol },
  },
}) => {
  const { productsData } = useContext(myContext);
  const product = productsData.find((item) => item.symbol === symbol);

  return <></>;
};

export default DetailesProduct;

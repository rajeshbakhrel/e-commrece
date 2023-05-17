import React from "react";
import SingleCart from "./SingleCart";
import "../Style/GridView.css";

const GridView = ({ product }) => {
  return (
    <div className="full-grid-view-container">
      <div className="grid-view-single-cart">
        {product.map((currElem, id) => {
          return <SingleCart key={currElem.id} {...currElem} />;
        })}
      </div>
    </div>
  );
};

export default GridView;

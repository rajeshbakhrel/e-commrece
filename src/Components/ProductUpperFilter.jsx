import React from "react";
import { BsFillGrid1X2Fill, BsListColumnsReverse } from "react-icons/bs";
import "../Style/ProductUpperFilter.css";
import { useFilterContext } from "../Context/FilterContext";

const ProductUpperFilter = () => {
  const { grid_view, GridView, ListView, filter_products, Sorting } =
    useFilterContext();
  return (
    <div className="Header-product-full-container">
      <div className="product-gid-view">
        <p>
          <button onClick={GridView}>
            <BsFillGrid1X2Fill
              className={
                grid_view
                  ? "product-icon grid-view active-view"
                  : "product-icon grid-view"
              }
            />
          </button>
          <button onClick={ListView}>
            <BsListColumnsReverse
              className={
                !grid_view
                  ? "product-icon column-view  active-view"
                  : "product-icon column-view"
              }
            />
          </button>
        </p>
      </div>

      <div className="product-number">
        <p> {filter_products.length} total products</p>
      </div>

      <form className="product-price-search">
        <label htmlFor="short"></label>
        <select id="short" name="short" onClick={Sorting}>
          <option value="lowest">Price(Lowest)</option>
          <option disabled></option>
          <option value="highest">Price(Highest)</option>
          <option disabled></option>
          <option value="a-z">Name(a-z)</option>
          <option disabled></option>
          <option value="z-a">Name(z-a)</option>
          {/* <option disabled></option> */}
        </select>
      </form>
    </div>
  );
};

export default ProductUpperFilter;

import React from "react";
import { useFilterContext } from "../Context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductContainer = () => {
  const { grid_view, filter_products } = useFilterContext();
  // console.log(filter_products);
  // console.log(grid_view);

  if (grid_view === true) {
    return <GridView product={filter_products} />;
  } else {
    return <ListView product={filter_products} />;
  }
};

export default ProductContainer;

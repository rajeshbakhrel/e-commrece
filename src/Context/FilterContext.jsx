import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/FilterReducer";
import { useProductCustom } from "./ProductContex";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  Shorting_product: "lowest",
};

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { products } = useProductCustom();
  // console.log(products);

  const Sorting = (event) => {
    const setValue = event.target.value;
    // console.log(setValue);
    return dispatch({ type: "SHORTING-VALUE", payload: setValue });
  };

  useEffect(() => {
    dispatch({ type: "SHORT_VALUE", payload: products });
  }, [products, state.Shorting_product]);

  const GridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const ListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  // console.log(products);

  return (
    <FilterContext.Provider value={{ ...state, GridView, ListView, Sorting }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };

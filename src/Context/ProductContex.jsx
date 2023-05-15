import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/ProductReducer";
import FeatureProducts from "../Components/FeatureProducts";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],



  // forsingleproduct

  isSingleLoading: false,
  singleProduct: {},

  

};



const ProductContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const ProductProvider = ({ children }) => {

  
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProduct = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "FEATURE_API", payload: products });
              } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // forsingleproduct

  const getsingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SINGE_PRODUCT_API", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProduct(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, getsingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// custom hook
const useProductCustom = () => {
  return useContext(ProductContext);
};

//EXPORT
export { ProductProvider, ProductContext, useProductCustom };

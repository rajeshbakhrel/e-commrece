import FeatureProducts from "../Components/FeatureProducts";

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "FEATURE_API":
      const featureData = action.payload.filter((currElem) => {
        return currElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    // single product

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SINGE_PRODUCT_API":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SINGLE_ERROR":
      return {
        ...state,
        isError: true,
        isSingleLoading: false,
      };

    default:
      return state;
  }

};

export default ProductReducer;

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "SHORTING-VALUE":
      return {
        ...state,
        Shorting_product: action.payload,
      };

    case "SHORT_VALUE":
      let newShortData;

      const { filter_products, Shorting_product } = state;
      let tempShortProduct = [...filter_products];

      const shortingProducts = (a, b) => {
        if (Shorting_product === "lowest") {
          return a.price - b.price;
        }

        if (Shorting_product === "highest") {
          return b.price - a.price;
        }

        if (Shorting_product === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (Shorting_product === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newShortData = tempShortProduct.sort(shortingProducts);

      return {
        ...state,
        filter_products: newShortData,
      };
    default:
      return state;
  }
};

export default FilterReducer;

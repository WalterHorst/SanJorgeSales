const initialState = {
    allProducts: [],
    allProductsBackUp: []
  };
  
  const reducers = (state = initialState, action) => {
    switch (action.type) {
  
      case "ALL_PRODUCTS":
        return {
          ...state,
          allProducts: action.payload,
          allProductsBackUp: action.payload,
        };
  
      default:
        return { ...state };
      }
  };
  
  export default reducers;

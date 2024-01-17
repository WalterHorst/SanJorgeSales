const initialState = {
  allUsers: [],
  allProducts: [],
  allProductsBackUp: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "ALL_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
        allProductsBackUp: action.payload,
      };
    case "CREATE":
      return {
        ...state,
        allProducts: action.payload,
      };
    case "CREATE_USER":
      return {
        ...state,
        allUsers: action.payload,
      };
      
    default:
      return { ...state };
  }
};

export default reducer;



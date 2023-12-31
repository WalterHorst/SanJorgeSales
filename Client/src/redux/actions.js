import axios from "axios";

export const getAllProducts = () => {
  try {
    const endpoint = "http://localhost:3001/products/allProducts";
    return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      // console.log(data);
      dispatch({
        type: "ALL_PRODUCTS",
        payload: data,
      });
    };
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};

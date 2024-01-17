import axios from "axios";

export const getAllProducts = () => {
  try {
    const endpoint = "http://localhost:3001/product/allproducts";
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


export const createProducts = (product) => {
  try {
    const endpoint = "http://localhost:3001/product/create";
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, product);
      // console.log(data);
      dispatch({
        type: "CREATE",
        payload: data,
      });
    };
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};


export const createUser = ({ name, password, address, email }) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/user/create";
      const { data } = await axios.post(endpoint, { name, password, address, email });
      dispatch({
        type: "CREATE_USER",
        payload: data,
      });
    } catch (error) {
      throw error; // Lanzar el error para manejarlo en el componente
    }
  };
};



import axios from "axios";

export const getProductById = async (id) => {
  const response = await axios.get(`/api/product/${id}`);
  return response.data;
};
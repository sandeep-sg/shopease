import axios from "axios";

export const getProductsByCategory = async (id) => {
  try {
    if (!id) return "id not exist";
    const response = await axios.get(`/api/product/byCategory/${id}`);
    return response.data;
  } catch (error) {
    console.log("Failed to load category", error);
  }
};

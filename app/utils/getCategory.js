import axios from "axios";

export const getCategory = async () => {
  const response = await axios.get("/api/category");
  return response.data;
};
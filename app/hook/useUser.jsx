
"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getUser = async () => {
  const res = await axios.get("/api/profile", { withCredentials: true });
  return res.data.user;
};
 const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: 5 * 60 * 1000, // 5 minutes cache
  });
};
export default useUser

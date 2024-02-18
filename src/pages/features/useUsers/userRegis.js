import { axiosInstance } from "@/pages/lib/axiosInstance";
import { useEffect } from "react";

export const registerUser = async () => {
  try {
    const fetchApiRegister = await axiosInstance.post("/api/register");

    return fetchApiRegister;
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    fetchApiRegister();
  }, []);
};

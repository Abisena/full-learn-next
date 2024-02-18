import { axiosInstance } from "@/pages/lib/axiosInstance";
import { useEffect, useState } from "react";

export const getUsersData = async () => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  try {
    const fetchUsers = await axiosInstance.post("/users/register");

    console.log(fetchUsers);
  } catch (error) {
    console.error(error);
  }

  useEffect(() => {
    getUsersData();
  }, []);
};

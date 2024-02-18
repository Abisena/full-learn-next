import React from "react";
import { useRouter } from "next/router";
import UserLogin from "./components/reslog/loginUser";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/");
  };

  return <UserLogin onLogin={handleLogin} />;
}

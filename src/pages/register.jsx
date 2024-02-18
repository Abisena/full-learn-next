import React from "react";
import { useRouter } from "next/router";
import RegisterForm from "./components/reslog/regisUser";

export default function Register() {
  const router = useRouter();

  const handleRegis = () => {
    router.push("/");
  };

  return <RegisterForm onLogin={handleRegis} />;
}

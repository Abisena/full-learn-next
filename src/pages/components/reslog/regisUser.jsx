import React, { useState } from "react";
import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

const Register = async (userData) => {
  try {
    const res = await fetch(process.env.BASE_URL + "/reslog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const json = await res.json();
    return json;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async () => {
    const userData = {
      username,
      email,
      password,
    };
    try {
      const response = await Register(userData);
      console.log("Registration successful", response);
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <Container>
      <Center>
        <Heading>Register Form</Heading>
      </Center>
      <FormControl mb={10}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </FormControl>
      <Center>
        <Button onClick={handleSubmit}>Submit</Button>
      </Center>
    </Container>
  );
}

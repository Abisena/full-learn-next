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

export default function UserLogin() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);

  return (
    <Container>
      <Center>
        <Heading>Login Form</Heading>
      </Center>
      <FormControl onSubmit={handleInputChange} mb={10}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={input} onChange={handleInputChange} />
        <FormLabel>Password</FormLabel>
        <Input type="email" value={input} onChange={handleInputChange} />
      </FormControl>
      <Center>
        <Button type="submit">Submit</Button>
      </Center>
    </Container>
  );
}

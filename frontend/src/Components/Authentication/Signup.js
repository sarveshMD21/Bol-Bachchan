import React from "react";
import { FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
const Signup = () => {
  const [name, setName] = useState(null);
  return (
    <VStack spacing="5px">
      <FormControl>
        <FormLabel></FormLabel>
        <Input
          //value={email}
          type="email"
          placeholder="Enter Your Email Address"
        />
      </FormControl>
    </VStack>
  );
};

export default Signup;

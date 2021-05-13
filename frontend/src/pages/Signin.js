import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions.js';
import { Box, Button, Input, Center, FormLabel, FormControl, Text } from '@chakra-ui/react';
import '../css/form.css';

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" className="SigninForm" marginTop="10px" marginBottom="10px">

      {/* Sign In is Email and PW 
      Link to forgot pw
      Link to register if not alreay
      */}

      <FormControl className="form" onSubmit={submitHandler}>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          type="email"
          id="email"
          placeholder="Enter email"
          required
          onChange={(e) => setEmail(e.target.value)}
        ></Input>

        <br></br>

        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          id="password"
          placeholder="Enter password"
          required
          onChange={(e) => setPassword(e.target.value)}
        ></Input>

        {/* Need to have it link to a generate new PW page or popup */}

        <Text>
          Forgot Password
        </Text>

        <br></br>

        <Center>
          <Button
            mt={4}
            colorScheme="red"
            type="submit"
          >
            Sign In
          </Button>
        </Center>

        <Center>
          <Text>
            New customer? 
            <Link to="/Register" style={{color: "#ff0000" }}> Create your account</Link>
          </Text>

        </Center>

      </FormControl>

    </Box>


  );
}
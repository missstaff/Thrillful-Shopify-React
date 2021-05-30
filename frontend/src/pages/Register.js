import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { register, selectUser } from '../redux/userSlice';
import LoadingBox from '../components/LoadingBox.js';
import '../css/form.css';
import {
  Box,
  Button,
  Input,
  Center,
  FormLabel,
  FormControl,
  Text
} from '@chakra-ui/react';


export const Register = () => {

  const history = useHistory();
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  /*WIP*/
  /*SUPPOSED TO GET USERS LOCATION AND CREATE THE REDIRECT ~ NOT FULLY IMPLIMENTED*/
  const redirect = history.location.search
    ? history.location.search.split('=')[1]
    : '/';

  const { user } = useSelector(selectUser);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match")
    } else {
      dispatch(register(first_name, last_name, username, email, password));
    }
  };

  useEffect(() => {
    if (user.info) {
      history.push(redirect);
    }
  }, [history, redirect, user.info]);

  // className="SigninForm"
  return (
    <Box maxW="lg" borderRadius="lg" overflow="hidden" className="registerForm" marginTop="10px" marginBottom="5rem">
      <Center fontSize="25px">
        Register
      </Center>
      {/* Sign In is Email and PW 
    Link to forgot pw
    Link to register if not alreay
    */}
      {user.status === 'loading' && <LoadingBox></LoadingBox>}
      {/* {loading && <LoadingBox></LoadingBox>} */}
      {/* Putting messages in front to be used anywhere */}
      {/* {error && <MessageBox variant="danger">{error}</MessageBox>} */}

      <FormControl className="form">

        <FormLabel htmlFor="first_name">First Name</FormLabel>
        <Input
          type="text"
          id="first_name"
          placeholder="Enter first name"
          required
          onChange={(e) => setFirstName(e.target.value)}
        ></Input>

        <br></br>

        <FormLabel htmlFor="last_name">Last Name</FormLabel>
        <Input
          type="text"
          id="last_name"
          placeholder="Enter last name"
          required
          onChange={(e) => setLastName(e.target.value)}
        ></Input>

        <br></br>

        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          type="text"
          id="username"
          placeholder="Enter username"
          required
          onChange={(e) => setUsername(e.target.value)}
        ></Input>

        <br></br>

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

        <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></Input>

        {/* Need to have it link to a generate new PW page or popup */}

        <Text>
          Forgot Password
        </Text>

        <br></br>

        <Center>
          <Button
            mt={4}
            color="white" 
            backgroundColor="#ff0000"
            _focus="none"
            _hover={{color: "none"}}
            _active={{ bg: "none" }}
            border="none"
            type="submit"
            onClick={submitHandler}
          >
            Register
        </Button>
        </Center>

        <Center>
          <Text>
            Already have an account?
          <Link to="/Signin" style={{ color: "#ff0000" }}>Login</Link>
          </Text>
        </Center>

      </FormControl>
    </Box>
  )
}

export default Register

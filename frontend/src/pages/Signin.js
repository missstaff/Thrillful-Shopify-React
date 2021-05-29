import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signin, selectUser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
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


export const Signin = () => {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  /*WIP*/
  /*SUPPOSED TO GET USERS LOCATION AND CREATE THE REDIRECT ~ NOT FULLY IMPLIMENTED*/
  const redirect = history.location.search
    ? history.location.search.split('=')[1]
    : '/';

  const { user } = useSelector(selectUser);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (user.info) {
      history.push(redirect);
    }
  }, [history, redirect, user.info]);


  return (
    <Box maxW="lg" borderRadius="lg" overflow="hidden" className="signinForm" marginTop="10px" marginBottom="10px">
      <Center fontSize="25px">
        Sign In
      </Center>
      {/* Sign In is Email and PW 
    Link to forgot pw
    Link to register if not alreay
    */}
      {/* {loading && <LoadingBox></LoadingBox>} */}
      {user.status === 'loading' && <LoadingBox></LoadingBox>}

      <FormControl className="form">
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
            color="white" backgroundColor="#ff0000"
            type="submit"
            _focus="none"
            _hover={{color: "none"}}
            _active={{ bg: "none" }}
            border="none"
            onClick={submitHandler}
          >
          Sign In
        </Button>
        </Center>

        <Center>
          <Text>
            New customer?
          <Link to="/Register" style={{ color: "#ff0000" }}> Create your account</Link>
          </Text>
        </Center>

      </FormControl>
    </Box>
  )
}

export default Signin

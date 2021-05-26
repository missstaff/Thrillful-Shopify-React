import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signin, selectUser } from '../redux/userSlice';
// import { signin } from '../actions/userActions.js';
import { Box, Button, Input, Center, FormLabel, FormControl, Text } from '@chakra-ui/react';
import MessageBox from '../components/MessageBox.js';
import LoadingBox from '../components/LoadingBox.js';
import '../css/form.css';


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
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
    // if(!userInfo) {
    //   alert("Invalid username or password")
    // }
  };

  useEffect(() => {
    if (user.info) {
    //  if (userInfo) {
        history.push(redirect);
    }
  }, [history, redirect, user.info]);


  // useEffect(() => {
  //   try {
  //   if (userInfo) {
  //    history.push('/all-products')
  //   } 
  //   } catch (e) {
  //     alert(e.messagae);
  //   }
  //   }, [history, userInfo]);




  return (
    <Box maxW="lg" borderRadius="lg"  overflow="hidden" className="signinForm" marginTop="10px" marginBottom="10px">
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
            colorScheme="red"
            type="submit"
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

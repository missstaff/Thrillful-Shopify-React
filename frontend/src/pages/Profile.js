import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { update, selectUser } from "../redux/userSlice";
import LoadingBox from "../components/LoadingBox.js";
import "../css/form.css";
import {
  Box,
  Button,
  Input,
  Center,
  FormLabel,
  FormControl,
  Text,
} from "@chakra-ui/react";

const Profile = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { user } = useSelector(selectUser);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match");
    } else {
      dispatch(update(first_name, last_name, username, email, password));
    }
  };

  return (
    <Box
      maxW="lg"
      borderRadius="lg"
      overflow="hidden"
      className="registerForm"
      marginTop="10px"
      marginBottom="5rem"
    >
      <Center fontSize="25px">Update Profile</Center>
      {user.status === "loading" && <LoadingBox></LoadingBox>}
      {/* {loading && <LoadingBox></LoadingBox>} */}
      {/* Putting messages in front to be used anywhere */}
      {/* {error && <MessageBox variant="danger">{error}</MessageBox>} */}

      <FormControl className="form">
        <FormLabel htmlFor="first_name">First Name</FormLabel>
        <Input
          type="text"
          id="first_name"
          placeholder="Enter first name"
          onChange={(e) => setFirstName(e.target.value)}
        ></Input>

        <br></br>

        <FormLabel htmlFor="last_name">Last Name</FormLabel>
        <Input
          type="text"
          id="last_name"
          placeholder="Enter last name"
          onChange={(e) => setLastName(e.target.value)}
        ></Input>

        <br></br>

        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        ></Input>

        <br></br>

        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          type="email"
          id="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>

        <br></br>

        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          id="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>

        <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></Input>

        <br></br>

        <Center>
          <Button
            mt={4}
            color="white"
            backgroundColor="#ff0000"
            _focus="none"
            _hover={{ color: "none" }}
            _active={{ bg: "none" }}
            border="none"
            type="submit"
            onClick={submitHandler}
          >
            Update
          </Button>
        </Center>
      </FormControl>
    </Box>
  );
};

export default Profile;

// import React, { useState } from "react";
// import { Box, Button, Input, Center, FormLabel, FormControl, Text , Form} from '@chakra-ui/react';
// //import Signin from 'Signin.js';
// import { NavLink } from "react-router-dom";
// //import customerRouter from "../../backend/routers/customerRouter";
// //form control acts as input similar to vanilla js input tag. this is how we get the data from the webpage. :D
// //firstname lastname email passowrd

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const[firstname,setFirstName] = useState("");
//   const[lastname,setLastName] = useState("");
//   function validateForm() {
//     return email.length > 0 && password.length > 0&&firstname.length>0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <Box className="Login">
//       <Form onSubmit={handleSubmit} className="form">

//       <FormControl size="lg" controlId="firstname">
//           <FormLabel>First Name</FormLabel>
//           <Input
//             type="firstname"
//             value={firstname}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </FormControl>
//         <FormControl size="lg" controlId="lastname">
//           <FormLabel>Last Name</FormLabel>
//           <Input
//             type="lastname"
//             value={lastname}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </FormControl>
//         <FormControl size="lg" controlId="email">
//           <FormLabel>Email</FormLabel>
//           <Input
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </FormControl>
//         <FormControl size="lg" controlId="password">
//           <FormLabel>Password</FormLabel>
//           <Input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </FormControl>
//         <FormControl size="lg" controlId="password2">
//           <FormLabel>Confirm Password</FormLabel>
//           <Input
//             type="password2"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </FormControl>
//         { <Button block size="lg" type="submit" disabled={!validateForm()}> 
//           </Button>}
//         <NavLink disabled={false}  to="/">Register here</NavLink>
      
//         <p> Already have an account? <NavLink to="/Register">Login</NavLink></p>
//       </Form>
//     </Box>
//   );
// }
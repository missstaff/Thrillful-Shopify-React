// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// // import Button from "react-bootstrap/Button";
// //import "./Login.css";
// import { NavLink } from "react-router-dom";
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
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>

//       <Form.Group size="lg" controlId="firstname">
//           <Form.Label>First Name</Form.Label>
//           <Form.Control
//             type="firstname"
//             value={firstname}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="lastname">
//           <Form.Label>Last Name</Form.Label>
//           <Form.Control
//             type="lastname"
//             value={lastname}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password2">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="password2"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         {/* <Button block size="lg" type="submit" disabled={!validateForm()}> 
//           </Button>*/}
//         <NavLink disabled={false}  to="/">Register here</NavLink>
      
//         <p> Already have an account? <NavLink to="/Register">Login</NavLink></p>
//       </Form>
//     </div>
//   );
// }
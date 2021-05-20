import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, Center, FormLabel, FormControl, Text } from '@chakra-ui/react';
import '../css/form.css';

const Contact = () => {

    const [customer, setCustomer] = useState({
        fullName: '',
        email: '',
        message: ''
    });


//Gets current customer which is an empty string. 
//e.target.name is on every input field to match the state varaible 
//e.target.value is the input the customer puts in
    const handleChange = (e) => {
        setCustomer({
          ...customer,
          [e.target.name]: e.target.value,
        })
        // console.log('INSIDE HANDLE CHANGE');
        // console.log(customer.fullName);
    }

    // console.log('OUTSIDE HANDLE CHANGE');
    // console.log(customer.fullName);


    //prevent default prevents html from refreshing 
    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(customer);
        axios.post('http://localhost:5000/api/contact', customer)
        // axios({
        //     method: "POST",
        //     url: "http://localhost:3002/send",
        //     data: this.state
        // }).then((response) => {
        //     if (response.data.status === 'success') {
        //         alert("Message Sent.");
        //         this.resetForm()
        //     } else if (response.data.status === 'fail') {
        //         alert("Message failed to send.")
        //     }
        // })
    }


//Handel submit in form tag and submit on type for the buttonIf not in the form element it can be placed in the button element
    return (
        <Box maxW="lg" borderWidth="5px" borderRadius="lg" overflow="hidden" className="contactForm" marginTop="10px" marginBottom="10px">
            <Center fontSize="25px">
                Contact Us
            </Center>
              <form onSubmit={handleSubmit}>
              <FormControl id="fullName" className="contactForm" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input onChange={handleChange} name='fullName' placeholder="First name" />
              </FormControl>

              <FormControl id="email" className="contactForm" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input onChange={handleChange} name='email' type="email" />

              </FormControl>

              <FormControl id="message" isRequired maxlength="1000">
                  <FormLabel> Message </FormLabel>
                  <Input onChange={handleChange} name='message' placeholder="Message for Thrillful" />

              </FormControl>
              <Center>
                  <Button
                      mt={4}
                      colorScheme="red"
                      type='submit'
                      // type="button"
                      // onClick={handleSubmit}
                  >
                      Send
                  </Button>
              </Center>
              </form>
        </Box>
    )
}

export default Contact;





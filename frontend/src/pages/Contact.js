import React from 'react';
import axios from 'axios';
import { Box, Button, Input, Center, FormLabel, FormControl, Text } from '@chakra-ui/react';
import '../css/form.css';

const Contact = () => {

    this.state = {
        name: '',
        email: '',
        message: ''
    }


    // const handleChange = (e) => {
    //     setSize(e.target.value);
    //     console.log("event:", e.target.value)
    // }    

    const handleSubmit= (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

  const resetForm= () => {
        this.setState({ name: '', email: '', message: '' })
    }


    return (
        <Box maxW="lg" borderWidth="5px" borderRadius="lg" overflow="hidden" className="contactForm" marginTop="10px" marginBottom="10px">
            <Center fontSize="25px">
                Contact Us
            </Center>

            <FormControl id="fullName" className="contactForm" isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input placeholder="First name" />
            </FormControl>

            <FormControl id="email" className="contactForm" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />

            </FormControl>

            <FormControl id="message" isRequired maxlength="1000">
                <FormLabel> Message </FormLabel>
                <Input placeholder="Message for Thrillful" />

            </FormControl>


            <Center>
                <Button
                    mt={4}
                    colorScheme="red"
                    type="submit"
                >
                    Send
          </Button>
            </Center>


        </Box>
    )
}

export default Contact





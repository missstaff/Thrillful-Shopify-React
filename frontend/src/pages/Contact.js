import React, { useState } from 'react';
import axios from 'axios';
import { success, error, warning, reset } from '../redux/messageSlice';
import { useDispatch } from 'react-redux';
import '../css/form.css';
import {
    Box,
    Button,
    Input,
    Center,
    FormLabel,
    FormControl
} from '@chakra-ui/react';

const Contact = () => {
    const dispatch = useDispatch();
    const [customer, setCustomer] = useState({
        fullName: '',
        email: '',
        message: '',
        subject: '',
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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(customer);
        axios.post('http://localhost:5000/api/contact', customer);
        setCustomer({
            fullName: '',
            email: '',
            message: ''
        });
        dispatch(success('Thank you for your submission!'));
    }

    //Handel submit in form tag and submit on type for the buttonIf not in the form element it can be placed in the button element

    return (
        <Box maxW="lg" borderRadius="lg" overflow="hidden" className="contactForm" marginTop="10px" marginBottom="5rem">
            <Center fontSize="25px">
                Contact Us
            </Center>

            <form onSubmit={handleSubmit}>

                <FormControl id="fullName" className="" isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input onChange={handleChange} name='fullName' value={customer.fullName} placeholder="First name" />
                </FormControl>

                <FormControl id="email" className="" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input onChange={handleChange} name='email' value={customer.email} type="email" />
                </FormControl>

                <FormControl id="subject" isRequired maxlength="1000">
                    <FormLabel> Subject </FormLabel>
                    <Input onChange={handleChange} name='subject' value={customer.subject} placeholder="Subject" />
                </FormControl>

                <FormControl id="message" isRequired maxlength="2000">
                    <FormLabel> Message </FormLabel>
                    <Input onChange={handleChange} name='message' value={customer.message} placeholder="Message for Thrillful" />
                </FormControl>


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
                    >
                        Send
                    </Button>
                </Center>
            </form>

        </Box>
    )
}

export default Contact





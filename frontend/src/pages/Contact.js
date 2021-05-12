import React from 'react';
import { Box, Button, Input, Center, FormLabel, FormControl, Text } from '@chakra-ui/react';
import '../css/form.css';

const Contact = () => {




    return (
        <Box maxW="lg" borderWidth="5px" borderRadius="lg"  overflow="hidden" className="contactForm" marginTop="10px" marginBottom="10px">
           <Center fontSize="25px">
               Contact Us
            </Center> 
            <FormControl id="firstName" className="contactForm" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="First name" />
            </FormControl>

            <FormControl id="lastName" className="contactForm" isRequired>
                <FormLabel>Last Name</FormLabel>
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





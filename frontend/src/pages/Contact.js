import React from 'react';
import { Box, Button, Input, Center, FormLabel, FormControl, Text } from '@chakra-ui/react';
import '../css/form.css';


//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container, Row} from 'react-bootstrap';
//import { Input, Textarea } from "@chakra-ui/react";

// const Contact = () => {
//     return (
//         <Container>
//             <Row>
//                 <Input placeholder="First Name" />
//                 <Input placeholder="Last Name" />

//                 <Input placeholder="Email" />
//                 <Input placeholder="Phone Number" />

//                 <Input placeholder="Subject" />

//                 <Textarea placeholder="Write your message here" />
//             </Row>
//         </Container>

//below is just to make compiler happy for now//

const Contact = () => {
    return (
        <Box>
            <FormControl id="firstName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="First name" />
            </FormControl>

            <FormControl id="lastName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="First name" />
            </FormControl>

            <FormControl id="email" isRequired>
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





//     )
// }

// export default Contact

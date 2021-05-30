import React from 'react'
import { Link } from 'react-router-dom'
//import { SocialIcon } from 'react-social-icons';
import { Grid, Box, Text, VStack, HStack } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box backgroundColor="#000000" color="#ffffff" position="fixed" bottom={0} left={0} right={0}>
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)"]}>
                <VStack>
                    <HStack p="1rem">
                        <Text textAlign="center">&#169; Thrillful</Text>
                        <Text _hover={{ color: '#ff0000' }}><Link to='/contact'>Contact Us</Link></Text>
                    </HStack>
                    <HStack >
                        {/* These are social media icons. Uncomment and add path to your personal accounts */}
                    {/* <SocialIcon url="https://facebook.com" />
                    <SocialIcon url="https://instagram.com" />
                    <SocialIcon url="https://twitter.com" /> */}
                    </HStack>
                </VStack>

            </Grid>
        </Box>
    )
}

export default Footer

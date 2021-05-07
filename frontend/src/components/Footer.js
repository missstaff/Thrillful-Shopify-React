import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Text, VStack, HStack } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box backgroundColor="#000000" color="#ffffff">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)"]}>
                <VStack>
                    <HStack p="1rem">
                        <Text textAlign="center">&#169; Thrillful</Text>
                        <Text _hover={{ color: '#ff0000' }}><Link to='/contact'>Contact Us</Link></Text>
                    </HStack>
                    <HStack >
                        <Link>Social</Link>
                        <Link>Social</Link>
                        <Link>Social</Link>
                    </HStack>
                </VStack>

            </Grid>
        </Box>
    )
}

export default Footer

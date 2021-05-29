import React from 'react'
import { Link } from 'react-router-dom';
import {
    Box,
    Center,
    Image,
    Grid,
    Flex,
    Text
} from '@chakra-ui/react';

const Admin = () => {
    return (
        <Center>
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)"]} m="auto" p="2rem">
                <Flex flexDirection="row" alignContent="space-between" alignItems="center" p="2rem">
                    <Box>
                        <Link to="/adminhelp">
                            <Image src="../hands.png" w={100} h={100}></Image>
                        </Link>
                    </Box>
                    <Link to="/adminhelp">
                        <Text p={5} fontWeight="bold" _hover={{ color: "#ff0000" }}>
                            Help Section
                        </Text>
                    </Link>
                    <Box>
                        <Link to="/adminbanner">
                            <Image src="../backgroundImage.png" w={100} h={100}></Image>
                        </Link>
                    </Box>
                    <Link to="/adminbanner">
                        <Text p={5} fontWeight="bold" _hover={{ color: "#ff0000" }}>
                            Admin Banner
                            </Text>
                    </Link>
                </Flex>
            </Grid>
        </Center>
    )
}

export default Admin

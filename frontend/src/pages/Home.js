import React from 'react';
import { Box, Image, VStack } from '@chakra-ui/react'
import ImageWithText from '../components/ImageWithText.js';
//import RichText from '../components/RichText.js';

const Home = () => {
    return (
        <Box>
            <VStack>
                <Image w="100%" h="auto" src="../backgroundImage.png" />
                <ImageWithText reverse image="https://cdn.shopify.com/s/files/1/0513/1458/9868/products/image_79b05f09-0e9c-4b6f-b42a-460b89c1c8f2_1024x1024@2x.jpg?v=1606907339" heading="Heading" text="item description"/>
                <ImageWithText image="https://cdn.shopify.com/s/files/1/0513/1458/9868/products/image_99ec87a9-5207-4ae0-b474-faebb7250239_1024x1024@2x.jpg?v=1606704381" heading="Heading" text="item description"/>
            </VStack>
        </Box>

    )
}

export default Home

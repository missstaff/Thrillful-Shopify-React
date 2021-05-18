import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { Box, Flex, Button, Text, Image, Heading, Link, VStack, } from '@chakra-ui/react';


const ImageWithText = ({ reverse, image, heading, text }) => {

const reverseSection = reverse ? 'row-reverse' : 'row';

const { fetchAllCollections, collections } = useContext(ShopContext)


useEffect(() => {
    fetchAllCollections();

    return () => { };
}, [fetchAllCollections]);

if (!collections) return <div>There are no collections</div>;

    return (
        <Box>
            <Flex flexDir={['column', reverseSection]} w='100%'>
                <Image src={image} objectFit='cover' w={['100%', '50%']} />
                <Flex w={['100%', '50%']} flexDir='column' justifyContent='center' alignItems='center' p='2rem'>
                    
                    <Heading p='2rem'>
                        {heading && heading}
                    </Heading>
                    <Text p='2rem'>
                        {text && text}
                    </Text>
                    <Button
                    w='10rem'
                    backgroundColor='#ff0000'
                    _hover={{ opacity: '70%'}}
                    >
                        Shop Now
                    </Button>
                </Flex>
            </Flex>            
        </Box>
    )
}

export default ImageWithText

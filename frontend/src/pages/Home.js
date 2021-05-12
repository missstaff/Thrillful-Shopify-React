import React, { useContext, useEffect } from 'react';
import { Box, Center, Grid, Heading, Image, Text, CenterImage, VStack } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom'
import ImageWithText from '../components/ImageWithText.js';
//import RichText from '../components/RichText.js';

const Home = () => {

    const { fetchAllCollections, collections } = useContext(ShopContext)


    useEffect(() => {
        fetchAllCollections();

        return () => { };
    }, [fetchAllCollections]);

    if (!collections) return <div>There are no collections</div>;

        return (
            <Box>
                 <Image w="100%" h="auto" src="../backgroundImage.png" />
                
                <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} m="auto">
                    {
                        collections.map(collection => (
                            <Link to={`/${collection.id}`} key={collection.id}>
                                <VStack>
                                <Center>
                                    <Box _hover={{ opacity: '80%' }} textAlign='center'/*move text here*/>
                                        <Image src={collection.image.src} p="2rem" h="25rem" w="25rem" />
                                        <Center>
                                            <Text style={{ fontWeight: "bold" }}>
                                                {collection.title}
                                            </Text>
                                        </Center>
                                    </Box>
                                </Center>
                                </VStack>
                            </Link>
                        ))
                    }
                </Grid>               
            </Box>
        );
        // <Box>
        //     <VStack>
        //         <Image w="100%" h="auto" src="../backgroundImage.png" />
        //         <ImageWithText reverse image="https://cdn.shopify.com/s/files/1/0513/1458/9868/products/image_79b05f09-0e9c-4b6f-b42a-460b89c1c8f2_1024x1024@2x.jpg?v=1606907339" heading="Heading" text="item description"/>
        //         <ImageWithText image="https://cdn.shopify.com/s/files/1/0513/1458/9868/products/image_99ec87a9-5207-4ae0-b474-faebb7250239_1024x1024@2x.jpg?v=1606704381" heading="Heading" text="item description"/>
        //     </VStack>
        // </Box>


}

export default Home

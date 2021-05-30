import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Image, Text, Center, Heading } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom'


const Collection = () => {

    // const collectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NTc2MzM1Njg0MA==';
    const { collectionId } = useParams();
    const { fetchCollectionById, collection, collectionName } = useContext(ShopContext)


    useEffect(() => {
        fetchCollectionById(collectionId);

        return () => { };
    }, [fetchCollectionById, collectionId]);

    if (!collection) return <div>There are no collections.</div>;

    return (
        <Box p="5rem">
            <Center>
                <Heading>{collectionName}</Heading>
            </Center>
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} m="auto">
                {
                    collection.map(product => (
                        <Link to={`product/${product.handle}`} key={product.id}>
                            <Center>
                                <Box _hover={{ opacity: '80%' }} textAlign='center'/*move text here*/>
                                    <Image src={product.images[0].src} p="2rem" h="25rem" w="25rem" />
                                    <Center>
                                        <Text style={{ fontWeight: "bold" }}>
                                            {product.title}
                                        </Text>
                                    </Center>
                                    <Center>
                                        <Text>
                                            ${product.variants[0].price}
                                        </Text>
                                    </Center>
                                </Box>
                            </Center>
                        </Link>
                    ))
                }
            </Grid>
        </Box >
    )
};

export default Collection

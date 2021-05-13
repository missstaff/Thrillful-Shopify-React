import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Image, Text, Button, Heading, Flex, Select } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext';
import Rating from '../components/Rating.js';

const Product = () => {

    const { handle } = useParams();
    const { fetchProductWithHandle, addItemToCheckout, product, sizes } = useContext(ShopContext)
    const [ Size, setSize ] = useState(' ');

    const handleChange = (e) => {
        setSize(e.target.value);
        console.log("event:", e.target.value)
    }        
    // console.log("TEST", e) 
    
    
    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    // tests
    console.log("product:", product)
    console.log("sizes ", sizes)

    if (!product.title) return <div>Loading...</div>
    return (
        <Box p="2rem">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} m="auto">
                <Flex justifyContent="center" alignItems="center">
                    <Image src={product.images[0].src} />
                </Flex>
                <Flex flexDirection="column" alignItems="center" justifyContent="center" px="2rem">
                    <Heading pb="2rem">{product.title}</Heading>
                    <Text fontWeight="bold" pb="2rem">${product.variants[0].price}</Text>
                    <Text pb="2rem">{product.description}</Text>
                    <Text pb="2rem">{/*product.rating*//*we need to add the ratings ourselves I think*/}</Text>
                    <Rating>

                    </Rating>
                    <Select placeholder="Size" marginTop="10" size="sm" w="25%" onChange={handleChange}>
                        {
                            sizes.map(size => (
                                <option value={Size}>
                                    {size.title}
                                </option>
                            ))
                        }
                    </Select>
                    <Button marginTop="10"
                        onClick={() => addItemToCheckout(product.variants[0].id, 1, handleChange.value /*need code to be able to select quantity*/)}
                        _hover={{ opacity: '70%' }}
                        w="10rem" backgroundColor="#ff0000" _focus="none"
                    >Add to cart</Button>
                </Flex>
            </Grid>
        </Box>
    )
}

export default Product
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Image, Text, Button, Heading, Flex, Select } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext';
import Rating from '../components/Rating.js';

const Product = () => {

    const { handle } = useParams();
    const { fetchProductWithHandle, addItemToCheckout, product, sizes } = useContext(ShopContext)
    const [Size, setSize] = useState(' ');
    const [Qty, setQty] = useState(' ');

    const handleChange = (e) => {
        setSize(e.target.value);
    }

    const handleQty = (e) => {
        setQty(e.target.value);
    }

    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])


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

                    {/* NEED ERROR HANDLING */}
                    <Select placeholder="Select size" marginTop="10" size="sm" w="23%" onChange={handleChange} required>
                        {
                            sizes.map(size => (
                                <option key={size.id} value={size.id}>
                                    {size.title}
                                </option>
                            ))
                        }
                    </Select>
                    {/* NEED ERROR HANDLING */}
                    <Select placeholder="Select Qty." marginTop="5" size="sm" w="23%" onChange={handleQty} required>
                        <option key={1} value={1}>1</option>
                        <option key={2} value={2}>2</option>
                        <option key={3} value={3}>3</option>
                    </Select>
                    <Button marginTop="5"
                        onClick=
                        {() => {
                            if (Qty >= 1 && Size !== ' ') {
                                addItemToCheckout(Size, Qty)
                            }
                            else if (Size == ' ') {
                                alert("Please select a size")
                            }
                            else {
                                alert("Please select qty.")
                            }
                        }
                        }
                        _hover={{ opacity: '70%' }}
                        w="10rem" color="#ff0000" backgroundColor="black" _focus="none"
                    >Add to cart</Button>
                </Flex>
            </Grid>
        </Box>
    )
}

export default Product
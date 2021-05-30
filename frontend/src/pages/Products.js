import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Box, Grid, Text, Image, Center } from '@chakra-ui/react'


const Products = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if (!products) return <div>Loading...</div>
    return (
        <Box p="5rem">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} m="auto">
                {
                    products.map(product => (
                        <Link to={`product/${product.handle}`} key={product.id}>
                            <Center>
                                <Box _hover={{ opacity: '80%' }} textAlign='center'/*move text here*/>
                                    <Image src={product.images[0].src} p="2rem" h="25rem" w="25rem" m="2.5rem" />
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
        </Box>
    )
}

export default Products
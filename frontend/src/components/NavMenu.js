  
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Grid,
    Text,
    Flex,
    Image,
    Box,
    VStack
} from "@chakra-ui/react"

import { ShopContext } from '../context/shopContext'

const NavMenu = () => {

    const { isMenuOpen, closeMenu} = useContext(ShopContext)

    return (
        <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader textAlign="center"><Link to="/collections" onClick={closeMenu}>Collections</Link></DrawerHeader>
                    <DrawerBody backgroundColor="#000000" color="#ff0000" flexDirection="row" alignItems="center" justifyContent="space-between" >
                        <VStack _hover={{ color: "#ffffff"}} p="2rem">
                            <Link to="/all-products" onClick={closeMenu}>All Products</Link>
                        </VStack>
                        <VStack _hover={{ color: "#ffffff" }} p="2rem">
                            <Link to="/Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NTc2MzM1Njg0MA==" onClick={closeMenu}>Dresses</Link>
                        </VStack>
                        <VStack _hover={{ color: "#ffffff" }} p="2rem">
                            <Link to="/Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NjQ5ODU3MjQ1Ng==" onClick={closeMenu}>Two-Piece Sets</Link>
                        </VStack>
                        <VStack _hover={{ color: "#ffffff" }} p="2rem">
                            <Link to="/Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NjQ5OTUyMjcyOA==" onClick={closeMenu}>Accessories</Link>
                        </VStack>
                        <VStack _hover={{ color: "#ffffff" }} p="2rem">
                            <Link to="/Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NjQ5OTQ1NzE5Mg==" onClick={closeMenu}>Beauty</Link>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter>
                        <Text textAlign="center">Footer</Text>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerOverlay>
            
        </Drawer>
    )
}

export default NavMenu
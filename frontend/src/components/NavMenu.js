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
    Text,
    VStack
} from "@chakra-ui/react"

import { ShopContext } from '../context/shopContext'

const NavMenu = () => {

    const { isMenuOpen, closeMenu } = useContext(ShopContext)

    return (
        <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader textAlign="center" _hover={{ color: '#ff0000' }}><Link to="/collections">Collections</Link></DrawerHeader>
                    <DrawerBody backgroundColor="#000000" color="#ff0000" flexDirection="row" alignItems="center" justifyContent="space-between" >
                        <VStack _hover={{ color: "#ffffff" }} p="2rem">
                            <Link to="/Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NDk0NjIyMTIyNA==">All Products</Link>
                        </VStack>
                        <VStack _hover={{ color: "#ffffff" }} p="2rem">
                            <Link to="/Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NTc2MzM1Njg0MA==">Dresses</Link>
                        </VStack>
                        <VStack _hover={{ color: "#ffffff" }} p="2rem">
                            <Link to="/Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NjQ5ODU3MjQ1Ng==">Two-Piece Sets</Link>
                        </VStack>
                        <VStack _hover={{ color: "#ffffff" }} p="2rem">
                            <Link to="/Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NjQ5OTUyMjcyOA==">Accessories</Link>
                        </VStack>
                        <VStack _hover={{ color: "#ffffff" }} p="2rem">
                            <Link to="/Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NjQ5OTQ1NzE5Mg==">Beauty</Link>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter flexDirection="column" alignItems="center" justifyContent="space-between" >
                        <Text _hover={{ color: '#ff0000' }}>
                            <Link>Logout</Link>
                        </Text>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerOverlay>

        </Drawer>
    )
}

export default NavMenu

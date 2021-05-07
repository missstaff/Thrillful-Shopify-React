import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Flex, Text, Icon, Box, Badge } from '@chakra-ui/react'
import { MdMenu, MdShoppingCart, MdAccountCircle } from 'react-icons/md'
import { signout } from '../actions/userActions';

const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)
      //to change state of login on navbar//
//   const userSignin = useSelector((state) => state.userSignin);
//   const { userInfo } = userSignin;
//   const dispatch = useDispatch();
//   const signoutHandler = () => {
//     dispatch(signout());
//   };


    return (
        <Flex backgroundColor="#000000" flexDirection="row" alignItems="center" justifyContent="space-between" /*navbar element spacing*/ padding="2rem">
            <Icon fill="white" cursor="pointer" as={MdMenu} w={30} h={30}
                onClick={() => openMenu()} 
            ></Icon>
            <Link to="/">
                <Text color="white" fontSize={44} _hover={{ color: '#ff0000'}}>Thrillful</Text>
            </Link>
            <Box>
            <Link to="/signin">
                <Icon fill="white" cursor="pointer" as={MdAccountCircle} w={50} h={50} pr={5}
                /></Link>
                <Icon fill="white" cursor="pointer" as={MdShoppingCart} w={30} h={30}
                    onClick={() => openCart()}
                />
                <Badge backgroundColor="#ff0000" borderRadius="50%">
                    {checkout.lineItems?.length}
                </Badge>
            </Box>

        </Flex>
    )
}

export default NavBar

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signout, selectUser } from '../redux/userSlice';
// import { signout } from '../actions/userActions.js';
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Flex, Text, Icon, Box, Badge } from '@chakra-ui/react'
import { MdMenu, MdShoppingCart, MdAccountCircle } from 'react-icons/md'
import { useContext } from 'react';
import '../index.css';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from "@chakra-ui/react"



const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)

    //to change state of login on navbar//
    // const userSignin = useSelector((state) => state.userSignin);
    // const { userInfo } = userSignin;
    const { user } = useSelector(selectUser);
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    };

    return (

        <Flex backgroundColor="#000000" flexDirection="row" alignItems="center" justifyContent="space-between" /*navbar element spacing*/ padding="2rem">
      <Icon fill="white" cursor="pointer" as={MdMenu} w={30} h={30}
        onClick={() => openMenu()}
      ></Icon>
      <Link to="/">
        <Text textAlign="center" color="white" fontSize={44} _hover={{ color: '#ff0000' }}>Thrillful</Text>
      </Link>
      <div>
        <Box>
          <Icon fill="white" cursor="pointer" as={MdShoppingCart} w={30} h={30}
            onClick={() => openCart()}
          />
          <Badge backgroundColor="#ff0000" borderRadius="50%">
            {checkout.lineItems?.length}
          </Badge>
        </Box>    
         <Box>
          {user ? (
            <Menu isLazy>
              <MenuButton fontSize={20} color="#ffffff">{user.username} <i className="fa fa-caret-down dropdown-toggle"></i>{' '}</MenuButton>
              <MenuList bgColor="#000000" border="none" justifyContent="center">
                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem fontSize={20} color="#ffffff" _hover={{ color: '#ff0000' }} _focus={{ bg: "none" }}>
                  <Link to="/profile">
                    User Profile
              </Link>
                </MenuItem>
                {user.isAdmin && (
                 <MenuItem fontSize={20} color="#ffffff" _hover={{ color: '#ff0000' }} _focus={{ bg: "none" }}>
                   <Link to="/admin">
                     Admin Dashboard
               </Link>
                 </MenuItem>
          
            )}
                <MenuItem fontSize={20} color="#ffffff" _hover={{ color: '#ff0000' }} _focus={{ bg: "none" }}>
                  <Link to="#signout" onClick={signoutHandler}>
                    Sign Out
              </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Text fontSize={20} color="#ffffff">
              <Link to="/signin">Sign In</Link>
            </Text>
          )}
        </Box>

      </div>
    </Flex>
    )
}

export default NavBar

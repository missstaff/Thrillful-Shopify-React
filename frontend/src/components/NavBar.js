import {React} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions.js';
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Flex, Text, Icon, Box, Badge } from '@chakra-ui/react'
import { MdMenu, MdShoppingCart } from 'react-icons/md'
import { useContext } from 'react';

import '../index.css';


const NavBar = () => {

   
    const { openCart, openMenu, checkout } = useContext(ShopContext)

    //to change state of login on navbar//
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    
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
                {userInfo ? (

                    <Link to="#signout" onClick={signoutHandler}>
                        <Text color="#ffffff">
                            {userInfo.username}
                      </Text>
                    </Link>

                ) : (
                    <Link to="/signin">
                        <Text color="#ffffff">
                            Sign In
                  </Text>
                    </Link>
                )}
               
            </div>
           


        </Flex>
    )
}

export default NavBar

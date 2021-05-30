import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signout, selectUser } from "../redux/userSlice";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import {
  Flex,
  Text,
  Icon,
  Badge,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import "../index.css";
import "../css/navbar.css";

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  console.log(user);

  return (
    <Flex
      backgroundColor="#000000"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      /*navbar element spacing*/ padding="2rem"
    >
      <Icon
        fill="white"
        cursor="pointer"
        as={MdMenu}
        w={30}
        h={30}
        onClick={() => openMenu()}
      ></Icon>
      <Link to="/">
        <Text
          textAlign="center"
          color="white"
          fontSize={44}
          _hover={{ color: "#ff0000" }}
        >
          Thrillful
        </Text>
      </Link>

      <div className="navbar__right">
        <div style={{ marginRight: "12px" }}>
          <Icon
            fill="white"
            cursor="pointer"
            as={MdShoppingCart}
            w={30}
            h={30}
            onClick={() => openCart()}
          />
          <Badge backgroundColor="#ff0000" borderRadius="50%">
            {checkout.lineItems?.length}
          </Badge>
        </div>
        <div className="navbar__profile">
          {user.info ? (
            // {userInfo ? (
            <>
              <Menu>
                <MenuButton bgColor="#000000" color="#ffffff" _hover={{ color: "#ff0000" }} _focus={{ bg: "none" }} _active={{ bg: "none" }} as={Button} rightIcon={<ChevronDownIcon />}>
                  {user.info.first_name}
                </MenuButton>
                <MenuList border="none" bgColor="#000000">
                  {user.info.isAdmin === true && (
                    <MenuItem color="#ffffff" _hover={{ color: "#ff0000" }} _focus={{ bg: "none" }} _active={{ bg: "none" }}>
                      <Link to="/admin">AdminDashboard</Link>
                    </MenuItem>
                  )}
                  <MenuItem color="#ffffff" _hover={{ color: "#ff0000" }} _focus={{ bg: "none" }} _active={{ bg: "none" }}>
                    <Link to="/profile">Profile</Link>
                  </MenuItem>
                  <MenuItem color="#ffffff" _hover={{ color: "#ff0000" }} _focus={{ bg: "none" }} _active={{ bg: "none" }} onClick={signoutHandler}>
                    {/* <Link to="#signout" > */}
                    <Text>Sign out</Text>
                    {/* </Link> */}
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <Link to="/signin">
              <Button bgColor="#000000" color="#ffffff" _hover={{ color: "none" }} _focus={{ bg: "none" }} _active={{ bg: "none" }}>
                <Text>Sign In</Text>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Flex>
  );
};

export default NavBar;

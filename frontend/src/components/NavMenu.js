import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Text,
} from "@chakra-ui/react";

const NavMenu = () => {
  // const { isMenuOpen, closeMenu} = useContext(ShopContext)
  const { fetchAllCollections, collections, isMenuOpen, closeMenu } =
    useContext(ShopContext);

  useEffect(() => {
    fetchAllCollections();

    return () => {};
  }, [fetchAllCollections]);

  return (
    <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
      <DrawerOverlay>
        <DrawerContent bgGradient="linear(to-r, black 60%, #ff0000)">
          <DrawerCloseButton />
          <DrawerHeader
            textAlign="center"
            color="#ffffff"
            _hover={{ color: "#ff0000" }}
          >
            <Link
              to="/collections"
              style={{ fontWeight: "bold" }}
              onClick={closeMenu}
            >
              Categories
            </Link>
          </DrawerHeader>
          <DrawerBody
            flexDirection="row"
            color="white"
            alignItems="center"
            justifyContent="space-between"
          >
            <VStack>
              {collections.map((collection) => (
                <Link
                  to={`/${collection.id}`}
                  key={collection.id}
                  style={{ fontWeight: "bold" }}
                >
                  <Text
                    _hover={{ color: "#ff0000" }}
                    style={{ fontWeight: "bold" }}
                    p="2rem"
                  >
                    {collection.title}
                  </Text>
                </Link>
              ))}
              {/* <Link to="/all-products" style={{ fontWeight: "bold" }}onClick={closeMenu}>All Products</Link> */}
            </VStack>
            {/* <VStack _hover={{ color:"#ff0000"}} p="2rem">
                            <Link to="/Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NTc2MzM1Njg0MA==" style={{ fontWeight: "bold" }}onClick={closeMenu}>Dresses</Link>
                        </VStack>
                        <VStack _hover={{ color:"#ff0000"}} p="2rem">
                            <Link to="/Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NjQ5ODU3MjQ1Ng==" style={{ fontWeight: "bold" }}onClick={closeMenu}>Two-Piece Sets</Link>
                        </VStack>
                        <VStack _hover={{ color:"#ff0000"}} p="2rem">
                            <Link to="/Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NjQ5OTUyMjcyOA==" style={{ fontWeight: "bold" }}onClick={closeMenu}>Accessories</Link>
                        </VStack>
                        <VStack _hover={{ color:"#ff0000"}} p="2rem">
                            <Link to="/Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NjQ5OTQ1NzE5Mg==" style={{ fontWeight: "bold" }}onClick={closeMenu}>Beauty</Link>
                        </VStack> */}
          </DrawerBody>
          <VStack>
            <DrawerFooter color="white" _hover={{ color: "#ff0000" }}>
              <Link
                to="/about"
                textAlign="center"
                style={{ fontWeight: "bold" }}
                onClick={closeMenu}
              >
                About Us
              </Link>
            </DrawerFooter>
          </VStack>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavMenu;

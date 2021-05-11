import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import { ShopContext } from '../context/shopContext'
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
    GridItem,
    Text,
    Flex,
    Image,
    Link,
    Box
} from "@chakra-ui/react"


const Cart = () => {
    const { isCartOpen, isMenuOpen, closeCart, checkout, lineItems, lineItemToUpdate, removeLineItem, updateLineItem } = useContext(ShopContext);
    const [count, setCount] = useState(0);


    // continue shopping 
    const history = useHistory();
    const continueShoppingRoute = () => {
        let path = `/all-products`;
        history.push(path);
    }
    // const testId = "ABC";
    // const testqty = 19;
    // lineItemToUpdate.id = testId;
    // lineItemToUpdate.qty = testqty;

    // TEST shopping cart details
    console.log("checkout cart: ", checkout);
    console.log("lineItemToUpdate: ", lineItemToUpdate);
    console.log("lineItems: ", lineItems);

    // TEST update line item
        // const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC80YzRhM2E1MDVlZDJiYTk1MzJjMzQwNGY5YTM5M2Y0ZT9rZXk9YTdhODM0YWQyYmM5NzJiNmZiNGI4ZTEwZGI1NmY2ZWE=';
        // const lineItemToUpdate = [
        //     { id: 'Z2lkOi8vc2hvcGlmeS9DaGVja291dExpbmVJdGVtLzM5NzAwMTQyNDU3MDAwMD9jaGVja291dD00YzRhM2E1MDVlZDJiYTk1MzJjMzQwNGY5YTM5M2Y0ZQ==', quantity:2 }
        // ];
        // updateLineItem(checkoutId, lineItemToUpdate);



    return (
        < >
            <Drawer
                isOpen={isCartOpen}
                isMenuOpen={isMenuOpen}
                placement="right"
                onClose={closeCart}
                size="sm"
            >
                <DrawerOverlay>
                    <DrawerContent>
                        {/* <DrawerCloseButton /> */}
                        <DrawerHeader>Your Shopping Cart</DrawerHeader>

                        <DrawerBody>
                            {
                                checkout.lineItems?.length ? checkout.lineItems.map(item => (
                                                  <Grid h="100px" templateRows="repeat(3, 1fr)" templateColumns="repeat(4, 3fr)" gap={4} marginBottom="6" >
                                        <GridItem rowSpan={1}>
                                            <Link style={{ color: "red", fontSize: "13px" }} cursor="pointer" onClick={() => removeLineItem(item.id)}>
                                                remove
                                             </Link>
                                        </GridItem>
                                        <GridItem rowSpan={3} colSpan={1}>
                                            <Image src={item.variant.image.src} />
                                        </GridItem>
                                        <GridItem rowSpan={1} colSpan={1}>
                                            <Text style={{ fontSize: "13px", fontWeight: "bold" }}>
                                                {item.title}
                                            </Text>
                                        </GridItem>
                                        <GridItem rowSpan={1} colSpan={1}>
                                            <Text>
                                                ${item.variant.price}
                                            </Text>
                                        </GridItem>
                                        <GridItem rowSpan={1} colSpan={1} />
                                        <GridItem rowSpan={1} colSpan={1}>
                                            qty: 
                                        </GridItem>
                                        <GridItem rowSpan={1} colSpan={1}>
                                        <Button size="xs"marginRight="2" onClick={() => alert(item.quantity - 1)}>-</Button>  
                                        {(item.quantity) }
                                        <Button size="xs" marginLeft="2" onClick={() => alert(item.quantity + 1)}>+</Button>
                                        {/* <Button size="xs" onClick={() => updateLineItem(checkout.id, lineItems.id) - 1}>-</Button>                                               */}
                                        </GridItem>
                                    </Grid>
                                    // <Grid templateColumns="repeat(4, 2fr)" gap={0} key={item.id} marginBottom="10">
                                    //     <Box justify-self="start" >
                                    //         <Link style={{ color: "red", fontSize: "13px" }} cursor="pointer" onClick={() => removeLineItem(item.id)}>
                                    //             remove
                                    //         </Link>
                                    //     </Box>
                                    //     <Flex justifyContent="left">
                                    //         <Image src={item.variant.image.src} />
                                    //     </Flex>
                                    //     <Flex alignContent="center" justifyContent="center">
                                    //         <Text style={{ fontSize: "13px", fontWeight: "bold" }}>
                                    //             {item.title}
                                    //         </Text>
                                    //     </Flex>
                                    //     <Flex alignContent="center" justifyContent="center">
                                    //         <Text>
                                    //             ${item.variant.price}
                                    //         </Text>
                                    //     </Flex>
                                    // </Grid>
                                )) :
                                    <Box h="100%" w="100%">
                                        <Text h="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center">
                                            Your cart is empty
                                    </Text>
                                    </Box>
                            }
                        </DrawerBody>
                        <DrawerFooter>
                            <Text style={{ fontWeight: "bold" }}>
                                Total: ${checkout.totalPrice}
                            </Text>
                        </DrawerFooter>

                        <DrawerFooter>
                            <Button w="100%" onClick={() => { continueShoppingRoute(); closeCart(); }}>
                                Continue Shopping
                            </Button>
                        </DrawerFooter>

                        {checkout.lineItems?.length ?
                            <DrawerFooter>
                                <Button w="100%">
                                    <Link href={checkout.webUrl}>
                                        Checkout
                                    </Link>
                                </Button>
                            </DrawerFooter> : null
                        }

                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>

        </>
    )
}

export default Cart
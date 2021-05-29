import React from 'react';
import { withRouter } from "react-router";
import { Box, Image } from '@chakra-ui/react';


/*Banner is currently applied to all pages via Apps.js but can be applied individually*/
const Hero = () => {
    let path = window.location.pathname;
    if (path === '/about' || path === '/contact' || path === '/signin' || path === '/Register') {
        return false;
    }
    return (
        <Box >
            <Image src="/../ThrillfulBanner.png" h="250px " w="100%"/*banner image path here*/
                objectPosition={['top', 'center']}
            />
        </Box>
    )

}
/* A BUTTON OR LINK COULD BE ADDED TO THE BANNER AREA TO SALE ITEM OR SPECIFIC PAGE*/
export default withRouter(Hero)

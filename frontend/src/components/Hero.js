import React from 'react';
import { withRouter } from "react-router";
import { Box, Text, Image } from '@chakra-ui/react';


/*Banner is currently applied to all pages via Apps.js but can be applied individually*/
const Hero = () => {
    if (window.location.pathname === '/about' || window.location.pathname === '/contact' || window.location.pathname === '/signin' || window.location.pathname === '/Register') {
        return false;
    }
    return (
        <Box w='100%' position='relative' backgroundColor="black">
            <Image w="100%" h='10%' src="/../ThrillfulBanner.png" /*banner image path here*/
                m='auto' objectFit='scale-down'
                objectPosition={['top', 'center']}
            />
        </Box>
    )

}
/* A BUTTON OR LINK COULD BE ADDED TO THE BANNER AREA TO SALE ITEM OR SPECIFIC PAGE*/
export default withRouter(Hero)

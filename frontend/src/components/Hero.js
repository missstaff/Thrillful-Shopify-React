import React from 'react';
//import { Link } from 'react-router-dom';
import { Box, Text, Image } from '@chakra-ui/react';
//import '../css/hero.css';


/*Banner is currently appliedto all pages via Apps.js but can be applied individually*/
const Hero = () => {
    return (
        <Box  w='100%' position='relative' >
            <Image w="100%" h='10%' src="/../ThrillfulBanner.png" /*banner image path here*/ 
             m='auto' objectFit='scale-down'
            objectPosition={['top', 'center']}
            />
        </Box>
    )
}
/* A BUTTON OR LINK COULD BE ADDED TO THE BANNER AREA TO SALE ITEM OR SPECIFIC PAGE*/
export default Hero

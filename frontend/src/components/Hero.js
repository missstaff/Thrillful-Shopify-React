import React from 'react';
//import { Link } from 'react-router-dom';
import { Box, Text, Image } from '@chakra-ui/react';
//import '../css/hero.css';


/*Banner is currently appliedto all pages via Apps.js but can be applied individually*/
const Hero = () => {
    return (
        <Box backgroundColor='#FFA8E2' w='100%' position='relative' h='50vh'>
            <Text>I am a banner i need an image src entered 2 lines below in Hero.js</Text>
            <Text>You can also enter text and change the background color here</Text>
            <Image src="" /*banner image path here*/ 
            h='100%' m='auto' objectFit='contain'
            objectPosition={['top', 'center']}
            />
        </Box>
    )
}
/* A BUTTON OR LINK COULD BE ADDED TO THE BANNER AREA TO SALE ITEM OR SPECIFIC PAGE*/
export default Hero

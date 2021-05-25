import React from 'react';
import { Box, Image, Heading, Center, Text, Stack, SimpleGrid } from '@chakra-ui/react';
import ImageWithText from '../components/ImageWithText.js'

console.log(window.location.pathname);
const About = () => {
    return (
<ImageWithText image="../backgroundImage.png" heading="Something for Everyone In Your Tribe" text="Sample Text"/>

        // <Box>
        //     <Stack>
        //         <Text fontSize="3xl">
        //             <Center>
        //                 "Something for everyone in your tribe"
        //           </Center>
        //         </Text>
        //         <SimpleGrid columns={2} spacing={10}>
        //         <Text>
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Egestas sed tempus urna et pharetra. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Tincidunt praesent semper feugiat nibh. Amet nisl purus in mollis. Venenatis cras sed felis eget velit aliquet. Mi proin sed libero enim sed faucibus. Aliquam ultrices sagittis orci a scelerisque. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Eu feugiat pretium nibh ipsum consequat nisl. Nulla aliquet porttitor lacus luctus accumsan tortor posuere.
        //             </Text>


        //              <Text>
        //              Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Tortor id aliquet lectus proin nibh nisl condimentum id. Hendrerit gravida rutrum quisque non. Tellus elementum sagittis vitae et leo duis ut diam. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Odio morbi quis commodo odio aenean sed adipiscing diam. Neque gravida in fermentum et sollicitudin. Elit ut aliquam purus sit amet luctus. Nulla at volutpat diam ut venenatis tellus. Libero enim sed faucibus turpis in eu. Et leo duis ut diam quam. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Sit amet nisl purus in mollis nunc sed. Cursus metus aliquam eleifend mi in nulla. Dolor purus non enim praesent elementum facilisis leo vel.
        //         </Text>
        //         </SimpleGrid>
        //         <Image w="100%" h="auto" src="../backgroundImage.png" />
        //     </Stack>
        // </Box>

    )
}

export default About

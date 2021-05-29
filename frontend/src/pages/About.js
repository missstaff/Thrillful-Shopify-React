import React from 'react';
import {
    Box,
    Image,
    Grid,
    GridItem,
    Text
} from '@chakra-ui/react';

const About = () => {
    return (
        <Box bgGradient="linear(to-r, #ff0000, black)" >
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={1}>
                    <Image w="auto" h="100%" src="../backgroundImage.png" />
                </GridItem>
                <GridItem colSpan={2}>
                    <Text color="white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis tristique
                        sollicitudin nibh. Egestas sed tempus urna et pharetra. Dignissim diam quis enim lobortis
                        scelerisque fermentum dui faucibus. Tincidunt praesent semper feugiat nibh. Amet nisl purus in
                        mollis. Venenatis cras sed felis eget velit aliquet. Mi proin sed libero enim sed faucibus.
                        Aliquam ultrices sagittis orci a scelerisque. Dolor sit amet consectetur adipiscing elit duis
                        tristique sollicitudin. Eu feugiat pretium nibh ipsum consequat nisl. Nulla aliquet porttitor
                        lacus luctus accumsan tortor posuere.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis tristique
                        sollicitudin nibh. Egestas sed tempus urna et pharetra. Dignissim diam quis enim lobortis
                        scelerisque fermentum dui faucibus. Tincidunt praesent semper feugiat nibh. Amet nisl purus in
                        mollis. Venenatis cras sed felis eget velit aliquet. Mi proin sed libero enim sed faucibus.
                        Aliquam ultrices sagittis orci a scelerisque. Dolor sit amet consectetur adipiscing elit duis
                        tristique sollicitudin. Eu feugiat pretium nibh ipsum consequat nisl. Nulla aliquet porttitor
                        lacus luctus accumsan tortor posuere.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis tristique
                        sollicitudin nibh. Egestas sed tempus urna et pharetra. Dignissim diam quis enim lobortis
                        scelerisque fermentum dui faucibus. Tincidunt praesent semper feugiat nibh. Amet nisl purus in
                        mollis. Venenatis cras sed felis eget velit aliquet. Mi proin sed libero enim sed faucibus.
                        Aliquam ultrices sagittis orci a scelerisque. Dolor sit amet consectetur adipiscing elit duis
                        tristique sollicitudin. Eu feugiat pretium nibh ipsum consequat nisl. Nulla aliquet porttitor
                        lacus luctus accumsan tortor posuere.
                    </Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Text color="white">
                        Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Tortor id aliquet lectus
                        proin nibh nisl condimentum id. Hendrerit gravida rutrum quisque non. Tellus elementum sagittis
                        vitae et leo duis ut diam. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper
                        morbi. Odio morbi quis commodo odio aenean sed adipiscing diam. Neque gravida in fermentum et sollicitudin.
                        Elit ut aliquam purus sit amet luctus. Nulla at volutpat diam ut venenatis tellus. Libero enim sed
                        faucibus turpis in eu. Et leo duis ut diam quam. Aliquet nibh praesent tristique magna sit amet purus
                        ravida quis. Sit amet nisl purus in mollis nunc sed. Cursus metus aliquam eleifend mi in nulla. Dolor
                        purus non enim praesent elementum facilisis leo vel.
                    </Text>
                </GridItem>
                <GridItem colSpan={4} />
            </Grid>
        </Box>
    )
}

export default About

import React from 'react'
import {useColorMode} from '@chakra-ui/color-mode';
import { Button } from '@chakra-ui/button';

import { Stack , Flex ,Circle, Box, Text  } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useMediaQuery } from '@chakra-ui/media-query';


const Header = () => {

    const {colorMode} = useColorMode();
    const isdark = colorMode === 'dark'

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
     <Stack>

         {isNotSmallerScreen && (

              <Circle 
              h="260px"
              w="260px"
              bg="blue.100"
              position='absolute'
              alignSelf='flex-end'
              opacity='0.1'
              />

         )}

    
    

                <Flex  direction={isNotSmallerScreen ?  'row' :  'column'} 
                alignSelf='flex-start'
                spacing="200px"

                p={isNotSmallerScreen ? '32':0}

                >

    <Box   mt={isNotSmallerScreen ? 0 : '16'} alignSelf='flex-start'>

   <Text fontWeight="semibold" fontSize="4xl">Hello , Welcome to </Text>

   <Text fontSize="5xl" fontWeight='bold' bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
   bgClip='text'
   >  
   
   FAROS HR OUTSOURCING
       
       </Text >

   <Text color={isdark ? "gray.200" : 'gray.500'}> 
       To be an innovative business and HR solution platform that transmit ever lasting values for all stakeholders.</Text>
  
   <Button mt={8} colorScheme="blue" >Hire Us</Button>


   </Box>




                <Image  
                src="https://img1.wsimg.com/isteam/ip/db93d9d2-8ae4-4f07-9ce4-71cec33ac08e/IMG_0171.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
                alignSelf="center"
                mt={isNotSmallerScreen ? '0' : '12'}
                mb={isNotSmallerScreen ? '0' : '12'}
                backgroundColor="transparent"
                ml={6}
                borderRadius="full"
                boxShadow="lg"
                boxSize="260px"
                zIndex={1}
                />

    

        </Flex>


     </Stack>
    )
}

export default Header

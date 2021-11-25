import React from 'react'
import { Flex,Box ,Heading, Text} from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Icon } from '@chakra-ui/icon'
import {GiMechanicGarage} from 'react-icons/gi'
import {RiComputerLine} from 'react-icons/ri'
import {SiDesignernews} from 'react-icons/si'



const Profile = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (

       <Flex direction={isNotSmallerScreen ? 'row' : 'column' }
       w="100%"
       maxWidth={{base:'100vh',md:"130vh",lg:"130vh",xl:"130vh"}}
 >

     <Box alignSelf='center' px='32' py='16' >

<Heading fontWeight='extrabold' color="cyan.500" size="4xl">1+</Heading>
<Text fontSize="2xl" color='gray.400'>Years of Experience</Text>

     </Box>

<Box alignSelf='center' px='32' py="16">

    <Text fontSize="2xl" fontWeight="bold">
    Faros improves your Career and Quality in your specified field 
    </Text>

<Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}>

     <Flex 
     bg="blue.400"
     rounded="xl"
     mt={4}
     w="30vh"
     h="30vh"
     direction="column"
     justifyContent='flex-end'
     direction='column'
     
     >
     <Icon as={RiComputerLine} w={24} h={24} p={4} color="white"  />
     <Text fontWeight='semibold' fontSize="xl" p={4} color="white" >IT Field</Text>


     </Flex>

     <Flex 
     bg="gray.100"
     rounded="xl"
     w="30vh"
     h="30vh"
     mt={4}
     direction="column"
     justifyContent='flex-end'
     direction='column'
     ml={isNotSmallerScreen ? '4' : '0'}
     _hover={{bg:"teal.400"}}

     
     >
     <Icon as={SiDesignernews} w={24} h={24} p={4} color="black"  />
     <Text fontWeight='semibold' fontSize="xl" p={4} color="black" >Designer Field</Text>


     </Flex>


     <Flex 
     bg="gray.200"
     rounded="xl"
     w="30vh"
     mt={4}
     h="30vh"
     direction="column"
     justifyContent='flex-end'
     direction='column'
     ml={isNotSmallerScreen ? '4' : '0'}
     _hover={{bg:"green.400"}}
     
     >
     <Icon as={GiMechanicGarage} w={24} h={24} p={4} color="black"  />
     <Text fontWeight='semibold' fontSize="xl" p={4} color="black" >Industry Field</Text>


     </Flex>

 </Flex>

</Box>



</Flex>

    )
}

export default Profile

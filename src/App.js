import React from 'react'
import {IconButton} from '@chakra-ui/button'
import { VStack,Flex,Heading,Spacer } from '@chakra-ui/layout'
import { FaFacebook,FaInstagram,FaLinkedin,FaSun,FaMoon} from 'react-icons/fa';
import { GoBrowser} from 'react-icons/go';
import {useColorMode} from '@chakra-ui/color-mode';
import Header from './components/Header';
import Social from './components/Social';
import Profile from './components/Profile';


const App = () => {


  const {colorMode,toggleColorMode}= useColorMode();
 
  const isdark = colorMode==='dark';



  return (


    <VStack p="5">

         <Flex w="100%" >

    <Heading  ml="8" size="md" fontWeight='semibold' color="#1978bd" >
    FAROS HR OUTSOURCING
   </Heading>

   <Spacer  />

    <IconButton  

    icon={<FaLinkedin />}
    isRound='true'
    onClick={()=>window.open("https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ffaros-hr-outsourcing%2Fabout%2F")}
  
  />

    <IconButton  

    ml={2}
    icon={<FaInstagram />}
    isRound='true'
    onClick={()=>window.open("https://www.instagram.com/farosource/?hl=en")}

    />

    <IconButton  
    ml={2}
        icon={<GoBrowser />}
        isRound='true'
        onClick={()=>window.open("https://faroshroutsourcing.com/")}
      
      />


    <IconButton  

    ml={4}
        icon={isdark ?  <FaSun/> : <FaMoon/> }
        isRound='true'
        onClick={toggleColorMode}
      
      />


      </Flex>

      <Header/>
      <Social/>
    <Profile/>

    </VStack>

   
  )
}

export default App;

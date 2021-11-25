import React from 'react'
import { HStack } from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/icon'
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa';

const Social = () => {
    return (
        <HStack spacing="24">

            <Icon as={FaFacebook} boxSize={50} />
            <Icon as={FaInstagram} boxSize={50} />
            <Icon as={FaLinkedin} boxSize={50} />
            <Icon as={FaTwitter} boxSize={50} />

        </HStack>
        
    )
}

export default Social

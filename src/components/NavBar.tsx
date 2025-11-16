import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} paddingX={"10px"}>
        <Image src={logo} alt="Logo" boxSize="60px" />
        <Text fontSize="2xl" fontWeight="bold">Game Core</Text>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
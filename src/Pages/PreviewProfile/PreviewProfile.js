import UserProfile from '../../Components/UserProfile/UserProfile'
import { Box, Heading, Container, HStack, Text } from '@chakra-ui/react'
const PreviewProfile = () => {
  return (
    <>
      <Container maxWidth='100%' centerContent={false} background='#F5F5F4'>
        <Box p='20px'>
          <Heading fontWeight='600' color='gray.700' fontSize='45px' mb='20px'>
            Settings
          </Heading>
          <HStack spacing='20px' fontSize='25px'>
            <Box
              padding="0px 10px"
              background='#FFC7C7'
              borderRadius='10px'
              cursor='pointer'
              _hover={{
                shadow: 'md',
                transform: 'translateY(-5px)',
                transition: '0.2s',
                transitionTimingFunction: 'ease-in-out',
              }}
            >
              <Text fontWeight='bold' p='2' color='#FF0000'>
                Preview
              </Text>
            </Box>
            <Box
              padding="0px 10px"
              background='white'
              borderRadius='10px'
              cursor='pointer'
              _hover={{
                shadow: 'md',
                transform: 'translateY(-5px)',
                transition: '0.2s',
                transitionTimingFunction: 'ease-in-out',
              }}
            >
              <Text fontWeight='bold' p='2'>
                General
              </Text>
            </Box>
            <Box
              padding="0px 10px"
              background='white'
              borderRadius='10px'
              cursor='pointer'
              _hover={{
                shadow: 'md',
                transform: 'translateY(-5px)',
                transition: '0.2s',
                transitionTimingFunction: 'ease-in-out',
              }}
            >
              <Text fontWeight='bold' p='2'>
                Profile
              </Text>
            </Box>
          </HStack>
        </Box>

        <UserProfile />
      </Container>
    </>
  )
}

export default PreviewProfile

import UserProfile from './UserProfile'
import { Box, Heading, Container, HStack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import ProfileSetting from './ProfileSetting'
import { useSelector } from 'react-redux'

const PreviewProfile = () => {

  const [whichActive, setWhichActive] = useState(true)

  const { userInfo } = useSelector(state => state.UserReducer)

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
              background={whichActive === 1 ? "#FFC7C7" : "white"}
              borderRadius='10px'
              cursor='pointer'
              _hover={{
                shadow: 'md',
                transform: 'translateY(-5px)',
                transition: '0.2s',
                transitionTimingFunction: 'ease-in-out',
              }}
              onClick={() => { setWhichActive(true) }}
            >
              <Text fontWeight='bold' p='2' color={whichActive === 1 ? "#FF0000" : "black"}>
                Preview
              </Text>
            </Box>

            <Box
              padding="0px 10px"
              background={whichActive === 3 ? "#FFC7C7" : "white"}
              borderRadius='10px'
              cursor='pointer'
              _hover={{
                shadow: 'md',
                transform: 'translateY(-5px)',
                transition: '0.2s',
                transitionTimingFunction: 'ease-in-out',
              }}
              onClick={() => { setWhichActive(false) }}
            >
              <Text fontWeight='bold' p='2' color={whichActive === 3 ? "#FF0000" : "black"}>
                Profile
              </Text>
            </Box>
          </HStack>
        </Box>
        {
          userInfo.lookingFor.length === 0 ? <ProfileSetting /> : whichActive ? <UserProfile /> : <ProfileSetting />
        }

      </Container>
    </>
  )
}

export default PreviewProfile

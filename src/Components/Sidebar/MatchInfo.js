import {
  Flex,
  Box,
  Divider,
  Text,
  Avatar,
  Card,
  CardBody,
  Image,
  Stack,
  StackDivider,
  WrapItem,
  Wrap,
  Container,
  ListItem,
  List,
} from '@chakra-ui/react'
import { GrLocation } from 'react-icons/gr'
import { useState } from 'react'
import ReactModal from 'react-modal'

const MatchInfo = ({ userInfo }) => {
  console.log(userInfo)
  const [isOpen, setIsOpen] = useState(false)

  const displaySkills = () => {
    return userInfo.skills.map((skill) => {
      return (
        <WrapItem
          borderRadius='10px'
          background='gray.100'
          p='2'
          pt='1'
          pb='1'
          key={skill}
        >
          {skill}
        </WrapItem>
      )
    })
  }

  const displayLookingFor = () => {
    return userInfo.lookingFor.map((course) => {
      return (
        <WrapItem
          borderRadius='10px'
          background='gray.100'
          p='2'
          pt='1'
          pb='1'
          key={course}
        >
          {course}
        </WrapItem>
      )
    })
  }

  return (
    <>
      <Flex
        display='flex'
        p='10px'
        cursor='pointer'
        _hover={{ background: 'whitesmoke' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* User Details */}
        <Box display='flex'>
          {/* Profile Pic */}
          <Avatar src={userInfo.img} size='md' />

          {/* User Name and School */}
          <Box display='flex' flexDir='column' fontWeight='650' ml='10px'>
            <Text> {userInfo.name}</Text>
            <Text> {userInfo.school}</Text>
          </Box>
        </Box>

        {/* Module or Project */}
        <Box display='flex' ml='auto' alignItems='center'>
          <Text fontSize='18px' fontWeight='bold' noOfLines={1}>
            {userInfo.matched}
          </Text>
        </Box>
      </Flex>
      <Divider borderColor='black' />

      <ReactModal
        isOpen={isOpen}
        contentLabel='User Details'
        onRequestClose={() => setIsOpen(false)}
        ariaHideApp={false}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '50px',
          },
          content: {
            position: 'absolute',
            top: '10vh',
            left: '20vw',
            right: '20vw',
            bottom: 'auto',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '010px',
            background: 'whitesmoke',
            outline: 'none',
          },
        }}
      >
        <Flex display='flex' justify='center' align='center'>
          <Card colorScheme='whiteAlpha'>
            <CardBody display='flex'>
              {/* Display Picture & Name */}
              <Box>
                <Image
                  src={userInfo.img}
                  maxWidth='250px'
                  borderRadius='200px'
                  objectFit='cover'
                />

                <Box
                  display='flex'
                  flexDir='column'
                  alignItems='center'
                  fontWeight='semibold'
                  fontSize='20px'
                  mt='4'
                  gap='5px'
                >
                  <Text>{userInfo.name}</Text>

                  <Flex align='center' justify='center'>
                    <GrLocation />
                    <Text ml='2'>{userInfo.school}</Text>
                  </Flex>
                  <Divider borderColor='grey.300' />
                  <Box>
                    <Text>Telegram: {userInfo.telegram}</Text>
                  </Box>
                  <Box>
                    <Text>Instagram: {userInfo.instagram}</Text>
                  </Box>
                </Box>
              </Box>

              {/* Details */}
              <Container centerContent='false' ml='20px'>
                {/* User Description */}
                <Stack
                  divider={<StackDivider borderColor='gray.500' />}
                  display='flex'
                >
                  <Text fontWeight='bold' fontSize='24px' mb='3'>
                    {userInfo.bio}
                  </Text>

                  <Box>
                    <Text fontWeight='bold' fontSize='24px' mb='2'>
                      Basic Info
                    </Text>

                    <List display='flex' flexDir='col' gap='15px' mb='3'>
                      <ListItem
                        borderRadius='10px'
                        background='gray.100'
                        p='2'
                        pt='1'
                        pb='1'
                        _hover={{
                          shadow: 'lg',
                          transform: 'translateY(-5px)',
                          transition: '0.2s',
                          transitionTimingFunction: 'ease-in-out',
                        }}
                      >
                        {userInfo.course}
                      </ListItem>
                      <ListItem
                        borderRadius='10px'
                        background='gray.100'
                        p='2'
                        pt='1'
                        pb='1'
                        _hover={{
                          shadow: 'lg',
                          transform: 'translateY(-5px)',
                          transition: '0.2s',
                          transitionTimingFunction: 'ease-in-out',
                        }}
                      >
                        Year {userInfo.yearOfStudy}
                      </ListItem>
                      <ListItem
                        borderRadius='10px'
                        background='gray.100'
                        p='2'
                        pt='1'
                        pb='1'
                        _hover={{
                          shadow: 'lg',
                          transform: 'translateY(-5px)',
                          transition: '0.2s',
                          transitionTimingFunction: 'ease-in-out',
                        }}
                      >
                        {userInfo.CGPA}
                      </ListItem>
                    </List>
                  </Box>

                  <Box>
                    <Text fontWeight='bold' fontSize='24px' mb='2'>
                      Skills
                    </Text>

                    <Wrap spacing='15px' align='center' mb='3'>
                      {displaySkills()}
                    </Wrap>
                  </Box>
                  <Box>
                    <Text fontWeight='bold' fontSize='24px' mb='2'>
                      Looking for
                    </Text>

                    <Wrap spacing='15px' align='center' mb='3'>
                      {displayLookingFor()}
                    </Wrap>
                  </Box>
                </Stack>

                <Divider borderColor='gray.500' mt='3' />
              </Container>
            </CardBody>
          </Card>
        </Flex>
      </ReactModal>
    </>
  )
}

export default MatchInfo

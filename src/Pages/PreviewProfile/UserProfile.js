import {
  Card,
  CardBody,
  Text,
  Image,
  Box,
  Container,
  Stack,
  StackDivider,
  List,
  ListItem,
  Wrap,
  WrapItem,
  Divider,
  Flex,
} from '@chakra-ui/react'
import { useEffect } from 'react';
import { GrLocation } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from '../../Redux/Actions/UserActions';
import { imageSrc } from '../../Settings/Settings';

const UserProfile = () => {
  const { userInfo } = useSelector((state) => state.UserReducer)

  const dispatch = useDispatch()

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

  useEffect(() => {
    dispatch(getProfileAction())
  }, [dispatch])

  return (
    <Flex display='flex' justify='center' align='center' p='50px'>
      <Card>
        <CardBody display='flex'>
          {/* Display Picture & Name */}
          <Flex flexDirection="column" justify="center" align="center">
            <Image
              src={imageSrc}
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
            >
              <Text>{userInfo.name}</Text>

              <Flex align='center' justify='center'>
                <GrLocation />
                <Text ml='2'>{userInfo.school}</Text>
              </Flex>
            </Box>
            <Divider borderColor='grey.500' margin="10px 0" />
            <Flex justify="space-between" align="center" gap="3">
              <Box>
                <a style={{ fontSize: "35px", color: "#0088cc" }} href={`https://telegram.me/yayharryyy${userInfo.telegram}`} target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i></a>
              </Box>
              <Box>
                <a style={{ fontSize: "35px", color: "#C13584" }} href={`https://instagram.com/${userInfo.instagram}`} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              </Box>
              <Box>
                <a style={{ fontSize: "35px", color: "#0077b5" }} href={`https://${userInfo.linkedin}`} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
              </Box>
              <Box>
                <a style={{ fontSize: "35px", color: "black" }} href={`https://${userInfo.github}`} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              </Box>
            </Flex>
          </Flex>

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
                  Basic
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
                    {userInfo?.CGPA?.toFixed(2)}
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
  )
}

export default UserProfile

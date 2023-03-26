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
import { GrLocation } from 'react-icons/gr'
import { useSelector } from 'react-redux'

const UserProfile = () => {
  const { userInfo } = useSelector((state) => state.UserReducer)

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
    <Flex display='flex' justify='center' align='center' p='50px'>
      <Card>
        <CardBody display='flex'>
          {/* Display Picture & Name */}
          <Box>
            <Image
              src='https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'
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
  )
}

export default UserProfile

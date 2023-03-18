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

const UserProfile = () => {
  return (
    <Flex display='flex' justify='center' align="center" p='50px'>
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
              <Text>John Cena An</Text>

              <Flex align="center" justify="center">
                <GrLocation />
                <Text ml='2'>NTU</Text>
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
                Looking for like-minded teammates to actualize brilliant ideas
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
                    Male
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
                    DSAI
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
                    Year 3
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
                    5.00
                  </ListItem>
                </List>
              </Box>

              <Box>
                <Text fontWeight='bold' fontSize='24px' mb='2'>
                  Skills
                </Text>

                <Wrap spacing='15px' align='center' mb='3'>
                  <WrapItem
                    borderRadius='10px'
                    background='gray.100'
                    p='2'
                    pt='1'
                    pb='1'
                  >
                    NextJS
                  </WrapItem>

                  <WrapItem
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
                    ExpressJS
                  </WrapItem>
                  <WrapItem
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
                    PostgreSQL
                  </WrapItem>

                  <WrapItem
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
                    DevOps
                  </WrapItem>

                  <WrapItem
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
                    Agile
                  </WrapItem>

                  <WrapItem
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
                    Python
                  </WrapItem>

                  <WrapItem
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
                    Waterfall
                  </WrapItem>

                  <WrapItem
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
                    Java
                  </WrapItem>

                  <WrapItem
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
                    HTML
                  </WrapItem>
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

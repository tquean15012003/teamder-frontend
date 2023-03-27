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
import React from 'react'
import { images } from '../../Settings/Settings'

export default function SwipeCard(props) {

    const { user } = props

    const displaySkills = () => {
        return user.skills.map((skill) => {
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
        return user.lookingFor.map((course) => {
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
                    <Flex flexDirection="column" justify="center" align="center">
                        <Image
                            src={images[Math.floor(Math.random() * (99 - 0 + 0) + 0)]}
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
                            <Text>{user.name}</Text>

                            <Flex align='center' justify='center'>
                                <GrLocation />
                                <Text ml='2'>{user.school}</Text>
                            </Flex>
                        </Box>
                        {/* <Divider borderColor='grey.500' margin="10px 0" />
                        <Flex justify="space-between" align="center" gap="3">
                            <Box>
                                <a style={{ fontSize: "35px", color: "#0088cc" }} href={`https://telegram.me/yayharryyy${user.telegram}`} target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i></a>
                            </Box>
                            <Box>
                                <a style={{ fontSize: "35px", color: "#C13584" }} href={`https://instagram.com/${user.instagram}`} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            </Box>
                            <Box>
                                <a style={{ fontSize: "35px", color: "#0077b5" }} href={`https://${user.linkedin}`} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                            </Box>
                            <Box>
                                <a style={{ fontSize: "35px", color: "black" }} href={`https://${user.github}`} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                            </Box>
                        </Flex> */}
                    </Flex>

                    {/* Details */}
                    <Container centerContent='false' ml='20px'>
                        {/* User Description */}
                        <Stack
                            divider={<StackDivider borderColor='gray.500' />}
                            display='flex'
                        >
                            <Text fontWeight='bold' fontSize='24px' mb='3'>
                                {user.bio}
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
                                        {user.course}
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
                                        Year {user.yearOfStudy}
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
                                        {user?.CGPA?.toFixed(2)}
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

import { Box, Button, Container, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {

    const navigate = useNavigate()

    return (
        <Container maxW="8xl" paddingTop="5">
            <div style={{ display: "flex", justifyContent: "right", alignItems: "center" }}>
                <Box>
                    <Button onClick={() => {
                        navigate("/login", { replace: false })
                    }} size="lg" colorScheme="yellow" color="black" ><Text fontSize="xl">Login</Text></Button>
                </Box>
            </div>
            <Box marginTop="20">
                <Text fontWeight="bold" color="black" fontSize="6xl" noOfLines="2">Because you deserve better than toxic groupmates...</Text>
            </Box>
            <Box marginTop="20">
                <Text fontWeight="bold" color="yellow.400" fontSize="5xl" noOfLines="2">Your ideal groupmate could be just one swipe away...</Text>
            </Box>
            <Box marginTop="20">
                <Button onClick={() => {
                    navigate("/login", { replace: false })
                }} size="lg" colorScheme="yellow" color="black" ><Text fontSize="2xl" padding="0 10px">Register now</Text></Button>
            </Box>
        </Container>

    )
}

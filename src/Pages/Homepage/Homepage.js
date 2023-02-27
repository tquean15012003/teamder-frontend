import { Box, Button, Container, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {

    const navigate = useNavigate()

    return (
        <Box>
            <Box marginTop="10">
                <Text fontWeight="bold" color="black" fontSize="6xl" noOfLines="2">Because you deserve better than toxic groupmates...</Text>
            </Box>
            <Box marginTop="20">
                <Text fontWeight="bold" color="#ED9B59" fontSize="5xl" noOfLines="2">Your ideal groupmate could be just one swipe away...</Text>
            </Box>
            <Box marginTop="20">
                <button onClick={() => {
                    navigate("/signup", { replace: false })
                }} style={{ padding: "5px 40px", color: "white", backgroundColor: "#ED9B59", borderRadius: "10px" }}
                ><Text fontSize="3xl" fontWeight="bold">Register now</Text>
                </button>
            </Box>
        </Box>

    )
}

import { Box } from '@chakra-ui/react'
import React from 'react'

export default function HomepageTemplate(props) {
    const { Component } = props

    return (
        <Box
            width="100%"
            height="100vh"
            bgGradient='linear(to-tr, pink.500, orange.500)'
        >
            <Component />
        </Box>
    )
}

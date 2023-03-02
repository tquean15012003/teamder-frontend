import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import HomepageHeader from './HomepageHeader'

export default function HomepageTemplate(props) {
    const { Component } = props

    return (
        <Box
            width="100%"
            height="100vh"
            bgGradient='linear(to-tr, #FC277A, #FF6038)'
            overflow="hidden"
        >
            <Container maxW="7xl">
                <HomepageHeader />
                <Component />
            </Container>
        </Box>
    )
}

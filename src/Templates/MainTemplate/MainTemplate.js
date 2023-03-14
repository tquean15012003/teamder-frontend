import { Box, Container } from '@chakra-ui/react'
import Sidebar from '../../Components/Sidebar/Sidebar'; 



export default function HomepageTemplate(props) {
    const { Component } = props

    return (
        <Box
            width="100%"
            height="100vh"
           
        >
        <Sidebar />
        <Component/>
       
        </Box>
    )
}

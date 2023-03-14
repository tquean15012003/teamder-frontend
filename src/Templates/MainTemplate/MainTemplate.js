import { Box, Container } from '@chakra-ui/react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import TopMenu from '../../Components/TopMenu/TopMenu'

export default function HomepageTemplate(props) {
  const { Component } = props
  return (
    <Box width='100%' height='100vh'>
      <Sidebar />
      <TopMenu />
      <Component />
    </Box>
  )
}

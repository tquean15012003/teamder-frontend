import { Box } from '@chakra-ui/react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import TopMenu from '../../Components/TopMenu/TopMenu'

export default function HomepageTemplate(props) {
  const { Component } = props
  return (
    <Box width='100%' minHeight='100vh' display='flex' flexGrow='1'>
      <Sidebar />
      <TopMenu />
      <Component />
    </Box>
  )
}

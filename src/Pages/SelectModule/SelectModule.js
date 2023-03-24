import Searchbar from '../../Components/Searchbar/Searchbar'
import Module from '../../Components/Module/Module'
import { Box, Container, Text } from '@chakra-ui/react'
import { useState } from 'react'

const SelectModule = () => {
  const [modules, setModules] = useState([])
  return (
    <Container maxW='lg'>
      <Searchbar />
      {/*Modules*/}
      <Box gap='50px'>
        {/* {modules.map((module) => {
        
        })} */}
        <Module />
        <Module />
        <Module />
      </Box>
    </Container>
  )
}

export default SelectModule

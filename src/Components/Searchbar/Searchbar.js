import { Box, InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'
const Searchbar = () => {
  const [text, setText] = useState('')

  console.log(text)

  //to do implement search algorithm
  return (
    <Box mt='2%' mb='3%' w='90%'>
      <InputGroup>
        <Input
          size='lg'
          placeholder='Search modules'
          onChange={(e) => setText(e.target)}
          color='black'
          borderColor='black'
        ></Input>
        <InputRightElement>
          <AiOutlineSearch />
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}

export default Searchbar

import { Box, InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'
const Searchbar = () => {
  const [text, setText] = useState('')

  //to do implement search algorithm
  return (
    <Box mt='3' mb='3'>
      <InputGroup>
        <Input
          size='lg'
          placeholder='Search modules'
          onChange={(e) => setText(e.target)}
        ></Input>
        <InputRightElement>
          <AiOutlineSearch />
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}

export default Searchbar

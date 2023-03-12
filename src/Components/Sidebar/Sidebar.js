import { Flex, Text, Avatar, Box, Divider } from '@chakra-ui/react'
import { useState } from 'react'
import img from '../../Assets/ProfileImages/HarryPic.jfif' //test image
import MatchInfo from './MatchInfo'

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  return (
    <Flex
      pos='sticky'
      h='100vh'
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
      w={open ? '300px' : '20px'}
      flexDir='column'
    >
      {/* User Header*/}
      {open && (
        <Box
          width='100%'
          height='12vh'
          bgGradient='linear(to-tr, #FC277A, #FF6038)'
          display='flex'
          alignItems='center'
        >
          <Avatar
            src={img}
            name='Harry Tran'
            size='lg'
            marginLeft='5px'
            cursor='pointer'
          />
          <Text
            color='white'
            fontSize='18px'
            fontWeight='bold'
            marginLeft='15px'
          >
            Tran Que An
          </Text>
        </Box>
      )}

      {/* Matches Info */}
      {open && (
        <>
          <Text color='black' fontSize='25px' fontWeight='bold' p='5px'>
            Matches
          </Text>
          <Divider orientation='horizontal' borderColor='black' />
          <Flex display='flex' flexDir='column'>
            <MatchInfo />

            <MatchInfo />
            <MatchInfo />
            <MatchInfo />

            <MatchInfo />
            <MatchInfo />
          </Flex>
        </>
      )}
    </Flex>
  )
}

export default Sidebar

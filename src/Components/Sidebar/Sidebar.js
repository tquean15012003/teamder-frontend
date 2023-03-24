import { Flex, Text, Avatar, Box, Divider } from '@chakra-ui/react'
import { useState } from 'react'
import img from '../../Assets/ProfileImages/HarryPic.jfif' //test image
import MatchInfo from './MatchInfo'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const [open, setOpen] = useState(true)

  const navigate = useNavigate()

  const { pathname } = useLocation()

  console.log(pathname)

  return (
    <>
      {open && (
        <Flex
          pos='sticky'
          minHeight='100vh'
          boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
          w='350px'
          flexDir='column'
        >
          {/* User Header*/}

          <Box
            width='100%'
            height='12vh'
            bgGradient='linear(to-tr, #FC277A, #FF6038)'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
          >
            <Avatar
              src={img}
              name='Harry Tran'
              size='lg'
              marginLeft='20px'
              cursor='pointer'
              onClick={() => {
                if (pathname !== '/swipe') {
                  navigate('/swipe', { replace: false })
                } else {
                  navigate('/previewprofile', { replace: false })
                }
              }}
            />
            <Text color='white' fontSize='18px' fontWeight='bold' pr='20px'>
              Tran Que An
            </Text>

            <AiOutlineArrowLeft
              m='auto'
              fontSize='30px'
              onClick={() => setOpen(!open)}
              cursor='pointer'
              color='white'
            />
          </Box>

          {/* Matches Info */}

          <>
            <Text color='black' fontSize='25px' fontWeight='bold' p='5px'>
              Matches
            </Text>
            <Divider orientation='horizontal' borderColor='black' />
            <Flex display='flex' flexDir='column'>
              {/*placeholder for later */}
              <MatchInfo />

              <MatchInfo />
              <MatchInfo />
              <MatchInfo />

              <MatchInfo />
              <MatchInfo />
            </Flex>
          </>
        </Flex>
      )}

      {!open && (
        <Flex
          pos='sticky'
          minHeight='100vh'
          boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
          w='40px'
          flexDir='column'
          bgGradient='linear(to-tr, #FC277A, #FF6038)'
        >
          <Box
            width='100%'
            height='12vh'
            display='flex'
            alignItems='center'
            ml='5px'
            justifyContent='space-between'
          >
            <AiOutlineArrowRight
              fontSize='30px'
              onClick={() => setOpen(!open)}
              cursor='pointer'
              color='white'
            />
          </Box>
        </Flex>
      )}
    </>
  )
}

export default Sidebar

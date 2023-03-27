import { Flex, Text, Avatar, Box, Divider } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import MatchInfo from './MatchInfo'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { images, imageSrc } from '../../Settings/Settings'
import { getMatchAction } from '../../Redux/Actions/UserActions'


const Sidebar = () => {
  //to be fetched when the backend algorithm works
  const [open, setOpen] = useState(true)

  const { userInfo, match } = useSelector(state => state.UserReducer)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { pathname } = useLocation()

  useEffect(() => {
    dispatch(getMatchAction())
  }, [dispatch])
  return (
    <>
      {open && (
        <Flex
          pos='sticky'
          minHeight='100vh'
          boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
          minW='300px'
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
              src={imageSrc}
              name='Harry Tran'
              size='lg'
              marginLeft='20px'
              cursor='pointer'
              onClick={() => {
                if (pathname !== '/selectmodule') {
                  navigate('/selectmodule', { replace: false })
                } else {
                  navigate('/previewprofile', { replace: false })
                }
              }}
            />
            <Text color='white' fontSize='18px' fontWeight='bold' pr='20px'>
              {userInfo.name}
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
              {match?.map((user, index) => (
                <MatchInfo userInfo={user} imageSrc={images[index]} key={index} />
              ))}
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

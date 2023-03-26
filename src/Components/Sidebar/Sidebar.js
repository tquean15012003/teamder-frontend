import { Flex, Text, Avatar, Box, Divider } from '@chakra-ui/react'
import { useState } from 'react'
import img from '../../Assets/ProfileImages/HarryPic.jfif' //test image
import MatchInfo from './MatchInfo'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

//hard coded data for demo
const data = [
  {
    name: 'John Barton',
    img: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg',
    school: 'NTU',
    matched: 'SC3040',
    course: 'CE',
    yearOfStudy: '3',
    CGPA: '4.00-4.50',
    bio: 'Energetic about the hardware products',
    skills: ['Java', 'Flutter', 'DevOps', 'HTML', 'CSS', 'Agile', 'Waterfall'],
    lookingFor: ['SC3040', 'SC3010'],
    linkedin: 'John Barton',
    github: '@john_bar',
    telegram: '@john_barton',
    instagram: '@john_barton',
  },
  {
    name: 'Christopher Tan',
    img: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg',
    school: 'NTU',
    matched: 'SC1006',
    course: 'DSAI',
    yearOfStudy: '1',
    CGPA: '3.50-4.00',
    bio: 'Looking for Groupmates in DSAI Course',
    skills: ['Python', 'Flutter', 'TensorFlow', 'Pandas', 'Java'],
    lookingFor: ['SC1006', 'SC2002'],
    linkedin: 'Christopher Tan',
    github: '@chris_tan',
    telegram: '@chris_tan',
    instagram: '@chrissss',
  },
  {
    name: 'Joe',
    img: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg',
    school: 'NTU',
    matched: 'Hackathon',
    course: 'BCG',
    yearOfStudy: '3',
    CGPA: '4.50-5.00',
    bio: 'Changing the world, one step at a time',
    skills: [
      'Java',
      'Nest.js',
      'Vue.js',
      'Next.js',
      'Flutter',
      'DevOps',
      'HTML',
      'CSS',
      'Agile',
      'Waterfall',
    ],
    lookingFor: ['Hackathon', 'SC3040'],
    linkedin: 'Joe_Malone',
    github: '@joe_is_alone',
    telegram: '@joe_mama',
    instagram: '@joe_m_lone',
  },
  {
    name: 'Andy Koh',
    img: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg',
    school: 'NTU',
    matched: 'SC2006',
    course: 'BCE',
    yearOfStudy: '2',
    CGPA: '4.50-5.00',
    bio: 'Looking for passionate groupmates',
    skills: [
      'Java',
      'Flutter',
      'DevOps',
      'HTML',
      'CSS',
      'Agile',
      'Waterfall',
      'Rust',
      'Angular',
    ],
    lookingFor: ['SC2006'],
    linkedin: 'Andy Koh',
    github: '@&dykoh',
    telegram: '@&dy',
    instagram: '@&dykohmama',
  },
  {
    name: 'Chan Wei Ming',
    img: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    school: 'NUS',
    matched: 'SC3040',
    course: 'CS',
    yearOfStudy: '2',
    CGPA: '4.00-4.50',
    bio: 'Exchange student looking for a teammate',
    skills: [
      'Java',
      'Flutter',
      'DevOps',
      'HTML',
      'React',
      'CSS',
      'Agile',
      'Waterfall',
    ],
    lookingFor: ['SC3040'],
    linkedin: 'Chan Wei Ming',
    github: '@c_w_m200',
    telegram: '@cwmingwwww',
    instagram: '@cwminggggg',
  },
]

const Sidebar = () => {
  //to be fetched when the backend algorithm works
  const matchedUsers = data
  const [open, setOpen] = useState(true)

  const { userInfo } = useSelector((state) => state.UserReducer)

  const navigate = useNavigate()

  const { pathname } = useLocation()

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
              src={img}
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
              {matchedUsers.map((user, index) => (
                <MatchInfo userInfo={user} key={index} />
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

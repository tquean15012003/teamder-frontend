import { Box, Text, Card } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Module = (props) => {
  const { course } = props

  const navigate = useNavigate()

  return (
    <Card
      p='3'
      mb='3'
      display='flex'
      flexDir='row'
      variant='outline'
      _hover={{
        shadow: 'xl',
        transform: 'translateY(-5px)',
        transition: '0.3s',
        transitionTimingFunction: 'ease-in-out',
      }}
      onClick={() => {
        navigate('/swipe', { replace: false })
      }}
    >
      <Box display='flex' flexDir='column' justifyContent='center'>
        <Text fontWeight='bold' fontSize='md'>
          {course.courseCode}
        </Text>
      </Box>

      <Box
        display='flex'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
      >
        <Text fontWeight='semibold' m='2'>
          {course.courseName}
        </Text>
        <Text ml='10'>
          You deserve better than toxic groupmates. Together we get better
          grades in {course.courseName}
        </Text>
      </Box>
    </Card>
  )
}

export default Module

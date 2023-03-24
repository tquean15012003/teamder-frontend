import { Box, Text, Card, Divider, Center } from '@chakra-ui/react'

const Module = () => {
  return (
    <Card
      p='3'
      mb='5'
      display='flex'
      flexDir='row'
      variant='outline'
      _hover={{
        shadow: 'xl',
        transform: 'translateY(-5px)',
        transition: '0.3s',
        transitionTimingFunction: 'ease-in-out',
      }}
    >
      <Box display='flex' flexDir='column' justifyContent='center'>
        <Text fontWeight='bold' fontSize='md'>
          SC3040
        </Text>
      </Box>

      <Box
        display='flex'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
      >
        <Text fontWeight='semibold' m='2'>
          Advanced Software Engineering
        </Text>
        <Text ml='10'>
          Short Description Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Adipisci facilis magnam quasi? Nostrum nemo corrupti repudiandae
          veniam laboriosam accusantium, in eum veritatis commodi id eligendi?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
          ipsum?
        </Text>
      </Box>
    </Card>
  )
}

export default Module

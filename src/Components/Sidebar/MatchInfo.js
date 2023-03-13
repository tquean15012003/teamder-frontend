import { Flex, Box, Divider, Text, Avatar } from '@chakra-ui/react'

const MatchInfo = () => {
  return (
    <>
      <Flex
        display='flex'
        p='10px'
        cursor='pointer'
        _hover={{ background: 'whitesmoke' }}
      >
        {/* User Details */}
        <Box display='flex'>
          {/* Profile Pic */}
          <Avatar
            src='https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg'
            size='md'
          />

          {/* User Name and School */}
          <Box display='flex' flexDir='column' fontWeight='650' ml='10px'>
            <Text> Shannon</Text>
            <Text> NUS</Text>
          </Box>
        </Box>

        {/* Module or Project */}
        <Box display='flex' ml='auto' alignItems='center'>
          <Text fontSize='18px' fontWeight='bold' noOfLines={1}>
            Hackerthon
          </Text>
        </Box>
      </Flex>
      <Divider borderColor='black' />
    </>
  )
}

export default MatchInfo

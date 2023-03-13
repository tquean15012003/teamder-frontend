import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomepageHeader() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      <Box>
        <Text
          onClick={() => {
            navigate('/', { replace: false })
          }}
          cursor='pointer'
          fontSize='5xl'
          fontWeight='bold'
          color='yellow.400'
        >
          Teamder !!
        </Text>
      </Box>
      <Box>
        <button
          onClick={() => {
            navigate('/login', { replace: false })
          }}
          style={{
            padding: '5px 25px',
            color: 'white',
            backgroundColor: '#ED9B59',
            borderRadius: '10px',
          }}
        >
          <Text fontSize='xl' fontWeight='medium'>
            Login
          </Text>
        </button>
      </Box>
    </div>
  )
}

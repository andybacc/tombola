import React from 'react'
import { Center } from '@chakra-ui/react'

const Numerone = ({ numerone }) => {
    if (numerone != '') return (
      <Center
        position='absolute'
        top='0'
        left='0'
        right='0'
        bottom='0'
        zIndex='1000'
        bg={'rgba(0,0,0,0.5)'}
        color='white'
        fontSize='500px'
        fontWeight={700}
      >{numerone}</Center>
    )
  }
export default Numerone
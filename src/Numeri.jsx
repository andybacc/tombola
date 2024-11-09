import { Button, Flex, Box, Grid, VStack } from '@chakra-ui/react'
import cookie from 'js-cookie'
import React, { useEffect, useState } from 'react'
import _ from 'lodash'

const Numeri = ({settings,marked,setMarked}) => {
    const markNumber = (n) => {
        var tmp = marked.filter((m) => m !== NaN)

        if (marked.includes(n)) {
            setMarked(tmp.filter((m) => m !== n))
        } else {
            setMarked([...tmp, n])
        }
    }

    return (
        <VStack my='3'>
            <Grid templateColumns="repeat(10, 1fr)" gap={settings?.gap+'px'}>
                {Array.from({ length: 90 }, (_, i) => (
                    <Button key={i}
                        onClick={() => markNumber(i + 1)}
                        display='flex'
                        justifyContent='center'
                        bg={marked.includes(i + 1) ? 'teal.500' : 'grey.500'}
                        variant={marked.includes(i + 1) ? 'solid' : 'outline'}
                        _hover={{ bg: marked.includes(i + 1) ? 'teal.500' : 'grey.500' }}
                        borderWidth='1px'
                        fontSize={settings?.size / 2.5}
                        color={marked.includes(i + 1) ? 'white' : 'gray.600'}
                        p='5'
                        w={settings?.size+'px'}
                        h={settings?.size+'px'}
                    >{i + 1}</Button>
                ))}
            </Grid>
        </VStack>
    )
}

export default Numeri
import { Button, Grid, VStack } from '@chakra-ui/react'
import React from 'react'

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
                        variant={marked.includes(i + 1) ? 'solid' : 'outline'}
                        _hover={{ bg: marked.includes(i + 1) ? settings?.marked : '' }}
                        borderWidth='1px'
                        fontSize={settings?.size / 2.5}
                        colorScheme={marked.includes(i + 1) ? settings?.marked : settings?.unmarked}
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
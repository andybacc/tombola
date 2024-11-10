import { Grid, Box, Button, Divider, FormControl, FormLabel, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Switch } from '@chakra-ui/react'
import React from 'react'
import { IoMenu } from 'react-icons/io5'

const Menu = ({ settings, setSettings, setMarked, initVals }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton icon={<IoMenu />} variant='ghost'>Menu</IconButton>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody mt='8'>
          <FormControl>
            <FormLabel>Dimensione</FormLabel>
            <Slider aria-label='slider-ex-2' colorScheme='teal' defaultValue={settings?.size}
              min={40} max={140} step={2}
              value={settings?.size} onChange={(val) => setSettings({ ...settings, size: parseInt(val) })}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </FormControl>
          <Divider my='3' />
          <FormControl>
            <FormLabel>Gap</FormLabel>
            <Slider aria-label='slider-ex-2' colorScheme='teal'
              min={0} max={50}
              defaultValue={settings?.gap}
              value={settings?.gap} onChange={(val) => setSettings({ ...settings, gap: parseInt(val) })}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </FormControl>
          <Divider my='3' />
          <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='heading' mb='0'>
              Mostra testata
            </FormLabel>
            <Switch id='heading'
              isChecked={settings?.heading}
              colorScheme={'teal'}
              size='lg'
              onChange={(e) => setSettings({ ...settings, heading: e.target.checked })} />
          </FormControl>
          <Divider my='3' />

          <FormControl>
            <FormLabel>Colore marcati</FormLabel>
            <Grid templateColumns='repeat(5, 1fr)' gap={2}>
              <Button w='30px' minH='30px' colorScheme='teal' onClick={() => setSettings({ ...settings, marked: 'teal' })}></Button>
              <Button w='30px' minH='30px' colorScheme='red' onClick={() => setSettings({ ...settings, marked: 'red' })}></Button>
              <Button w='30px' minH='30px' colorScheme='blue' onClick={() => setSettings({ ...settings, marked: 'blue' })}></Button>
              <Button w='30px' minH='30px' colorScheme='yellow' onClick={() => setSettings({ ...settings, marked: 'yellow' })}></Button>
              <Button w='30px' minH='30px' colorScheme='purple' onClick={() => setSettings({ ...settings, marked: 'purple' })}></Button>
            </Grid>
            </FormControl>

            <FormControl>
              <FormLabel>Colore non marcati</FormLabel>
              <Grid templateColumns='repeat(5, 1fr)' gap={2}>
                <Button w='30px' minH='30px' colorScheme='gray' onClick={() => setSettings({ ...settings, unmarked: 'gray' })}></Button>
                <Button w='30px' minH='30px' colorScheme='orange' onClick={() => setSettings({ ...settings, unmarked: 'orange' })}></Button>
                <Button w='30px' minH='30px' colorScheme='green' onClick={() => setSettings({ ...settings, unmarked: 'green' })}></Button>
                <Button w='30px' minH='30px' colorScheme='pink' onClick={() => setSettings({ ...settings, unmarked: 'pink' })}></Button>
                <Button w='30px' minH='30px' colorScheme='cyan' onClick={() => setSettings({ ...settings, unmarked: 'cyan' })}></Button>
              </Grid>
            </FormControl>
            <Divider my='3' />
          <Button onClick={() => { setMarked([]); setSettings(initVals) }}>Reset</Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default Menu
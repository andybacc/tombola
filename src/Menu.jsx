import { Button, Divider, Flex, FormControl, FormLabel, IconButton, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'
import React from 'react'
import { IoMenu } from 'react-icons/io5'
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react"

const Menu = ({ settings, setSettings, setMarked }) => {
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
              min={40} max={140} step={5}
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
          <Button onClick={() => setMarked([])}>Reset</Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default Menu
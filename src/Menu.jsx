import { Button, Divider, FormControl, FormLabel, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Switch } from '@chakra-ui/react'
import React from 'react'
import { IoMenu } from 'react-icons/io5'

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
          <Button onClick={() => setMarked([])}>Reset</Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default Menu
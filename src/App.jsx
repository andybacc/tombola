import React, { useEffect, useState } from 'react';
import { Center, Container, Heading, HStack, Spacer } from "@chakra-ui/react";
import cookie from 'js-cookie';
import Menu from "./Menu";
import Numeri from "./Numeri";
import Numerone from "./Numerone";

function App() {
  const initVals = { size: 50, gap: 5, marked: 'teal', unmarked: 'gray', heading: false, testata: 'Tombola' }
  const [marked, setMarked] = useState([])
  const [settings, setSettings] = useState(initVals)
  const [numerone, setNumerone] = useState('')

  const handleKeyDown = (event) => {
    if (event.key >= 0 && event.key <= 9) {
      setNumerone(numerone + event.key)
    }
    if (event.key === 'Enter') {
      setMarked([...marked, parseInt(numerone)])
    }
    if (event.key === 'Backspace') {
      setNumerone(numerone.slice(0, -1))
    }
    if (event.key === 'Escape' || event.key === 'Delete') {
      setNumerone('')
    }
  }

  useEffect(() => {
    var tombolaMarked = cookie.get('tombolaMarked')
    var tombolaSettings = cookie.get('tombolaSettings')
    if (tombolaMarked != '' && tombolaMarked) {
      setMarked(tombolaMarked.split(',').map((m) => {
        if (m !== 'NaN') return parseInt(m)
      }))
    }
    if (tombolaSettings != '' && tombolaSettings) {
      setSettings(JSON.parse(tombolaSettings))
    }
  }, [])

  useEffect(() => {
    cookie.set('tombolaMarked', marked)
    cookie.set('tombolaSettings', JSON.stringify(settings))
    setNumerone('')
  }, [marked, settings])


  return (
    <>
      <Center onKeyDown={handleKeyDown} tabIndex={0} >
        <Container size='xl'>
          <HStack>
            <Spacer />
            {settings?.heading && <Heading size='2xl' as="h1">{settings?.testata}</Heading>}
            <Spacer />
            <Menu setMarked={setMarked} settings={settings} setSettings={setSettings} initVals={initVals} />
          </HStack>
          <Numeri marked={marked} setMarked={setMarked} settings={settings} />
        </Container>
      </Center>
      <Numerone numerone={numerone} />
    </>
  )
}
export default App;

import { Container, Heading, HStack, Spacer } from "@chakra-ui/react";
import React, { useState } from 'react';
import Menu from "./Menu";
import Numeri from "./Numeri";
import cookie from 'js-cookie';
import { useEffect } from "react";

function App() {
  const [marked, setMarked] = useState([])
  const [settings, setSettings] = useState(JSON.parse(cookie.get('tombolaSettings') || { size: 50, gap: 4 }))

  useEffect(() => {
    var tombolaMarked = cookie.get('tombolaMarked')
    if (tombolaMarked) {
      setMarked(tombolaMarked.split(',').map((m) => {
        if (m !== 'NaN') return parseInt(m)
      }))
    } else {
      setMarked([])
    }
  }, [])

  useEffect(() => {
    console.log(settings)
    cookie.set('tombolaMarked', marked)
    cookie.set('tombolaSettings', JSON.stringify(settings))
  }, [marked, settings])


  return (
    <Container>
      <HStack my='7'>
        <Spacer />
        <Heading size='2xl' as="h1">Tombola</Heading>
        <Spacer />
        <Menu setMarked={setMarked} settings={settings} setSettings={setSettings} />
      </HStack>
      <Numeri marked={marked} setMarked={setMarked} settings={settings} />
    </Container>
  )
}
export default App;

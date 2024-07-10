import { useState } from 'react'

import './App.css'

import Header from './common-ui/header/Header'
import Navigation from './common-ui/navigation/Navigation'
import CommonButton from './common-ui/form/Button'

import NavData from './assets/data/nav.json'
import { TNavItem } from './common-ui/navigation/type'


function App() {
  const [navData] = useState<TNavItem[]>(NavData?.navItem)

  return (
    <>
      <Header><Navigation data={navData} /></Header>
      <CommonButton></CommonButton>
    </>
  )
}

export default App

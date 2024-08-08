import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MoodClicker from './MoodClicker'
import Counter from './Counter'
import ColorPicker from './ColorPicker'

function App() {

  return (
    <>
      <ColorPicker />
      <Counter />
      <MoodClicker />
    </>
  )
}

export default App

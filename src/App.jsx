import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MoodClicker from './MoodClicker'
import Counter from './Counter'
import ColorPicker from './ColorPicker'
import SignupForm from './SignupForm'
import DogDetail from './DogDetail'

function App() {

  return (
    <>
      <ColorPicker />
      <Counter />
      <MoodClicker />
      <SignupForm />
      <DogDetail />
    </>
  )
}

export default App

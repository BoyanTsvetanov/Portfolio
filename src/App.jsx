import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contacts from './sections/Contacts'
import Intro from './sections/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro/>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contacts/>
    </>
  )
}

export default App

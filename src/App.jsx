import { useState } from 'react'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Mothers from './components/Mothers'
import Watch from './components/Watch'
import Grid from './components/Grid'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <Mothers />
      <Watch />
      <Grid />
      <Footer />
    </>
  )
}

export default App

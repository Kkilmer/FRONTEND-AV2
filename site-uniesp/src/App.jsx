import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Inicial from './pages/Inicial'
import CustomNavBar from './components/CustomNavBar'
import Faculdade from './pages/Faculdade'

const App = () => {
  return (
    <BrowserRouter>
      <CustomNavBar />
      <Container className='my-4'>
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/a-faculdade" element={<Faculdade />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
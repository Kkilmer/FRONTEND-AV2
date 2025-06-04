import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Inicial from './pages/Inicial'
import CustomNavBar from './components/CustomNavBar'
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'
import Noticias from './pages/Noticias'
import VisualizaNoticia from './pages/VisualizaNoticia'

const App = () => {
  return (
    <BrowserRouter>
      <CustomNavBar />
      <Container className='my-4'>
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/a-faculdade" element={<Faculdade />}/>
          <Route path="/dpo-lgpd" element={<DpoLgpd />}/>
          <Route path="/noticias" element={<Noticias />}/>
          <Route path="/visualiza-notica/:id" element={<VisualizaNoticia />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
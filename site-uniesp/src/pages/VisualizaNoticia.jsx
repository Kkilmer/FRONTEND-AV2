import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
// como fazer gerenciador de produtos turna 3 / 2 / 1 - como pegar a url de um canto só

const VisualizaNoticia = () => {
    const { id } = useParams()
    const [notica, setNotica] = useState({})
    const urlBase = "http://localhost:3000" 
    // trazer a url base para import 
    useEffect(() => {
        axios.get(`${urlBase}/noticias/${id}`)
        .then(response => setNotica(response.data))
        .catch(error => console.error("Erro ao obter a noticia: ", error))
    }, [id])
    
  return (
    <Container class="py-4">
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Title>{notica.titulo}</Card.Title>
                <Card.Text>{notica.texto}</Card.Text>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default VisualizaNoticia
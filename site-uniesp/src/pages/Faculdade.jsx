import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Faculdade = () => {
  return (
    <Container className="py-4">
        <h2 className="mb-4">A Faculdade</h2>
        
        {/* Aqui será o carousel do banner*/}

        <Card className="mb-4 shadow-sm">
            <Card.Body>
                <p>
                A Faculdade UNIESP é uma instituição comprometida com a excelência no ensino e no desenvolvimento de habilidades para o mercado de trabalho...
                </p>
                <p>
                Nossos cursos são projetados para formar profissionais capacitados e conscientes de seu papel na sociedade...
            </p>
            </Card.Body>
        </Card>

        <Row className="g-4">

            <Col md={4}>
                {/*Card 1*/}
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                        alt="Campus Life"
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                        <Card.Title>
                            Vida no Campus
                        </Card.Title>
                        <Card.Text>
                            Um ambiente vibrante e acolhedor, com atividades que promovem o desenvolvimento pessoal e social dos alunos.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                {/*Card 2*/}
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
                        alt="Library"
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                        <Card.Title>
                            Biblioteca
                        </Card.Title>
                        <Card.Text>
                            Uma biblioteca com um acervo completo e atualizado, incluindo livros, revistas e recursos digitais para pesquisa e estudo.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                {/*Card 3*/}
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1652974731232-efc86a9bd985"
                        alt="Main Building"
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                        <Card.Title>
                            Prédio Principal
                        </Card.Title>
                        <Card.Text>
                            O centro de nossa instituição, com salas de aula modernas e laboratórios equipados para atender às necessidades dos cursos.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>   
        </Row>

    </Container>
  )
}

export default Faculdade
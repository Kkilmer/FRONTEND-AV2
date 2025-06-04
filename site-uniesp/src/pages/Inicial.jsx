import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import BannerAd from '../components/BannerAd'

const Inicial = () => {
  return (
    <Container className="py-4">

        <BannerAd />

        <Card className="mb-4 shadow-sm">
            <Card.Body>
                <p>
                    A Faculdade UNIESP é uma instituição comprometida em fornecer educação de qualidade, com foco no desenvolvimento profissional e pessoal...
                </p>
                <p>
                    Contamos com uma equipe de professores qualificados, uma infraestrutura moderna e uma metodologia de ensino que valoriza o aprendizado prático...
                </p>
                <p>
                    A seguir, conheça mais sobre as áreas e as oportunidades que a Faculdade UNIESP oferece para você.
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

        { /* Segunda Linha com 2 colunas (454 para os cards ficarem lado a lado) */ }

        <Row className="g-4 mt-4">
            {/* Card 1 */}
            <Col md={6}>
                <Card className="h-100 shadow-sm">
                    <Card.Body className="text-center">
                        <Card.Title> Parcerias com Empresas</Card.Title>
                        <Card.Text>
                            A UNIESP mantém parcerias com diversas empresas, permitindo que nossos alunos tenham acesso a oportunidades de estágio e emprego logo após a graduação...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            {/* Card 2 */}
            <Col md={6}>
            <Card className="h-100 shadow-sm">
                    <Card.Body className="text-center">
                        <Card.Title>Compromisso com a Educação</Card.Title>
                        <Card.Text>
                            A UNIESP se dedica a oferecer uma educação acessível e de qualidade, acreditando que o conhecimento transforma vidas... 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    </Container>
  )
}

export default Inicial
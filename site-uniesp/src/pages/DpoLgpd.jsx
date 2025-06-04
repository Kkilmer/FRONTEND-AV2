import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
const DpoLgpd = () => {
  return (
    <Container className="py-4">
        <h2 className="mb-4">DPO e LGPD</h2>

        <Card className="mb-4 shadow-sm">
            <Card.Body>
                <p>
                A Lei Geral de Proteção de Dados (LGPD) é uma legislação brasileira que regula o tratamento de dados pessoais em diversos setores, tanto públicos quanto privados. Implementada para proteger a privacidade e os direitos dos titulares de dados, a LGPD impõe diretrizes rígidas para coleta, armazenamento e compartilhamento de informações pessoais.
                </p>
                <p>
                O DPO (Data Protection Officer), ou Encarregado de Proteção de Dados, é um profissional designado para garantir que uma organização esteja em conformidade com a LGPD. Esse profissional atua como ponto de contato entre a organização e os titulares de dados, bem como entre a organização e a Autoridade Nacional de Proteção de Dados (ANPD).
                </p>
                <p>
                A seguir, você encontrará informações detalhadas sobre a importância da LGPD, o papel do DPO e como sua organização pode se beneficiar ao adotar práticas de conformidade. Entenda como a privacidade e a proteção de dados são fundamentais para o sucesso e a confiança dos seus clientes.
                </p>
            </Card.Body>
        </Card>

        <Row className="g-4">
            {/* Coluna 1 */}
            <Col md={4}>
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://plus.unsplash.com/premium_photo-1661688118617-7a6834a9522c?q=80&w=2070&auto=format&fit=crop"
                        alt="Compliance and Legislation"
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                        <Card.Title>
                            Compliance e Legislação
                        </Card.Title>
                        <Card.Text>
                            A conformidade com a LGPD é essencial para proteger a privacidade dos dados e evitar penalidades legais.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            {/* Coluna 2 */}
            <Col md={4}>
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?q=80&w=2070&auto=format&fit=crop"
                        alt="Data Management"
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                        <Card.Title>
                            Gestão de Dados
                        </Card.Title>
                        <Card.Text>
                            A coleta e o armazenamento seguro de dados pessoais são práticas fundamentais para a conformidade com a LGPD.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            {/* Coluna 3 */}
            <Col md={4}>
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
                        alt="Trust and Transparency"
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                        <Card.Title>
                            Confiança e Transparência
                        </Card.Title>
                        <Card.Text>
                            A transparência no tratamento de dados fortalece a confiança dos clientes e demonstra compromisso com a privacidade
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>   
        </Row>

    </Container>
  )
}

export default DpoLgpd
//import component bootstrap react
import {Card, Container, Row, Col, Button} from 'react-bootstrap'

function Home(){
    return(
        <Container className="mt-3">
            <Row>
                <Col md={12}>
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                            <h1>Hello World</h1>
                            <p className="lead">Sistem ini dikembangkan oleh <strong> Yeremia Victor</strong></p>
                            <Button href="http://google.com" target="_blank" variant="primary" size="lg">SELENGKAPNYA</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
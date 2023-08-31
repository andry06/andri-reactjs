import { Button, Card, Col, Row } from "react-bootstrap";

const CardNewsHooks = ({Current}) => {
        return (
            <Row >
                {Current.map((berita, i) => (
                    <Col sm={4} className="mb-4" key={i}>
                        <Card className="text-start">
                            <Card.Img variant="top" src={berita.urlToImage} height={240}/>
                            <Card.Body>
                                <Card.Title>{berita.title}</Card.Title>
                                <Card.Text>
                                    {berita.description}
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">
                                    {berita.publishedAt}
                                    </small>
                                </Card.Text>
                                <Card.Text className="text-center">
                                    <Button variant="primary">Read More</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
}

export default CardNewsHooks;
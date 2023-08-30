import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export default class CardNews extends React.Component {
    render (){
        return (
            
            <Row >
                {this.props.currentData.map((berita) => (
                    <Col sm={4} className="mb-4">
                        <Card className="text-start">
                            <Card.Img variant="top" src={berita.urlToImage} height={240}/>
                            <Card.Body>
                                <Card.Title>{berita.title}</Card.Title>
                                <Card.Text>
                                    {berita.description}
                                </Card.Text>
                                <Card.Text>
                                    <small class="text-muted">
                                    {berita.publishedAt}
                                    </small>
                                </Card.Text>
                                <Card.Text className="text-center">
                                    <Button variant="primary">Read More ...</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                
            </Row>

            
        )
    }
}
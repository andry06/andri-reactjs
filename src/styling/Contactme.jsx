import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default class Contactme extends React.Component {

    render(){
        return(
            <section id="contact">
                 <Container fluid >
                    <Row>
                        <Col><h2>Contact Me</h2></Col>
                    </Row>
                    <Row className="mt-4 justify-content-center fs-6">
                        <Col md={8} className="mb-3">
                            <Form>
                                <Form.Group className="mb-3 text-start" controlId="name">
                                    <Form.Label className="ms-1">Nama Lengkap</Form.Label>
                                    <Form.Control type="name" placeholder="Masukan Nama Lengkap" />
                                </Form.Group>

                                <Form.Group className="mb-3 text-start" controlId="email">
                                    <Form.Label className="ms-1">Email</Form.Label>
                                    <Form.Control type="name" placeholder="Masukan Email" />
                                </Form.Group>

                                <Form.Group className="mb-3 text-start" controlId="pesan">
                                    <Form.Label className="ms-1">Pesan</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <div className="mb-3 ms-1 text-start">
                                    <Button variant="success" type="submit">
                                        Kirim
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

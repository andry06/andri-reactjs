import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class Aboutme extends React.Component {

    render(){
        return (
            <section id="about">
                 <Container fluid >
                    <Row>
                        <Col><h2>About Me</h2></Col>
                    </Row>
                    <Row className="mt-4 justify-content-center fs-6 text-center">
                        <Col md={4} className="mb-3"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat soluta quaerat officia ea iure exercitationem, molestias accusantium, enim eveniet nulla hic! Veniam possimus id minima eos, consectetur ut alias ab unde doloribus libero dolores illo officia modi quaerat sequi.</p></Col>
                        <Col md={4} className="mb-3"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vel nisi quis consequatur neque incidunt impedit maxime. Molestias veritatis odit itaque officia possimus suscipit dicta distinctio est, earum quidem deleniti? Deserunt excepturi corrupti omnis explicabo? Suscipit voluptate quas alias nobis?</p></Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
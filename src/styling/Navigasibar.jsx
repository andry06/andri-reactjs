import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigasibar = ({title, menu1, menu2, menu3, menu4}) => {
   
        return(
            <Navbar bg="success" className="fixed-top" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Andri Suryono</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#project">{menu3}</Nav.Link>
                    <Nav.Link href="#contact">{menu4}</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        )
    }

    export default Navigasibar;
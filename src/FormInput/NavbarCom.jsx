import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

class NavbarCom extends React.Component{
    render(){
        return(
            <Navbar bg="primary"  data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home" >Eduwork</Navbar.Brand>
                <Nav defaultActiveKey="/register" className="justify-content-end">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="#">Kelas</Nav.Link>
                    <Nav.Link href="#">Hubungi Kami</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default NavbarCom;
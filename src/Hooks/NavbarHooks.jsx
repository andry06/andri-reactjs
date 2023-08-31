import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarHooks = () => {
    return(
        <Navbar bg="primary"  data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home" >NewsAPI</Navbar.Brand>
            <Nav defaultActiveKey="/berita" className="justify-content-end">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/berita">Berita</Nav.Link>
                <Nav.Link href="#">Hubungi Kami</Nav.Link>
                <Nav.Link href="#">Register</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarHooks;
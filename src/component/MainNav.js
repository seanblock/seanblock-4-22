import { Navbar, Nav, Container } from "react-bootstrap";

const MainNav = () => {
    return ( 
        <Navbar collapseOnSelect expand="lg">
            <Container fluid className="mx-5">
            <Navbar.Brand>Sean Block</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#portfolio-link">Portfolio</Nav.Link>
                    <Nav.Link href="#skills-link">Skills</Nav.Link>
                    <Nav.Link href="#about-link">About</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="https://github.com/seanblock">GitHub</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default MainNav;
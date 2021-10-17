import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
const Menu = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/home">
                        <img src="./logo2.png" alt="" height="50px" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Button variant="light">Logout</Button> :
                        <Nav.Link as={Link} to="/login">Sign in</Nav.Link>

                        <Navbar.Text>
                            Signed in as: <a href="#login"></a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;
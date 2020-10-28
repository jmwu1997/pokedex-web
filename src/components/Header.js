import React, {Component} from "react";
import { Nav , Navbar, NavDropdown } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <img src="/images/pokeball.png" className="img-fluid" style={{width: 20}}></img>
                <Navbar.Brand href="/">Pokedex</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
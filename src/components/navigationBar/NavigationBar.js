import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
        
        &:hover {
            color: white;
        }
    }
`

export const NavigationBar = () => (
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand href='/'>Tomazi</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbarnav'>
                <Nav className='ml-auto'>
                    <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/contact'>Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);
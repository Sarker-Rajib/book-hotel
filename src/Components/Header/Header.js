import React from 'react';
import { Container, Image, Nav } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <Container>
            <Nav className='py-3 align-items-center'>
                <Image src={logo} alt='Nav-logo' />
                <p className='ms-auto mb-0'>Need Help? <a href="tel:818292929">Call : 818292929</a></p>
            </Nav>
        </Container>
    );
};

export default Header;
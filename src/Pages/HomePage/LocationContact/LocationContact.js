import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/21.png';
import image3 from '../assets/images/22.png';
import image4 from '../assets/images/23.png';
import image5 from '../assets/images/24.png';

const LocationContact = () => {
    return (
        <Container>
            <Row className='py-5'>
                <Col lg={5}>
                    <Image className='img-fluid w-100 h-100' src={image1} />
                </Col>
                <Col lg={7}>
                    <Row className='g-3'>
                        <Col md={6}>
                            <Image className='img-fluid w-100' src={image2} />
                        </Col>
                        <Col md={6}>
                            <Image className='img-fluid w-100' src={image3} />
                        </Col>
                        <Col md={6}>
                            <Image className='img-fluid w-100' src={image4} />
                        </Col>
                        <Col md={6}>
                            <Image className='img-fluid w-100' src={image5} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className='pb-4'>
                <h3>Hotel Vishal @ Airport</h3>
                <p>Lorem ipsum dolor sit amet consectetur <br />
                    adipisicing elit. Id similique minu</p>
                <p>
                    +91-7654564545, 8107344682
                </p>

                <ul className='d-flex'>
                    <li className='me-5'>Lorem.</li>
                    <li className='me-5'>Delectus?</li>
                    <li className='me-5'>Alias!</li>
                    <li className='me-5'>Rem.</li>
                    <li>Veniam!</li>
                </ul>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae blanditiis dolorum impedit maiores libero ad temporibus voluptates quisquam mollitia itaque. Commodi numquam ratione sapiente quis dolorem magni adipisci sint libero? Aspernatur, repellendus ratione est velit suscipit, temporibus error quis repudiandae at voluptates nobis? Quam nulla iure architecto. Provident iusto non esse consequuntur, praesentium veniam dolor!</p>
            </div>
            <hr />
            <div className='py-4'>
                <h5 className='m-0'>Property Rules</h5>
                <p>Check in - out 12pm</p>

                <Row>
                    <Col lg={6}>
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Optio quia exercitationem laboriosam ad!</li>
                            <li>Nihil praesentium saepe quam a?</li>
                            <li>Qui autem quia quam veniam.</li>
                            <li>Totam eius tempora voluptatum laborum?</li>
                            <li>Omnis provident recusandae magnam fugiat?</li>
                            <li>Magnam, officiis eligendi. Aut, eum.</li>
                            <li>Fuga explicabo soluta nostrum aliquid?</li>
                            <li>Soluta obcaecati maiores nostrum voluptates.</li>
                            <li>Quibusdam consectetur omnis iusto cupiditate!</li>
                            <li>Vitae odio expedita voluptate ipsa.</li>
                        </ul>
                    </Col>
                    <Col lg={6}>
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Optio quia exercitationem laboriosam ad!</li>
                            <li>Nihil praesentium saepe quam a?</li>
                            <li>Qui autem quia quam veniam.</li>
                            <li>Totam eius tempora voluptatum laborum?</li>
                        </ul>
                    </Col>


                </Row>
            </div>
        </Container>
    );
};

export default LocationContact;
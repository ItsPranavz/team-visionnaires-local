import React from "react";
import { Card } from "react-bootstrap";
import "../styles/ourteam.css";
import {Row,Col} from 'react-bootstrap';
import PranavSharma from '../assets/pranav.jpg';
import Poornima from '../assets/poornima.jpg';
import Arnav from '../assets/arnav.jpg';

function OurTeam() {
    return (
        <>
            <div className="team-background">
                <Row className="justify-content-center">
                    <Col xs={10} sm={8} md={4} lg={2} className="pic-container">
                        <Card style={{ width: '18rem' }} className="about-card" >
                            <Card.Img variant="top" src={PranavSharma} className="circular-img" />
                            <Card.Body>
                                <Card.Title>Pranav Sharma</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={10} sm={8} md={4} lg={2} className="pic-container">
                        <Card style={{ width: '18rem' }} className="about-card">
                            <Card.Img variant="top" src={Poornima} className="circular-img" />
                            <Card.Body>
                                <Card.Title>Poornima Thakur</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={10} sm={8} md={4} lg={2} className="pic-container">
                        <Card style={{ width: '18rem' }} className="about-card">
                            <Card.Img variant="top" src={Arnav} className="circular-img" />
                            <Card.Body>
                                <Card.Title>Arnav Singh</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default OurTeam;
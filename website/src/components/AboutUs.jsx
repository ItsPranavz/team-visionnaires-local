import React from "react";
import img from "../assets/banner-mockup.png";
import { Card } from "react-bootstrap";
import "../styles/aboutus.css";
import {Row,Col} from 'react-bootstrap';
import PranavSharma from '../assets/pranav.jpg';
import Poornima from '../assets/poornima.jpg';
import Arnav from '../assets/arnav.jpg';
function AboutUs() {
  return (
    <>
      <div className="background-image">
        <img className="banner-image" src={img} />
      </div>
      <div className="our-story">
        <h2>OUR STORY</h2>
        <p>
          Their story began on a bright autumn afternoon, as they stumbled upon
          a poster advertising a local hackathon event. Eager to put their
          skills to the test and explore the realms of possibility, they wasted
          no time in forming a team and diving headfirst into the world of
          hackathons.
        </p>
      </div>
      
      <div class="bg-image">
    <img class="bn-image" src={img} />
    <div class="overlay">
        <p>"We believe the supply chain is the lifeblood of every business. That's why we're dedicated to crafting the most effective, tailored solutions to optimize the unique flow of your operations."</p>
    </div>
</div>


      <div>
      <Row className="justify-content-center">
    <Col xs={10} sm={8} md={4} lg={2} className="pic-container">
    <Card style={{ width: '18rem' }} className="about-card">
    <Card.Img variant="top" src={PranavSharma} className="circular-img" />
      <Card.Body>
        <Card.Title>Pranav Sharma</Card.Title>
        
      </Card.Body>
    </Card>
    </Col>

    <Col xs={10} sm={8} md={4} lg={2} className="pic-container">
    <Card style={{ width: '18rem' }} className="about-card">
    <Card.Img variant="top" src={Poornima} className="circular-img"/>
      <Card.Body>
        <Card.Title>Poornima Thakur</Card.Title>
        
      </Card.Body>
    </Card>
    </Col>

    <Col xs={10} sm={8} md={4} lg={2} className="pic-container">
    <Card style={{ width: '18rem' }} className="about-card">
    <Card.Img variant="top" src={Arnav} className="circular-img"/>
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

export default AboutUs;

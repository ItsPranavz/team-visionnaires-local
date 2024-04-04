import React from "react";
import { Row, Col } from "react-bootstrap";
import Typewriter from './Typewriter';
import img from '../assets/banner-mockup.png';
import '../styles/banner.css'

function Banner() {
    return (
        <div className="banner-container">
            <img className="banner-image" src={img} />
            <div className="container-column">
                <Typewriter text="FINDING THE RIGHT SOLUTION FOR YOUR BUSINESS IN SUPPLY CHAIN ANALYSIS, TRANSPORT MONITERING, DEMAND FORECASTING" delay={1000} />
                <p>"We are aiming to build a Supply Chain Management Solution, which will help all the stakeholders of the Supply Chain to manage and access data of quantity ordered and how much to keep in buffer stock, in order to mitigate the impact of "BullWhip" effect."</p>
            </div>
        </div>
    )
};

export default Banner;
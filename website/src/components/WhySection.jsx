import React from "react";
import support from '../assets/support.png';
import dataImg from '../assets/monitor.png';
import visibility from '../assets/high-visibility.png';
import WhyCard from "./WhyCard";

function WhySection() {
    return (
        <>
        <WhyCard src={visibility} heading="Enhanced Visibility" text="Gain real-time insights into your supply chain, allowing you to track the quantity ordered and maintain optimal buffer stock levels, minimizing the BullWhip effect and ensuring smoother operations."></WhyCard>
        <WhyCard src={support} heading="Streamlined Colaboration" text="Foster seamless communication and cooperation among all supply chain stakeholders, facilitating efficient decision-making and proactive adjustments to demand fluctuations to counteract the BullWhip effect effectively."></WhyCard>
        <WhyCard src={dataImg} heading="Data-Driven Decision-Making" text="Empower your team with comprehensive data analytics, enabling informed strategic choices based on accurate forecasts and demand patterns, ultimately enhancing overall supply chain performance."></WhyCard>
        </>
    );
}

export default WhySection;
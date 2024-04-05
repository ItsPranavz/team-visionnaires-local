import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import reachout from "../assets/reach-out.png";

function ContactUs() {
    return (
        <>
        <Header />
        <img src={reachout} />
        <ContactForm />
        <Footer />
        </>
    );
}

export default ContactUs;
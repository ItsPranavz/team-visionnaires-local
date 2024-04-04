import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../styles/footer.css';
import ContactForm from '../components/ContactForm';
import {useState} from 'react';
import '../styles/footer.css';

function Footer() {
  const [showContactForm, setShowContactForm] = useState(false);
  

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  
  
  return (
    <MDBFooter  className='custom-footer text-center text-lg-start text-muted'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='bg-color mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                Company name
              </h6>
              <p>
              We are aiming to build a Supply Chain Management Solution, which will help all the stakeholders of the Supply Chain to manage and access data of quantity ordered and how much to keep in buffer stock, in order to mitigate the impact of "BullWhip" effect.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='bg-color mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='bg-color mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Our Products
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                   Contact Us
                </a>
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
          
      <div className='text-center p-4 custom-bg custom-color'>
          <button className="contact" onClick={toggleContactForm}>Contact Us</button>
         
        </div>

      {showContactForm && <ContactForm />}

      <div className='text-center p-4 custom-background custom-text-color' >
        © 2024 Copyright  All Rights Reserved 
      </div>

      

     
    </MDBFooter>
  );
}



export default Footer;
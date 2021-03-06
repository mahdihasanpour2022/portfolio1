import React from 'react';
import { useSelector } from "react-redux";
// scss 
import Styles from "../assets/style/components_style/Contact.module.scss";
// component
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// Breadcrumb
import { Breadcrumb } from "react-bootstrap";
// images 
import tehran from "../assets/images/tehranLocation.jpg";
// google-maps-react 
// import GoogleMapReact from 'google-map-react';

const Contact = () => {

  const { portfolio } = useSelector(state => state.portfolioState)


  const submitHandler = e => {
    e.preventDefault();
    console.log("form submit")
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          {/* start imageBox top of this components  */}
          <div className={Styles.contactContainer}>
            <div className={Styles.imageBox}>
              <img src={portfolio[0]} alt={portfolio[0]} />
            </div>
            <div className={Styles.content}>
              <h3>Contact Us</h3>
              <div className={Styles.breaadcrumb}>
                <Breadcrumb>
                  <Breadcrumb.Item href="/" >Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </div>

          {/* start form and Location div in down of this components  */}
          <div className={Styles.formLocationContainer} >

            {/* start map in left side of this component */}
            <div className={Styles.leftMap}>
              <img src={tehran} alt="tehran" />
              <h6>Officeal Address</h6>
              <p>504 White St . Dawsonville, GA 30534 , New York</p>
            </div>

            {/* start contact form in right side of this component */}
            <div className={Styles.rightForm}>
              <form onSubmit={e => submitHandler(e)} >
                <label htmlFor="">name:</label>
                <input className='form-control' type="text" />
                <label htmlFor="">email:</label>
                <input className='form-control' type="email" />
                <label htmlFor="">message:</label>
                <textarea className='form-control' rows="10"></textarea>
                <button type="submit" className={Styles.sendForm} >Send</button>
              </form>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
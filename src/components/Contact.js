import React from 'react';
import { useSelector } from "react-redux";
// scss 
import Styles from "../assets/style/components_style/Contact.module.scss";
// component
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// Breadcrumb
import { Breadcrumb } from "react-bootstrap";

const Contact = () => {

  const { portfolio } = useSelector(state => state.portfolioState)


  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
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

          <div className={Styles.formLocationContainer} >
            <div className={Styles.leftMap}>
              
            </div>
            <div className={Styles.rightForm}>
              <form>
                <label htmlFor="">name:</label>
                <input className='form-control' type="text" />
                <label htmlFor="">email:</label>
                <input className='form-control' type="email" />
                <label htmlFor="">message:</label>
                <textarea className='form-control' rows="10"></textarea>
                <button className={Styles.sendForm} >Send</button>
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
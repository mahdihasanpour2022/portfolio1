import React from 'react';
// scss 
import Styles from "../assets/style/components_style/Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className={Styles.ContactUs}>
              <h4>Contact Us</h4>
              <ul className={Styles.list}>
                <li>

                  <div>
                    <h6>Officeal Address</h6>
                    <p>504 White St . Dawsonville, GA 30534 , New York</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h6>Email Us</h6>
                    <p>support@gmail.com</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h6>Call Us</h6>
                  </div>
                  <p>+87986451666</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className={Styles.RecentNews}>
              <h4>Recent News</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className={Styles.SocialMedia}>
              <h4>Archo</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
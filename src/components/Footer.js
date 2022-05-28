import React from 'react';
import { useSelector} from "react-redux";
// scss 
import Styles from "../assets/style/components_style/Footer.module.scss";
// reacy icons 
import { GoLocation } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Footer = () => {

  const {comments} = useSelector(state => state.commentState);

  return (
    <>
      <div className={`${Styles.container} container-fluid`}>
        <div className="row p-4">

          <div className="col-md-4">
            <div className={Styles.ContactUs}>
              <h4>Contact Us</h4>
              <ul className={Styles.list}>
                <li>
                  <GoLocation />
                  <div>
                    <h6>Officeal Address</h6>
                    <p>504 White St . Dawsonville, GA 30534 , New York</p>
                  </div>
                </li>
                <li>
                  <MdOutlineMailOutline />
                  <div>
                    <h6>Email Us</h6>
                    <p>support@gmail.com</p>
                  </div>
                </li>
                <li>
                  <FiPhone />
                  <div>
                    <h6>Call Us</h6>
                    <p>+87986451666</p>
                  </div>
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
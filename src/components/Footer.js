import React from 'react';
import { useSelector } from "react-redux";
// scss 
import Styles from "../assets/style/components_style/Footer.module.scss";
// helper-function 
import { shorterText } from "../helper_function/helper_function";
// react-icons 
import { GoLocation } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";


const Footer = () => {

  const { comments } = useSelector(state => state.commentSBlogsState);

  return (
    <>
      {/* conditional rendering for heder container  */}
      {!!comments.length &&
        <div className={`${Styles.container} container-fluid`}>
          <div className="row py-4">
            {/* start ContactUs */}
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
            {/* end ContactUs */}

            {/* start RecentNews  */}
            <div className="col-md-4">
              <div className={Styles.RecentNews}>
                <h4>Recent News</h4>

                {comments.slice(0, 2).map(item =>
                  <div key={item.title} className={Styles.news}>
                    <img src={item.image} alt={item.title} />

                    <div className={Styles.content}>
                      <p>{shorterText(item.comment)}</p>
                      <p>{item.author}</p>
                    </div>

                  </div>
                )}
              </div>
            </div>
            {/* end RecentNews  */}

            {/* start SocialMedia */}
            <div className="col-md-4">
              <div className={Styles.SocialMedia}>
                <h4>Archo</h4>
                <div className={Styles.mediaIcon}>

                  <BsFacebook />
                  <AiFillTwitterCircle />
                  <AiFillInstagram />
                  <BsYoutube />

                </div>
                <p>© 2022, ARCH TEMPLATE. MADE WITH PASSION BYTHEMESCAMP.</p>
              </div>
            </div>
            {/* start SocialMedia */}

          </div>
        </div>
      }
    </>
  );
};

export default Footer;
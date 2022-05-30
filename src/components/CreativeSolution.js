import React from 'react';
import {Link} from "react-router-dom";
// scss 
import Styles from "../assets/style/components_style/CreativeSolution.module.scss";
// react-countup 
import CountUp from 'react-countup';



const CreativeSolution = () => {
  return (
    <>
      <div className={`${Styles.creativeContainer} container-fluid p-0`}>
        <div className="row m-0 g-4 my-4">
          <div className="col-md-6">
            <div className={Styles.left}>
              <h2>Creative Solutions by Professional Designers</h2>
              <p>Cras vel cursus libero. Vestibulum porttitor nunc enim, quis congue leo fringilla ut. Quisque in lacus lacus. Nunc malesuada nisi at porta convallis. In posuere interdum erat, et bibendum arcu. Etiam quis viverra diam.</p>
              <button><Link to="/blogs" >Read More</Link></button>
            </div>
          </div>
          <div className="col-md-6">
            <div className={Styles.right}>
              <div className={Styles.rightContent}>
                <h3>
                  <CountUp delay={1} duration={3} start={0} end={25} />
                  years of experience
                </h3>
                <p>Sed ut perspiciatis unde omnis iste natus error laudantium, totam rem aperiam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeSolution;
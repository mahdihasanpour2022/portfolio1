import React from 'react';
// scss 
import Styles from "../assets/style/components_style/CreativeSolution.module.scss";

const CreativeSolution = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={Styles.CreativeContainer}>
            <h2>Creative Solutions by Professional Designers</h2>
            <p>Cras vel cursus libero. Vestibulum porttitor nunc enim, quis congue leo fringilla ut. Quisque in lacus lacus. Nunc malesuada nisi at porta convallis. In posuere interdum erat, et bibendum arcu. Etiam quis viverra diam.</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeSolution;
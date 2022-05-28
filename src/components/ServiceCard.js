import React from 'react';
// scss 
import Styles from "../assets/style/components_style/ServiceCard.module.scss";

const ServiceCard = () => {
  return (
    <>
      <div className="col-sm-6 col-md-3">
            <div className={Styles.serviceCard}>
              <h3>01</h3>
              <h4>interior Design</h4>
              <p>Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.</p>
              <button>READ MORE</button>
            </div>
          </div>
    </>
  );
};

export default ServiceCard;
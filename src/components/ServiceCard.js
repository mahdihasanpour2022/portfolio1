import React from 'react';
// scss 
import Styles from "../assets/style/components_style/ServiceCard.module.scss";

const ServiceCard = ({ data }) => {


  const { id, title, text } = data;
  return (
    <>
      <div className={`${Styles.col} col-sm-6 col-md-3`}>
        {/*start serviceCard */}
        <div className={Styles.serviceCard}>
          <h3>{id}</h3>
          <h4>{title}</h4>
          <p>{text}</p>
          <button>READ MORE</button>
        </div>
        {/*end serviceCard */}
      </div>
    </>
  );
};

export default ServiceCard;
import React from 'react';
// components 
import ServiceCard from "../components/ServiceCard";
// scss 
import Styles from "../assets/style/components_style/Services.module.scss";
// data 
import { services_list } from "../data_service/services_list";

const Services = () => {
  return (
    <>
      <div className="conatiner">
        <div className={`${Styles.serviceContainer} row`}>
          {services_list.map(item => <ServiceCard key={item.id} />)}
        </div>
      </div>
    </>
  );
};

export default Services;
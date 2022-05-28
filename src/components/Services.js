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
      <div className={`${Styles.serviceContainer} container-fluid`}>
        <div className={`${Styles.services} row`}>
          {services_list.map(item => <ServiceCard key={item.id} data={item}/>)}
        </div>
      </div>
    </>
  );
};

export default Services;
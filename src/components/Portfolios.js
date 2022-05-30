import React from 'react';
import { Link } from "react-router-dom";

// component
import Footer from "./Footer";
import Navbar from "./Navbar";
import Portfolio from './Portfolio';
// scss 
import Styles from "../assets/style/components_style/Portfolios.module.scss";


const Portfolios = () => {


  return (
    <>
      <Navbar />
      {/* <div className="container">
        <div className="row">
          <Link to="/portfolio" className={Styles.linkStyle}>Portfolio</Link>
        </div>
      </div> */}
      <Portfolio />
      <Footer />
    </>
  );
};

export default Portfolios;
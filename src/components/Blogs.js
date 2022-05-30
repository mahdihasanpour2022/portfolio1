import React from 'react';
import { useSelector } from "react-redux";

// scss 
import Styles from "../assets/style/components_style/Blogs.module.scss";
// component
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// Breadcrumb
import { Breadcrumb } from "react-bootstrap";


const Blogs = () => {

  const { portfolio } = useSelector(state => state.portfolioState)

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">

          <div className={Styles.blogsContainer}>
            <div className={Styles.imageBox}>
              <img src={portfolio[3]} alt={portfolio[2]} />
            </div>
            <div className={Styles.blogcontent}>
              <h3>Our Blogs</h3>
              <div className={Styles.breaadcrumb}>
                <Breadcrumb>
                  <Breadcrumb.Item href="/" >Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>blogs</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </div>

          {/* <div className={Styles.blog}>
            <img src={portfolio.map(item => item)} alt="" />
            <div className={Styles.blogText} >
              <div className={Styles.blogiddate}>
                <h4>{portfolio.map((item, index) => index)}</h4>
              </div>
              <div className={Styles.blogDetail}>
                <p></p>
                <h3></h3>
                <p className={Styles.blogDescription}></p>
                <button>READ MORE</button>
              </div>
            </div>
          </div> */}

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
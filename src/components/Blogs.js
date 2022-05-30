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
  const { blogs } = useSelector(state => state.commentSBlogsState)

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
          {!!blogs.length &&
          
            blogs.map(item =>

              <div className={Styles.blog} key={item.id}>
                <img src={item.image} alt={item.id} />
                <div className={Styles.blogText} >
                  <div className={Styles.blogiddate}>
                    <h4>{item.id}</h4>
                  </div>
                  <div className={Styles.blogDetail}>
                    <p>{item.tag.map(tag => <span key={tag}>{tag}</span>)}</p>
                    <h3>{item.title}</h3>
                    <p className={Styles.blogDescription}>{item.text}</p>
                    <button>READ MORE</button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
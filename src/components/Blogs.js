import React, { useState } from 'react';
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
// helper function 
import { shorterText18 } from "../helper_function/helper_function";
// scss 
import Styles from "../assets/style/components_style/Blogs.module.scss";
// component
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// Breadcrumb
import { Breadcrumb } from "react-bootstrap";


const Blogs = () => {

  const [someBlogs, setSomeBlogs] = useState(2)

  const { portfolio } = useSelector(state => state.portfolioState)
  const { blogs } = useSelector(state => state.commentSBlogsState)

  const loadmore = () => {
    if (!!blogs.length) {
      setSomeBlogs(prevState => prevState + 2)
    }
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">

          {/* image in top of this components */}
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

          {/* conditional endering for blogs */}
          {!!blogs.length &&

            blogs.slice(0, someBlogs).map(item =>

              <div className={Styles.blog} key={item.id}>
                <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="500" src={item.image} alt={item.id} />
                <div className={Styles.blogText} >
                  <div className={Styles.blogiddate}>
                    <h2>{item.id}</h2>
                    <p>{item.date}</p>
                  </div>
                  <div className={Styles.blogDetail}>
                    <p className={Styles.tags} >{item.tag.map(tag => <span key={tag}>{tag} ,</span>)}</p>
                    <h3>{item.title}</h3>
                    <p className={Styles.blogDescription}>{shorterText18(item.text)}</p>
                    <button ><Link to="/blogDetails">READ MORE</Link></button>
                  </div> 
                </div>
              </div>
            )
          }

        </div>
      </div>

      {/* loadmore button  */}
      <div className={Styles.loadmoreBTN} >
        <button onClick={() => loadmore()} >LOAD MORE BLOGS</button>
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
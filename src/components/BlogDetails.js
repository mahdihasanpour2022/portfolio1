import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useParams,useNavigate } from 'react-router-dom';
// components 
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// scss 
import Styles from "../assets/style/components_style/BlogDetails.module.scss";


const BlogDetails = () => {
  const navigate =useNavigate()
  const [findThisBlog, setFindThisBlog] = useState({})
  const { id } = useParams()
  const { blogs } = useSelector(state => state.commentSBlogsState)

  useEffect(() => {
    const thisBlog = blogs.filter(item => item.id === +id);
    setFindThisBlog(...thisBlog)
  }, [blogs, id])

  return (
    <>
      <Navbar />
      
      <div className="container-fluid ">
        <div className="row">
          {/* conditional rendering */}
          {!!Object.keys(findThisBlog).length &&

            <div className={Styles.blogDetails}>
              <p onClick={()=>navigate("/blogs")}><span>&laquo;&laquo;</span> Go Back</p>
              <img src={findThisBlog.image} alt={findThisBlog.id} />
              {/* start blog text  */}
              <div className={Styles.blogDetailsText} >
                {/* start id & detail  */}
                <div className={Styles.blogDetailsiddate}>
                  <h2>{findThisBlog.id}</h2>
                  <p>{findThisBlog.date}</p>
                </div>
                {/* start detail  */}
                <div className={Styles.blogDetail}>
                  <p className={Styles.blogDetailsTags} >{findThisBlog.tag.map(tag => <span key={tag}>{tag} ,</span>)}</p>
                  <h3>{findThisBlog.title}</h3>
                  <p className={Styles.blogDescription}>{findThisBlog.text}</p>
                </div>

              </div>

            </div>
          }
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default BlogDetails;
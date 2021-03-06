import React, { useEffect, useState } from 'react';
// scss 
import Styles from "../assets/style/components_style/Team.module.scss";
// data 
import { comments_list } from "../data_service/coments_list";
// icons 
import { HiOutlineArrowCircleUp } from "react-icons/hi";



const Team = () => {

  const [downpage, setDownPage] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2500) {
        setDownPage(true)
      }
    })
  }, [])

  const goTop = () => {
    window.scrollTo(0, 0);
  }


  return (
    <>
    {/*start TeamContainer */}
      <div className={`${Styles.TeamContainer} container-fluid`}>
        <div className="row">
          <div>
            <p className={Styles.title} >Creative Team</p>
            {/*start teams */}
            <div className={Styles.teams}>
              {comments_list.map(item =>
                <div key={item.author} className={Styles.person}>
                  <img src={item.image} alt={item.author} />
                  <h4>{item.author}</h4>
                  <p>{item.title}</p>
                </div>)}
            </div>
             {/*end teams */}

             {/* scrollspyIcon  icon*/}
            <div className={Styles.scrollspyIcon}>
              <HiOutlineArrowCircleUp
                onClick={() => goTop()}
                style={downpage ? { opacity: 1 } : { opacity: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    {/*end TeamContainer */}
    </>
  );
};

export default Team;
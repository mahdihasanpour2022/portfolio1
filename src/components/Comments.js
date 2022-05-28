import React from 'react';
// AliceCarousel 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// comment_list 
import { comments_list } from "../data_service/coments_list";
// components 
import Comment from "./Comment";
// scss 
import Styles from "../assets/style/components_style/Comments.module.scss";

const Comments = () => {

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    992: { items: 5 },
    1200: { items: 8 },
  };


  return (
    <>
      <div className={`${Styles.BestSkillsContainer} container-fluid p-0`}>
        <div className="row m-0">
          <div className={Styles.BestSkills}>

            <AliceCarousel
              autoPlay
              autoPlayInterval={2000}
              animationDuration={1000}
              animationType="fadeout"
              infinite
              touchTracking={false}
              disableButtonsControls
              paddingLeft={150}
              paddingRight={150}
              mouseTracking
              responsive={responsive}
              items={
                comments_list.map(item => <Comment key={item.id} data={item} />)
              } />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
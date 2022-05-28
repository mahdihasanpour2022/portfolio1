import React from 'react';
// scss 
import Styles from "../assets/style/components_style/Team.module.scss";
import { comments_list } from "../data_service/coments_list";

const Team = () => {
  return (
    <>
      <div className={`${Styles.TeamContainer} container-fluid`}>
        <div className="row">
          <div className='col-12'>
            <p>Creative Team</p>
            <div className={Styles.teams}>
              {comments_list.map(item =>
                <div key={item.author} className={Styles.person}>
                  <img src={item.image} alt={item.author} />
                  <h4>{item.author}</h4>
                  <p>{item.title}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
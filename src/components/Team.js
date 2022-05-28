import React from 'react';
// scss 
import Styles from "../assets/style/components_style/Team.module.scss";

const Team = () => {
  return (
    <>
      <div className={`${Styles.TeamContainer} container-fluid`}>
        <div className="row ">
          <div className='col-10 offset-1'>
            <div className={Styles.teamTitle}>
              <p>Creative Team</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
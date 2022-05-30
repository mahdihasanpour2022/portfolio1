import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

// scss 
import Styles from "../assets/style/components_style/Portfolio.module.scss";
// uuid 
import { v4 } from "uuid";
// action creator 
import { getPortfolio } from "../redux/portfolio/portfolioActionCreator";
// data 
import { renders_list } from "../data_service/renders_list";


const Portfolio = () => {

  const dispatch = useDispatch()
  const { portfolio } = useSelector(state => state.portfolioState);

  useEffect(() => {
    dispatch(getPortfolio(renders_list))
  }, [dispatch])

  return (
    <>
      {!!portfolio.length &&
        <div className="container-fluid">
          <div className="row">
            {/* start renderGridBox */}
            <div className={Styles.renderGridBox}>
              {portfolio.map(item => <img src={item} key={v4()} alt={`${v4()}`} />)}
            </div>
            {/* end renderGridBox */}
          </div>
        </div>
      }
    </>
  );
};

export default Portfolio;
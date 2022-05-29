import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
// action creator 
import { getPortfolio } from "../redux/portfolio/portfolioActionCreator";
// data 
import { renders_list } from "../data_service/renders_list";
// uuid 
import { v4 } from "uuid";
// scss 
import Styles from "../assets/style/components_style/Portfolio.module.scss";

const Portfolio = () => {

  const dispatch = useDispatch()
  const { portfolio } = useSelector(state => state.portfolioState);

  useEffect(() => {
    dispatch(getPortfolio(renders_list))
  }, [dispatch])

  return (
    <>
      {!!portfolio.length &&
        <div className="container mb-5">
          <div className="row">
            <Link to="/portfolio" className={Styles.linkStyle}>Portfolio</Link>
            <div className={Styles.renderGridBox}>
              {portfolio.map(item => <img src={item} key={v4()} alt={`${v4()}`} />)}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Portfolio;
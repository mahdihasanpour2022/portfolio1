import React from 'react';
// components 
import Header from "../components/Header";
import CreativeSolution from "../components/CreativeSolution";
import Services from "../components/Services";
import Comments from "../components/Comments.js";
import OurRender from "../components/OurRender.js";

const Home = () => {
  return (
    <>
      <Header />
      <CreativeSolution />
      <Services />
      <Comments />
      <OurRender />
    </>
  );
};

export default Home;
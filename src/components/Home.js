import React from 'react';
// components 
import Header from "../components/Header";
import CreativeSolution from "../components/CreativeSolution";
import Services from "../components/Services";
import Comments from "../components/Comments.js";

const Home = () => {
  return (
    <>
      <Header />
      <CreativeSolution />
      <Services />
      <Comments />
    </>
  );
};

export default Home;
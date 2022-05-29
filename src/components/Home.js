import React from 'react';
// components 
import Header from "../components/Header";
import CreativeSolution from "../components/CreativeSolution";
import Services from "../components/Services";
import Comments from "../components/Comments.js";
import Portfolio from "../components/Portfolio.js";
import Team from "../components/Team.js";
import Footer from "../components/Footer.js";

const Home = () => {
  return (
    <>
      <Header />
      <CreativeSolution />
      <Services />
      <Comments />
      <Portfolio />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
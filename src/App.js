import React from "react";
import {Routes , Route,Navigate} from "react-router-dom";
import {Provider} from "react-redux";
import Store from "./redux/Store";
// components 
import Home from "./components/Home";
import Portfolios from "./components/Portfolios";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import BlogDetails from "./components/BlogDetails";
// aos 
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {

  return (
    <>
    <Provider store={Store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/BlogDetails/:id" element={<BlogDetails />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/notfound" />} />

      </Routes>
    </Provider>
    </>
  );
}

export default App;

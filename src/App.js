import React from "react";
import {Routes , Route} from "react-router-dom";
import {Provider} from "react-redux";
import Store from "./redux/Store";
// components 
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";


function App() {

  return (
    <>
    <Provider store={Store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Provider>
    </>
  );
}

export default App;

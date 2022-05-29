import React from "react";
import {Routes , Route,Navigate} from "react-router-dom";
import {Provider} from "react-redux";
import Store from "./redux/Store";
// components 
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";


function App() {

  return (
    <>
    <Provider store={Store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/notfound" />} />

      </Routes>
    </Provider>
    </>
  );
}

export default App;

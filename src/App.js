import React from "react";
import {Routes , Route} from "react-router-dom";
// components 
import Home from "./components/Home";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;

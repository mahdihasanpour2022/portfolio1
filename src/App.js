import React from "react";
import {Roures , Route} from "react-router-dom";
// components 
import Home from "./components/Home";


function App() {

  return (
    <>
    <Roures>
      <Route path="/" element={<Home />} />
    </Roures>
    </>
  );
}

export default App;

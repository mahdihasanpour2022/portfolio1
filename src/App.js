import React from "react";
// components 
import Home from "./components/Home";


function App() {

  return (
    <>
    <Route path="/" element={<Home />} />
    </>
  );
}

export default App;

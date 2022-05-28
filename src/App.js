import React from "react";
import {Routes , Route} from "react-router-dom";
import {Provider} from "react-redux";
import Store from "./redux/Store";
// components 
import Home from "./components/Home";


function App() {

  return (
    <>
    <Provider store={Store}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
    </>
  );
}

export default App;

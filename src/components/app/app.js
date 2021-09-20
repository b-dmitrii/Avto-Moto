import React from "react";

import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";
import {Data} from '../../mock/mock';
import {MyContext} from "../../context";


const App = () => {
  return (
    <MyContext.Provider value={Data}>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </MyContext.Provider>
  );
};

export default App;

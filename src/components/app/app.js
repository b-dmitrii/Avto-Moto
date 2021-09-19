import React from "react";

import Header from "../header/header";
import Main from "../main/main";
import {Data} from '../../mock/mock'
import { MyContext } from "../../context";


const App = () => {
  return (
    <MyContext.Provider value={Data}>
      <div className="app">
        <Header />
        <Main />
      </div>
    </MyContext.Provider>
  );
};

export default App;

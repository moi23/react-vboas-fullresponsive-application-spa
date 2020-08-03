import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import Shop from "./components/Shop/index";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Shop></Shop>
    </div>
  );
};

export default App;

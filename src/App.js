import './App.css';
import React, { useState } from "react"
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header.jsx';
// import Menu from './components/Menu/Menu.jsx';
import Home from './components/Home/Home.jsx';
import Checkout from './components/Checkout/Checkout.jsx'


function App() {

  return (
    <div className="app">
      <Header />

      <Routes>
        {/* <Route exact path="/Menu" element={<Menu />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path='/Checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Home from "./page";
import Fingrad from "./page/Fingrad";
import Shineditz from "./page/Shineditz";

function App() {

  return (
    <div className="App">
      <BrowserRouter basename="/">
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/fingrad" exact element={<Fingrad/>}/>
      <Route path="/shineditz" exact element={<Shineditz/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

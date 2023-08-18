import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './component/nav'
import Home from './component/home'
import AboutUs from './morePgs/aboutUs'
import MoreApps from './morePgs/moreApps'
import DataState from './context/dataState'

export default function App() {
  return ( 
    <> 
    <DataState>
      <BrowserRouter> 
        <Nav />    
           <Routes>
           <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/aboutUs" element={<AboutUs />}></Route>
            <Route exact path="/moreApps" element={<MoreApps />} ></Route> 
        </Routes> 
        <div id='footer'>
        <small>This webpage is made by SarahWeb.info  All Copyright Reserved</small>
        </div>
  </BrowserRouter>
  </DataState>
  {/* https://rapidapi.com/apidojo/api/travel-advisor */}
   </> 
  ); 
}
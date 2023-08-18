import React from 'react';
import FlyingText from './flyingText.js';
import Dashboard from './dashboard';
import Tags from './tags';
import Grid from './grid';

export default function home() {
  let apiKey = process.env.REACT_APP_API;
  return (
    <>
        <div className="intro">
        <FlyingText txt = "FAR"/> 
        <span>FAR AWAY</span>
        </div>
        <Dashboard />
        <Tags />
        
        <Grid apiKey={apiKey} />           
    </>
  )
}

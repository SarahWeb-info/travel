import React from 'react'
import './App.css'
import Nav from './component/nav'
import FlyingText from './component/flyingText.js'
import Dashboard from './component/dashboard'
import Tags from './component/tags'
import Grid from './component/grid'
 
export default function App() {

  return (
    <>
    <Nav />    
    <div className="intro">
          <FlyingText txt = "FAR"/> 
          <span>FAR AWAY</span>
      </div>
    <Dashboard />
    <Tags />
    <h2 className='alignCenter'>About Destination</h2>
    <Grid />
    <div id='footer'>
      <small>This webpage is made by SarahWeb.info  All Copyright Reserved</small>
    </div>
    {/* https://rapidapi.com/apidojo/api/travel-advisor */}
    </>
  )
}
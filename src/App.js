import React from 'react'
import './App.css'
import Nav from './component/nav'
import FlyingText from './component/flyingText.js'
import Dashboard from './component/dashboard'
import Tags from './component/tags'
import Grid from './component/grid'
import AboutUs from './morePgs/aboutUs'
import MoreApps from './morePgs/moreApps.js'

export default function App() {
  let apiKey = process.env.REACT_APP_API;
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
    <Grid apiKey={apiKey} />
    <AboutUs />
    <MoreApps />
    <div id='footer'>
      <small>This webpage is made by SarahWeb.info  All Copyright Reserved</small>
    </div>
    {/* https://rapidapi.com/apidojo/api/travel-advisor */}
    </>
  )
}
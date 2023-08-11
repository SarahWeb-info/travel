import React from 'react'
import './dashboard.css'
import FlightCard from './flightsCards'
import FlyingText from './flyingText.js'

export default function dashboard() {
  let data = {
    cardTitleImg :"",
    cardTitle : "AnB Flights To Dubai",
    cardSubTitle1 : "Economoy",
    cardSubTitle2 : "Specail Offer",
    cardDescription : "This is a limited time deal for valued Customers of AnB",
    cardDesLink : "See here"
  }
  return (
    <div>
      <div className="dashBoardIntro">
      <FlyingText txt = "FAR"/> 
      FAR AWAY
    </div>
      <div className='flightContainer'>
        <div className='column flexCenter'>
          <div className='row justifyAround'>
        <FlightCard displayStyle="portrait" width="40%" height="50vh" data={data} />
        <FlightCard displayStyle="portrait" width="40%" height="auto"  data={data} />

          </div>
        <FlightCard displayStyle="landScape" width="80%" height="auto" data={data} />
        </div>
        <FlightCard />
      </div>
    </div>
  )
}

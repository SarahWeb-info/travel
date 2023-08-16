import React from 'react'
import './dashboard.css'
import FlightCard from './flightsCards'

export default function grid() {
    let data = {
        cardTitleImg :"",
        cardTitle : "AnB Flights To Dubai",
        cardSubTitle1 : "Economoy",
        cardSubTitle2 : "Specail Offer",
        cardDescription : "This is a limited time deal for valued Customers of AnB",
        cardDesLink : "See here"
      }
    
  return (
    <div className='grid'>
        <FlightCard displayStyle='portrait' width='20vw' height="25vw" data={data}/>
        <FlightCard displayStyle='portrait' width='20vw' height="25vw" data={data}/>
        <FlightCard displayStyle='portrait' width='20vw' height="25vw" data={data}/>
        <FlightCard displayStyle='portrait' width='20vw' height="25vw" data={data}/>
        <FlightCard displayStyle='portrait' width='20vw' height="25vw" data={data}/>
        <FlightCard displayStyle='portrait' width='20vw' height="25vw" data={data}/>
        <FlightCard displayStyle='portrait' width='20vw' height="25vw" data={data}/>
        <FlightCard displayStyle='portrait' width='20vw' height="25vw" data={data}/>
        <FlightCard displayStyle='portrait' width='20vw' height="25vw" data={data}/>
        <FlightCard displayStyle='portrait' width='20vw' height="25vw" data={data}/>
        <FlightCard displayStyle='portrait' width='20vw' height="25vw" data={data}/>
    </div>
  )
}

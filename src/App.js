import React from 'react'
import Nav from './component/nav'
import Dashboard from './component/dashboard'
import Carousel from './component/carousel'

export default function App() {

  return (
    <>
    <Nav />    
    <Dashboard />
    <Carousel />
      <p>I want to make an app about flights </p>
      <p>nav</p>
      <p>search bar</p>
      <p>About search title else default title</p>
      <p>div about the flights</p>
    {/* https://rapidapi.com/apidojo/api/travel-advisor */}
    </>
  )
}
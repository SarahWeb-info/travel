import React from 'react'

export default function nav() {
    return (
    <div className='row justifyBetween flexCenter nav'>
      <ul className='row noLi'>
      <div>
        <img src="favicon-16x16.png" alt="" />
      </div>
        <li className='px2'>Home</li>
        <li className='px2'>Airports</li>
        <li className='px2'>Departures</li>
        <li className='px2'>Arivals</li>
      </ul>
      <div className='row blockWidth px2'>
        <input type="text"/>
        <button className='button'>Search</button>
      </div>
    </div>
  )
}

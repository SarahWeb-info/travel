import React , {useContext} from 'react'
import dataContext from '../context/dataContext'
import FlightCard from '../component/flightsCards'

export default function AboutUs() {
  let data = useContext(dataContext);
  return (
    <div className='grid'>
    {data.map((item, index) => (
        <FlightCard  key={index} data={item}/>
        ))}
    </div>

  )
}

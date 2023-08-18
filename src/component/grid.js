import React, { useContext } from 'react';
import FlightCard from './flightsCards'
import dataContext from '../context/dataContext'

export default function Grid() {
    let data = useContext(dataContext);
    return (
    <div className='column flexCenter'>
        <h2 className='alignCenter'>About Destination</h2>
        <div className='grid'>
            {data.map((item, index) => (
                <FlightCard  key={index} data={item}/>
                ))}
        </div>
    </div>

  );
}

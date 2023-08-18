import React , {useContext} from 'react'
import dataContext from '../context/dataContext'

export default function AboutUs() {
  let a = useContext(dataContext);
  return (
    <div>
        <h1>Sarahweb.info</h1>
        <p>this is data title {a.cardTitle}</p>
    </div>
  )
}

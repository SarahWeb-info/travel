import React , {useState} from 'react';
import DataContext from './dataContext.js'

export default function DataState(props) {
    const [ apiData , setApiData] = useState({
        cardTitleImg :"",
        cardTitle : "Get Flights To Dubai",
        cardSubTitle1 : "Economoy",
        cardSubTitle2 : "Specail Offer",
        cardDescription : "This is a limited time deal for valued Customers of AnB",
        cardDesLink : "See here"
      });

      return (
    <DataContext.Provider value={apiData}>
      {props.children}
    </DataContext.Provider>
  )
}

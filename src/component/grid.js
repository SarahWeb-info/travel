import React, { useEffect, useState } from 'react';
import FlightCard from './flightsCards'

export default function Grid() {
  const [data, setData] = useState(
    {
        cardTitleImg :"",
        cardTitle : "",
        cardSubTitle1 : "",
        cardSubTitle2 : "",
        cardDescription : "",
        cardDesLink : "https://www.tripadvisor.com/"
    }
  );
  
const getData =()=>{
    let place = "Egypt";
    const url = "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query="+place+"%20tower&lang=en_US&units=km";
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '10a4ba1cd4msh1ea4162312a54efp1c67bdjsnec864ab7b06e',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
  };	

  fetch(url, options)
  .then(response => response.json())
  .then(nData => {
     let newData = nData.data.Typeahead_autocomplete.results;
      let newObj = {
        cardTitleImg :newData[0].image.photo.photoSizes[1].url?newData[0].image.photo.photoSizes[1].url:"newData[0].route."+"www.tripadvisor.com"+".url",
        cardTitle : newData[0].detailsV2.names.name?newData[0].detailsV2.names.name:newData[0].text,
        cardSubTitle1 : newData[0].detailsV2.names.longOnlyHierarchyTypeaheadV2?newData[0].detailsV2.names.longOnlyHierarchyTypeaheadV2:newData[0].parentGeoDetails.names.longOnlyHierarchyTypeaheadV2,
        cardSubTitle2 : newData[0].detailsV2.placeType?newData[0].detailsV2.placeType:newData[0].buCategory,
        cardDescription : "",
        cardDesLink : "https://www.tripadvisor.com/"
    }
    setData(newObj);  
    console.log(newData.length)
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
  return (
    <div className='grid'>
        <button onClick={getData}>get Data</button>
      <FlightCard displayStyle='portrait' width='20vw' height="25vw" data={data}/>
    </div>
  );
}

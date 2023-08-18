import React, { useEffect, useState } from 'react';
import FlightCard from './flightsCards'

export default function Grid(props) {
  const [data, setData] = useState([
    {
        cardTitleImg :"",
        cardTitle : "",
        cardSubTitle1 : "",
        cardSubTitle2 : "",
        cardDesLink : "https://www.tripadvisor.com/"
   }]
  );
  useEffect(() => {
    getData();
    }, []);

  
const getData =()=>{
    let objArray = [];
    let place = "London";
    const url = "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query="+place+"%20tower&lang=en_US&units=km";
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': `${props.apiKey}`,
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
  };	

  fetch(url, options)
  .then(response => response.json())
  .then(nData => {
     let newData = nData.data.Typeahead_autocomplete.results;
     for (let i = 0; i < newData.length-1; i++) {
        
        let img = "";
        let title = "";
        let subtitle1 = "";
        let subtitle2 = "";
        let pgLink = "https://www.tripadvisor.com";

        if(newData[i].detailsV2){
            if(newData[i].detailsV2.names){
                title = newData[i].detailsV2.names.name?newData[i].detailsV2.names.name:"";
                subtitle1 = newData[i].detailsV2.names.longOnlyHierarchyTypeaheadV2?newData[i].detailsV2.names.longOnlyHierarchyTypeaheadV2:"";
            }
            subtitle2 = newData[i].detailsV2.placeType?newData[i].detailsV2.placeType:"";
            pgLink = "https://www.tripadvisor.com/";
        }

        if(newData[i].image && newData[i].image.photo && newData[i].image.photo.photoSizes[1] &&newData[i].image.photo.photoSizes[1].url){
            img =newData[i].image.photo.photoSizes[1].url;
        }

        title = newData[i].text?newData[i].text:title;
        
        if(newData[i].parentGeoDetails && newData[i].parentGeoDetails.names && newData[i].parentGeoDetails.names.longOnlyHierarchyTypeaheadV2){
            subtitle1= newData[i].parentGeoDetails.names.longOnlyHierarchyTypeaheadV2;
        }
        
        subtitle2= newData[i].buCategory?newData[i].buCategory:subtitle2;

        if(newData[i].route && newData[i].route.url){
            pgLink = pgLink+newData[i].route.url;
        }
        
        let newObj = {
            cardTitleImg :img,
            cardTitle : title,
            cardSubTitle1 : subtitle1,
            cardSubTitle2 : subtitle2,
            cardDesLink : pgLink
        }
           objArray.push(newObj);
        }
        setData(objArray);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
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

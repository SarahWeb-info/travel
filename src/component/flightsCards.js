import React from 'react'
import DefaultImg from './plane.png'

export default function flightsCards(props) {
    console.log(props.data.cardTitle)

  return (
    <div style={{width:`${props.width}` , height:`${props.height}`}} className={`my2 cardRow borderCheck ${props.displayStyle}`}>
      <img src={DefaultImg} alt="img" className='cardTitleImg' />
      <div className='cardDetails column justifyBetween borderCheck'>
            <small className='cardSubTitle2'>{props.data.cardSubTitle2}</small>
            <p className='cardTitle'>{props.data.cardTitle}</p>
            <p className='cardSubTitle1'>{props.data.cardSubTitle1}</p>
            <p className='cardDescription'>{props.data.cardDescription}</p>
            <a className='cardDesLink' href="sarahweb.info">{props.data.cardDesLink}</a>             
      </div>
    </div>
  );
}

flightsCards.defaultProps = {
    displayStyle: 'portrait' ,
    width:"40%",
    height:"50vh",
    data:{
        cardTitleImg :"",
        cardTitle : "",
        cardSubTitle1 : "",
        cardSubTitle2 : "",
        cardDescription : "",
        cardDesLink : ""
        }
  };

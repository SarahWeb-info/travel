import React from 'react'
import DefaultImg from './plane.png'

export default function flightsCards(props) {

  return (
    <div style={{width:`${props.width}` , height:`${props.height}`}} className={`my2 cardRow ${props.displayStyle}`}>
      <img src={props.data.cardTitleImg?props.data.cardTitleImg:DefaultImg} alt="img" className='cardTitleImg' />
      <div className='cardDetails column'>
            <small className='cardSubTitle2'>{props.data.cardSubTitle2}</small>
            <p className='cardTitle'>{props.data.cardTitle}</p>
            <p className='cardSubTitle1'>{props.data.cardSubTitle1}</p>
            <p className='cardDescription'>{props.data.cardDescription}</p>
            <a className='cardDesLink' href={props.data.cardDesLink}>More..</a>             
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
        cardDesLink : "https://www.tripadvisor.com/"
        }
  };

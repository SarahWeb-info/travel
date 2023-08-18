import './dashboard.css';
import FlightCard from './flightsCards';
import DefaultImg from './plane.png';
import Rotatingtxt from './rotatingtxt';

export default function Dashboard() {

  let data = {
    cardTitleImg :"",
    cardTitle : "AnB Flights To Dubai",
    cardSubTitle1 : "Economoy",
    cardSubTitle2 : "Specail Offer",
    cardDescription : "This is a limited time deal for valued Customers of AnB",
    cardDesLink : "See here"
  }

  return (
      <div className='flightContainer'>
        <Rotatingtxt txt="FAR AWAY"/>
        <div className='row flexEnd justifyCenter ad '>
          <img src={DefaultImg} alt="" />
          <img src={DefaultImg} alt="" />
          <img src={DefaultImg} alt="" />
          <span className='column' >
            <h2>{data.cardTitle}</h2>
            <p>{data.cardDescription}</p>
            <small>{data.cardDesLink}</small>
          </span>
        </div>
        <div className='column justifyCenter carousal'>
          <div className='carousalSlides' style={{}}>
            <FlightCard width='40vw' height="35vw" data={data}/>
            <FlightCard width='40vw' height="35vw" />
            <FlightCard width='40vw' height="35vw" data={data}/>
            <FlightCard width='40vw' height="35vw" data={data}/>
            <FlightCard width='40vw' height="35vw" data={data}/>
            <FlightCard width='40vw' height="35vw" data={data}/>
            <FlightCard width='40vw' height="35vw" data={data}/>
          </div>
          <div className='row justifyCenter dots'>
              <span></span>
              <span></span>
              <span></span>
          </div>
        </div>
      </div>
  )
}

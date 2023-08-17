import React, {useState} from 'react';
import { TiThMenu , TiTimes } from "react-icons/ti";
import { Link } from 'react-router-dom';

export default function Nav() {
  const [closeMenu, setCloseMenu] = useState("none");
  
  const hideMenu =()=>{
    setCloseMenu('none');
    console.log('close menu');
  }
  const showMenu =()=>{
    setCloseMenu('flex');
    console.log('show menu');
  }
  const cathFocus=() =>{
    document.getElementById('playingP').style.display = 'none';
  }
  const lostFocus=() =>{
    document.getElementById('playingP').style.display = 'block';
  }
  
    return (
      <>
    <div className='row justifyAround nav '>
      <div  className='navSerach' onFocusCapture={cathFocus} onClick={cathFocus}>
        <label htmlFor='searchFor' id="playingP">Destination</label>
        <input type="text" placeholder='Where to..' id='searchFor' onBlur={lostFocus} />
      </div>
      <div>
        <button id='navMenuBtn' onClick={showMenu}><TiThMenu /></button>
      </div>
    </div>
    <div id='menulist' style={{display : `${closeMenu}`}}>
          <span className='row justifyEnd' onClick={hideMenu}><TiTimes /></span>
          <Link to="/">Home</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/moreApps">More Apps</Link>
        </div>
      </>
  )
}

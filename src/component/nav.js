import React from 'react'

export default function nav() {
  const cathFocus=() =>{
      document.getElementById('playingP').style.display = 'none';
  }
  const lostFocus=() =>{
    document.getElementById('playingP').style.display = 'block';
  }
  
    return (
      <div  className='nav' onFocusCapture={cathFocus} onClick={cathFocus}>
        <label htmlFor='searchFor' id="playingP">Destination</label>
        <input type="text" placeholder='Where to..' id='searchFor' onBlur={lostFocus} />
      </div>
  )
}

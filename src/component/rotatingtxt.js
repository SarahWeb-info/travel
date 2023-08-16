import React from 'react';
import "./rotatingTxt.css"

export default function RotatingTxt(props) {
    const txt = props.txt;
    const txtArr = txt.split("");

    let r = 0;
    return (
        <div className='rotatingTxt' >
            {txtArr.map((item, index) => {                   
            return (
                <span key={index} style={{ transform: `translateX(-50%) rotate3d(0, 0, 1, ${r+=10}deg)` }}>
                    {item}
                </span>
            );
            })}
            
        </div>
    );
}






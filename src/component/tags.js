import React from 'react'

export default function tags() {
    let tags = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "Sit", "eius", "laboriosam", "assumenda", "consequatur", "in", "voluptatem", "consequuntur", "sequi", "non", "debitis", "qui", "repellendus", "Maiores", "fugiat", "dolores", "quia", "magnam", "omnis", "atque!", "Nulla", "iusto!"];

  return (
    <div className='tags'>
    {tags.map((item, index) => {
        if (index===5) {
            return(
                <a key={index} href={item} style={{color : ' #3aa1b5'}}> Attractions </a>    
            );
        }else if(index===12){
            return (
                <a key={index} href={item} style={{color : ' #3aa1b5'}}> EATERY </a>
            );
        }else if(index===16){
            return (
                <a key={index} href={item} style={{color : ' #3aa1b5'}}> Photos </a>
            );
        }else{
            return (
                <a key={index} href={item} style={{color : ' grey'}}> {item} </a>
            );
        }
    })}

    </div>  
)
}

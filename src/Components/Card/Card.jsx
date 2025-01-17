import React from 'react';
import './Card.css';

function Card({emoji, heading, detail}) {
  return (
    <div className='card'>
          <img src={emoji} alt="heartEmoji" style={{height:'150px', width:'190px', borderRadius:'10%'}} />
        <span>{heading}</span>
        <span>{detail}</span>
        {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  )
}

export default Card
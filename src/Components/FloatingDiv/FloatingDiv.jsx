import React from 'react';
import './FloatingDiv.css';


function FloatingDiv({image, txt1, txt2}) {
    
  return (
    <div className="floatingDiv">
        <img 
    src={image} 
    alt="icon" 
    style={{
    width: '90px', 
    height: '90px', 
    borderRadius: '50%' 
  }} 
/>
        <span >
            {txt1} 
            <br />
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv
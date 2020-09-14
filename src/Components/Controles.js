import React, { useState, useEffect } from "react";

// import './Components.css';

const Controles = ({toggle,setToggle, displayRef}) => {

 const pause=()=>{
    console.log(displayRef)
    displayRef.current.api.pause()
    setToggle(!toggle)
  }
  const play=()=>{
    console.log(displayRef)
    displayRef.current.api.start()
    setToggle(!toggle)
  }
return (
  <div className="controles">
      {toggle?
      <div className="sqr-btn" onClick={()=>play()}>Play</div>
      :
      <div className="sqr-btn" onClick={()=>pause()}>Pause</div>
      }
    
    </div>
  );
}

export default Controles;

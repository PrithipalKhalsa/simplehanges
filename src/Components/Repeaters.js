import React, { useState, useEffect } from "react";
import Countdown from 'react-countdown';

 import './Components.css';

import Display from './Display';


const Repeaters = ({time,map,rounds}) => {
  const [toggle, setToggle] = useState(false);
  // const [mute, setMute] = useState(true);
  var displayRef = React.createRef();
  var i=-1
  var j=1
  var sets=1
  var mute=true
  useEffect(() => {
      console.log("rep render")
     }
   );

   useEffect(() => {
       console.log("mute has changed "+mute)
      },[mute]
    );

const Completionist = React.memo(() =>   {
  if(i==1&&j<rounds){
    j++
    i=-1
  }
  else if(i==2){
    sets++
    j=1
    i=-1
  }
  i++
   return <Countdown date={Date.now() + map[i]*1000} zeroPadTime={1} renderer={renderer}   ref={displayRef}/>

 })


const renderer = ({hours, minutes, seconds, completed }) => {
  if (completed)
        return <Completionist />;
  else {
    // Render a countdown
    if(minutes>0)
    return <Display mute={mute} sets={sets} total={map[i]} toggle={toggle} minutes={minutes} seconds={seconds} j={j} rounds={rounds} displayRef={displayRef} i={i}/>;
    else
      return <Display mute={mute} sets={sets} total={map[i]} toggle={toggle} seconds={seconds} j={j} rounds={rounds} displayRef={displayRef} i={i}/>;
  }
};

  return (
    <div className="inner-app-wrapper">
    <label class="volume-checkbox">

      <input type="checkbox" onClick={()=>mute=!mute}/>
        <i class="fa fa-fw fa-volume-mute fa-3x unchecked"></i>
        <i class="fa fa-fw fa-volume-up  fa-3x checked"></i>
    </label>
    <Countdown
    date={Date.now() + 5000}
    renderer={renderer}/>


  </div>

  );
}

export default Repeaters;

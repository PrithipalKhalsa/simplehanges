import React, { useState, useEffect } from "react";
import queryString from 'query-string';

// import './Components.css';
import Repeaters from '../Components/Repeaters';
import NoSleep from 'nosleep.js';


const Timer = ({location}) => {
  const [map, setMap]=useState([])
  const [rounds, setRounds] = useState(0);
  var noSleep = new NoSleep();


  useEffect(() => {
    const { reps,h,r,rr} = queryString.parse(location.search);
    setMap([...map,h,r,rr])
    setRounds(reps)
  }, [location.search]);
console.log(map)
function clickEvent(e){
    document.addEventListener('click', function enableNoSleep() {
      document.removeEventListener('click', enableNoSleep, false);
      noSleep.enable();
    }, false);
}
  return (
    <div className= "app-wrapper" onMouseOver={(e)=>clickEvent(e)}>
        <h1>Simple Hangs</h1>
    <Repeaters  map={map} rounds={rounds}/>
    </div>
  );
}

export default Timer;

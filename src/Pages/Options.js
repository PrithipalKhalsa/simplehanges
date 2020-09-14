import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NoSleep from 'nosleep.js';

 import './Page.css';


const Options = () => {
  const [reps, setReps] = useState(3);
  const [h, setH] = useState(7);
  const [r, setR] = useState(3);
  const [rr, setRr] = useState(120);
  const [rrDisplay, setRRDisplay] = useState(120);
  var noSleep = new NoSleep();

  useEffect(() => {
    setRRDisplay(secondsToHms(rr))
  }, [rr]);

  function secondsToHms(d) {
      d = Number(d);
      var m = Math.floor(d % 3600 / 60);
      var s = Math.floor(d % 3600 % 60);
      var mDisplay = m > 0 ? m + ":" : "";
      var sDisplay = s > 0 ? s  : "00";
      return  mDisplay + sDisplay;
  }
  function clickEvent(e){
      document.addEventListener('click', function enableNoSleep() {
        document.removeEventListener('click', enableNoSleep, false);
        noSleep.enable();
      }, false);
  }

  return (
    <div className="form-wrapper" onMouseOver={(e)=>clickEvent(e)}>
        <h1>Simple Hangs</h1>
      <div >
      <h4>Reps</h4>
        <div className="number-wrapper">
          <div onClick={()=>{ reps>1&& setReps(reps-1) } } className="btn incr">
          <p>{"\u2212"}</p>
          </div>
          <div className="number-status">
          {reps}
          </div>
          <div onClick={()=>{ setReps(reps+1) } } className="btn incr">
          <p>{'\u002B'}</p>
          </div>

        </div>

          <h4>Hang Time (seconds)</h4>
        <div className="number-wrapper">
          <div onClick={()=>{h>1 &&  setH(h-1) } } className="btn incr">
            <p>{"\u2212"}</p>
          </div>
          <div className="number-status">
          {h}
          </div>
          <div onClick={()=>{ setH(h+1) } } className="btn incr">
          <p>{'\u002B'}</p>
          </div>
        </div>

          <h4>Off Time (seconds)</h4>
        <div className="number-wrapper">
          <div onClick={()=>{r>1&&  setR(r-1) } } className="btn incr">
            <p>{"\u2212"}</p>
          </div>
          <div className="number-status">
          {r}
          </div>
          <div onClick={()=>{setR(r+1) } } className="btn incr">
          <p>{'\u002B'}</p>
          </div>
        </div>

          <h4>Rest Time</h4>
        <div className="number-wrapper">
          <div onClick={()=>{rr>30&& setRr(rr-30) } } className="btn incr">
            <p>{"\u2212"}</p>
          </div>
          <div className="number-status">
          {rrDisplay}
          </div>
          <div onClick={()=>{rr<1200&& setRr(rr+30) } } className="btn incr">
          <p>{'\u002B'}</p>
          </div>
        </div>



    </div>



    <Link to={`/timer?reps=${reps}&h=${h}&r=${r}&rr=${rr}`}>
            <div className='sqr-btn' type="submit">Start Hangs</div>
    </Link>
    </div>
  );
}

export default Options;

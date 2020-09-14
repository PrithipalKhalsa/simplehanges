import React, { useState, useEffect } from "react";

// import './Components.css';
import Controles from './Controles';
import s2 from './sounds/sound0.wav';
import s1 from './sounds/sound1.wav';
import s0 from './sounds/sound2.wav';


const Display = ({ mute, setMute, sets,total, minutes,seconds,j,rounds,displayRef,i}) => {
  var sound=[s0,s1,s2]

  const [toggle, setToggle] = useState(false);
  const [childMute, setChildMute] = useState(mute);
  const [audio] = useState(new Audio(sound[i]));
  const [playing, setPlaying] = useState(true);
  const divStyle = {
  animation: 'grow '+ total+'s infinite',
};

useEffect(() => {
     playing&&!mute ? audio.play() : audio.pause();
   },
   [playing]
 );


 useEffect(() => {
   audio.addEventListener('ended', () => setPlaying(false));
   return () => {
     audio.removeEventListener('ended', () => setPlaying(false));
   };
 }, []);

  return (
    <div className="display-wrapper" >
  
      <div className="score">{j}/{rounds} Reps</div>
      <div className={['numbers-wrapper', 'stage-'+i].join(' ')}>

        { minutes==undefined ?
          <div className="numbers" >{seconds} </div>
        :
        seconds>10?  <div className="numbers"> {minutes}:{seconds}</div>
        :
        <div className="numbers"> {minutes}:0{seconds}</div>
       }
       <div  className={!toggle?"circle":"circle paused"} style={divStyle}></div>

      </div>
      <div className="sets">{sets} Sets</div>
      { i!=-1&&
         <Controles toggle={toggle} setToggle={setToggle} displayRef={displayRef}
/>
       }
  </div>
  );
}

export default Display;

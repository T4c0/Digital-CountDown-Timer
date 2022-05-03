import './App.css';
import React, {useState,useEffect} from 'react';
import Timer from './Components/Timer';


function App() {
const [timerDays,setTimerDays] = useState();
const [timerHours,setTimerHours] = useState();
const [timerMinutes,setTimerMinutes] = useState();
const [timerSeconds,setTimerSeconds] = useState();

let interval;

const startTimer = () =>{
  const startDate= new Date("May 5, 2022").getTime();

  interval=setInterval(()=>{        /*Send back Date, Time */
    const now = new Date().getTime();

    const distance = startDate - now;

    const days= Math.floor(distance/(24*60*60*1000));    /*floor for intiger*/ /*divide with a day*/
    const hours= Math.floor((distance % (24*60*60*1000))/(1000*60*60));
    const minutes= Math.floor((distance % (60*60*1000))/(1000*60));
    const seconds= Math.floor((distance % (60*1000))/(1000));

    
    if (distance<0) {
      //stop the timer

      clearInterval(interval.current);
    }
    else {
      //update Timer
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);

    }
  });
};
  useEffect(()=>{
    startTimer();
  });


  return (
    <div className="App">
      <Timer
      timerDays={timerDays}
      timerHourss={timerHours}
      timerMinutes={timerMinutes}
      timerSeconds={timerSeconds}
      />
    </div>
  );
};

export default App;

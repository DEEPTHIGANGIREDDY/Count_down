import { useEffect, useState } from "react";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import Cleansing from "../gridSection/gridSection";
import { handleTimer } from "../utilities/utilities";
import './timer.css'

const CountDown = () => {
    const [initialDuration, setInitialDuration] = useState(60);
    const [count, setCount] = useState(60);
    const [c,setC]=useState(60);
    const [timerIsRunning, setTimerIsRunning] = useState(true);
    const [countdownComplete, setCountdownComplete] = useState(false);

    const renderTime = ({ remainingTime }) => {
        const displayTime = Math.max(remainingTime, 0);
        setC(displayTime)
        return (
          <div className="timer">
            <div className="value">{handleTimer(count)}</div>
          </div>
        );
      };

    const colors = countdownComplete ? ["#DFDEDF", 0.33] : ["#610666", 0.33];
      const handleClickToZero = () => {
        setInitialDuration(0);
        setCount(0);
        setTimerIsRunning(false);
        setCountdownComplete(true);
      };
      const handleAddTime = () => {
        // if (!timerIsRunning) {
        //   setInitialDuration((prevDuration) => Math.max(prevDuration + 10, 0));
        //   setCount((prevCount) => Math.max((prevCount || 0) + 10, 0));
          
        //   setTimerIsRunning(true);
        //   setCountdownComplete(false);
        // } else {
        //   setCount((prevCount) =>( prevCount || 0) + 10);
        //   setCountdownComplete(false);
        // }
        if (count <=50) {
            setCount(count+10)
            // setTimerIsRunning(true)
            setCountdownComplete(false)
            
        }
        console.log("hello");
      };
    useEffect(()=>{
        let timer=60;
        if (count) {
            timer=setTimeout(() => {
                setCount((prevCount)=>Math.max(prevCount-1,0))
            }, 1000);
        }
        return ()=> clearTimeout(timer)
    },[count,timerIsRunning])
    useEffect(()=>{
        if (count===0) {
            setTimerIsRunning(false)
        }
    },[count])
    return (
        <>
            <div  className="mainCon">
                <div>
                    <h3>Routine Starting in...</h3>
                    <p>Count Down</p>
                </div>
                <div>
                    <div  className="divCircle">
                    <CountdownCircleTimer
                        isPlaying={timerIsRunning}
                        duration={count}
                        colors={colors}
                        oncountdownComplete={() => setCountdownComplete(true)}
                        rotation
                    >
                        {renderTime}
                    </CountdownCircleTimer>
                    </div>
                    <div  className="chaildContainer">
                        <button  className="buttonstyle" onClick={handleAddTime}>
                            + 10 Sec
                        </button>
                        <button  className="buttonstyle" onClick={handleClickToZero}>
                            <img src="https://cdn.iconscout.com/icon/free/png-256/free-skip-1767854-1502107.png?f=webp" alt="....."  width={25}></img> Skip
                        </button>
                    </div>
                </div>
                <div>
                    <Cleansing/>
                </div>
            </div>
        </>
    )
}
export default CountDown
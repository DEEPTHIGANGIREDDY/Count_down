import { useEffect, useState } from "react";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import Cleansing from "./ui";


const CountDown = () => {
    const [select, setSelect] = useState(60);
    const [count, setCount] = useState(60);
    const [c, setC] = useState(60);
    const [isRunning, setIsRunning] = useState(true);
    const [complete, setComplete] = useState(false);

    const renderTime = ({ remainingTime }) => {
        const displayTime = Math.max(remainingTime, 0);
        setC(displayTime);
        function formatTimer(displayTime) {
          const minutes = Math.floor(displayTime / 60);
          const remainingSeconds = displayTime % 60;
          const formattedMinutes = String(minutes).padStart(2, "0");
          const formattedSeconds = String(remainingSeconds).padStart(2, "0");
          return `${formattedMinutes}:${formattedSeconds}`;
        }
        return (
          <div className="timer">
            <div className="value">{formatTimer(displayTime)}</div>
          </div>
        );
      };

    useEffect(() => {
        if (count === 0) {
            setIsRunning(false);
        }
    }, [count]);
    const colors = complete ? ["#DFDEDF", 0.33] : ["#610666", 0.33];

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      };
      const buttonStyle = {
        margin: "0 10px",
        padding: "10px",
        fontSize: "16px",
        backgroundColor: "#FAF6FA ",
        color: "#A82798",
        border: "none",
        borderRadius: "30px",
        cursor: "pointer",
        marginLeft: "30px",
        boxShadow: "-5px 5px 5px rgba(0, 0, 0, 0.2)",
        width:"100px",
        fontFamily:"cursive"
      };
      const skipToZero = () => {
        setSelect(0);
        setCount(0);
        setIsRunning(false);
        setComplete(true);
      };
      const addTime = () => {
        // setSelect((prevCount) => Math.max(prevCount + 10, 0));
        if (!isRunning) {
            setSelect((prevSelect) => Math.max(prevSelect + 10, 0));
            setCount(select + 10); // Reset the count to the updated select value
            setIsRunning(true);
            setComplete(false);
          } else {
            setSelect((prevCount) => Math.max(prevCount + 10, 0));
          }
      };

      const circleStyle={
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"30px"

      }
    return (
        <>
            <div style={{border:"2px solid silver",padding:"18px",borderRadius:"15px",fontFamily:"cursive"}}>
                <div>
                    <h3>Routine Starting in...</h3>
                    <p>Count Down</p>
                </div>
                <div>
                    <div style={circleStyle}>
                    <CountdownCircleTimer
                        isPlaying={isRunning}
                        duration={select}
                        colors={colors}
                        onComplete={() => setComplete(true)}
                    >
                        {renderTime}
                    </CountdownCircleTimer>
                    </div>
                    <div style={containerStyle}>
                        <button style={buttonStyle} onClick={addTime}>
                            + 10 Sec
                        </button>
                        <button style={buttonStyle} onClick={skipToZero}>
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
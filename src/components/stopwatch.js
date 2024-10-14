import { useState, useEffect } from "react";
import "./stopwatch.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsrunning] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const Format = (time) => {
    let hours = Math.floor((time / 60 / 60) % 24);
    let minutes = Math.floor((time / 60) % 60);
    let seconds = Math.floor(time % 60);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
  };

  const handleStop = () => {
    setIsrunning(!isRunning);
  };

  return (
    <div className="stopwatch">
      <p className="timer">{Format(time)}</p>
      <div className="actions">
        <button className="restart-button" onClick={() => setTime(0)}>
          Restart
        </button>
        <button className="stop-button" onClick={handleStop}>
          {isRunning ? "Stop" : "Resume"}
        </button>
      </div>
    </div>
  );
};

export default StopWatch;

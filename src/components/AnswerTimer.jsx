import { useEffect, useState, useRef } from "react";
import "./Styles/AnswerTimer.scss";

const AnswerTimer = ({ duration, onTimeUp }) => {
  const [counter, setCounter] = useState(0);
  const [progressLoaded, setProgressLoaded] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((currCount) => currCount + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setProgressLoaded(100 * (counter / duration));

    if (counter == duration) {
      clearInterval(intervalRef.current);
      setTimeout(() => {
        onTimeUp();
      }, 1000);
    }
  }, [counter]);

  console.log(progressLoaded);

  return (
    <div className="answer-timer-container">
      <div
        style={{
          width: `${progressLoaded}%`,
          backgroundColor: `${
            progressLoaded < 40
              ? "lightgreen"
              : progressLoaded < 70
              ? "orange"
              : "red"
          }`,
        }}
        className="progress"
      >
        {counter}
      </div>
    </div>
  );
};

export default AnswerTimer;

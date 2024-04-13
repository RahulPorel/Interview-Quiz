import { useState, useEffect } from "react";
import "./Styles/Quiz.scss";
import { resultInitalState } from "../utils/qnaList";
import Button from "react-bootstrap/Button";
import AnswerTimer from "./AnswerTimer";

const Quiz = ({
  AllQuestions,
  form,
  selectedLvl,
  setIsUserLogged,
  setSelectedLvl,
  duration,
  userTimerDuration,
}) => {
  const datObj = new Date();
  const hour = datObj.getHours();
  let showLvlSelectedMsg = "";
  let greeting;
  const [showCrrAnsMsg, setShowCrrMsg] = useState("");
  const [counter, setCounter] = useState(0);

  const [currQuestions, setCurrQuestions] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [ans, setAns] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);
  const [showCrrWrBtn, setShowCrrWrongBtn] = useState(false);
  const [highestScore, setHighestScore] = useState(
    localStorage.getItem("highestScore") || 0
  );
  const [showStats, setShowStats] = useState(true);
  const [progressLoaded, setProgressLoaded] = useState(0);

  const [showAnsTimer, setShowAnsTimer] = useState(true);

  useEffect(() => {
    // Update the highest score if the current score is higher
    if (result.score > highestScore) {
      setHighestScore(result.score);
      localStorage.setItem("highestScore", result.score);
    }
  }, [result.score]);

  const greetings = {
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
    night: "Good night",
  };

  if (selectedLvl === "1") {
    showLvlSelectedMsg = "Basic ";
  } else if (selectedLvl === "2") {
    showLvlSelectedMsg = "Medium ";
  } else if (selectedLvl === "3") {
    showLvlSelectedMsg = "Hard ";
  } else if (selectedLvl === "4") {
    showLvlSelectedMsg = "Extreme ";
  } else {
    showLvlSelectedMsg = "Basic ";
  }

  // Determine the appropriate greeting based on the hour

  if (hour >= 0 && hour < 12) {
    greeting = greetings.morning;
  } else if (hour >= 12 && hour < 17) {
    greeting = greetings.afternoon;
  } else if (hour >= 17 && hour < 21) {
    greeting = greetings.evening;
  } else {
    greeting = greetings.night;
  }

  // Check if AllQuestions is not empty and currQuestions is within the valid index range
  const currentQuestion =
    AllQuestions.length > 0 && currQuestions < AllQuestions.length
      ? AllQuestions[currQuestions]
      : null;

  // If currentQuestion is not defined, return null or handle it appropriately

  const onAnswerClick = (answer, index) => {
    setAnswerIndex(index);

    if (answer === correctAnswer) {
      setShowCrrMsg("Correct Answer");
      setAns(true);
    } else {
      setShowCrrMsg("Wrong Answer");
      setAns(false);
    }
    if (answer.length > 1) {
      setShowCrrWrongBtn(true);
    }
  };

  const handleShowStats = () => {
    setShowStats(!showStats);
  };

  const handleNextQuestion = (finalAns) => {
    setAnswerIndex(null);
    setShowAnsTimer(false);
    setResult((prevVal) =>
      finalAns
        ? {
            ...prevVal,
            score: prevVal.score + 1,
            correctAnswer: prevVal.correctAnswer + 1,
          }
        : {
            ...prevVal,
            wrongAnswer: prevVal.wrongAnswer + 1,
          }
    );

    if (currQuestions !== AllQuestions.length - 1) {
      setCurrQuestions((prev) => prev + 1);
    } else {
      setCurrQuestions(0);
      setShowResult(true);
    }

    setTimeout(() => {
      setShowAnsTimer(true);
      setCounter(0);
    });
  };
  // If currentQuestion is not defined, return null or handle it appropriately
  const { questions, choices, correctAnswer } = currentQuestion || {};

  const handleTryAgain = () => {
    // it will all things to it's default value
    setResult(resultInitalState);
    setShowResult(false);
  };
  const handTryAsFresh = () => {
    // it will reset all and set user back to default page for again selecting questions but execulting highest as it stores in ls
    setIsUserLogged(false);
    setResult(resultInitalState);
    setShowResult(false);
    setSelectedLvl(false);
    form.name = "";
  };
  const handleTimeUp = () => {
    setAns(false);
    handleNextQuestion(false);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          {showAnsTimer && (
            <AnswerTimer
              progressLoaded={progressLoaded}
              setProgressLoaded={setProgressLoaded}
              duration={duration}
              onTimeUp={handleTimeUp}
              setCounter={setCounter}
              counter={counter}
            />
          )}

          {showStats ? (
            <>
              <div className="hideit-dummydiv">
                {showCrrWrBtn ? (
                  <Button
                    className="default-styles-showLvlStatusBtn"
                    variant="warning"
                  >
                    {showLvlSelectedMsg}
                  </Button>
                ) : (
                  <Button
                    className="default-styles-showLvlStatusBtn"
                    variant="warning"
                  >
                    {showLvlSelectedMsg}
                  </Button>
                )}
              </div>

              <div className="answer-wr-cr-status">
                {showCrrWrBtn ? (
                  <Button
                    className={ans ? "crrAnsStatus" : "wrongAnsStatus"}
                    variant={!ans ? "danger" : "success"}
                  >
                    {showCrrAnsMsg}
                  </Button>
                ) : (
                  <Button className="crrAnsStatus" variant={"success"}>
                    Answer Satatus
                  </Button>
                )}
              </div>
            </>
          ) : null}

          <div className="noOFQ">
            <span className="active-question-no">{currQuestions + 1}</span>
            <span className="total-question"> / {AllQuestions.length}</span>
          </div>

          <div className="user-dashboard">
            <h3 className="greeting">
              {greeting},
              <span className="greeting-user-name">
                {" "}
                {form.name.toUpperCase() || "Demo"}
              </span>
            </h3>
          </div>

          {showStats ? (
            <>
              <h6 className="crr-ans-score">
                {" "}
                Correct Answers:
                <span className="result-crr">{result.correctAnswer}</span>
              </h6>
              <h6 className="wrong-ans-score">
                Wrong Answers:
                <span className="result-wrong"> {result.wrongAnswer}</span>
              </h6>
              <h6 className="curr-score">
                Current Score:
                <span className="current-score"> {result.score}</span>
              </h6>
              <h6 className="prev-score">
                Highest Score:
                <span
                  className={
                    highestScore > result.score ? "highest-score" : null
                  }
                >
                  {highestScore}
                </span>
              </h6>
            </>
          ) : null}

          {currentQuestion ? (
            <>
              <h2
                style={{ fontFamily: "Verdana, sans-serif", fontWeight: "525" }}
              >
                Q{currQuestions + 1}: {questions}
              </h2>

              <ul className="space-below">
                {choices.map((choice, index) => (
                  <li
                    key={choice}
                    onClick={() => onAnswerClick(choice, index)}
                    className={answerIndex === index ? "selected-answer" : null}
                  >
                    {choice}
                  </li>
                ))}
              </ul>
              <button onClick={handleShowStats} className="stats">
                {!showStats ? "Show Stats" : "Hide Stats"}
              </button>
              <div className="down-footer-timer-container">
                <span
                  className="timer footer-timer"
                  style={{
                    width: `${progressLoaded}%`,
                    color: `${
                      progressLoaded < 40
                        ? "lightgreen"
                        : progressLoaded < 70
                        ? "orange"
                        : "red"
                    }`,
                  }}
                >
                  {counter}{" "}
                  <span className="footer-timer-dur" style={{ color: "white" }}>
                    / {duration}
                  </span>
                </span>
              </div>
              <div className="footer">
                <button
                  className="nextQuestionBtn"
                  onClick={() => handleNextQuestion(ans)}
                  disabled={answerIndex === null}
                >
                  {currQuestions === AllQuestions.length - 1
                    ? "Finish"
                    : "Next"}
                </button>
              </div>
            </>
          ) : (
            <div>No questions available</div>
          )}
        </>
      ) : (
        <div className="result">
          <h3> {form.name.toUpperCase()}, here is your End Score</h3>
          <p>
            Your total questions: <span> {AllQuestions.length}</span>
          </p>
          <p>
            Current Score: <span> {result.score}</span>
          </p>
          <p>
            Highest Score: <span> {highestScore}</span>
          </p>
          <p>
            Correct Answers: <span> {result.correctAnswer}</span>
          </p>
          <p>
            Wrong Answers: <span> {result.wrongAnswer}</span>
          </p>
          <button onClick={handleTryAgain} className=" tryAgainBtn">
            Try Again
          </button>

          <button onClick={handTryAsFresh} className=" tryAgainBtn">
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;

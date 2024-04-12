import { useState, useEffect } from "react";
import "./Styles/Quiz.scss";
import { resultInitalState } from "../utils/qnaList";

const Quiz = ({
  AllQuestions,
  form,
  selectedLvl,
  setIsUserLogged,
  setSelectedLvl,
}) => {
  const datObj = new Date();
  const hour = datObj.getHours();
  let showLvlSelectedMsg = "";
  let greeting;
  const [showCrrAnsMsg, setShowCrrMsg] = useState("");

  const [currQuestions, setCurrQuestions] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [ans, setAns] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);
  const [highestScore, setHighestScore] = useState(
    localStorage.getItem("highestScore") || 0
  );
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
  } else {
    showLvlSelectedMsg = "Extreme ";
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
  };

  const handleNextQuestion = () => {
    setAnswerIndex(null);
    setResult((prevVal) =>
      ans
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
  // const [showUserCrrAns, setShowUserCrrAns] = useState(false);

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <span className="active-question-no">{currQuestions + 1}</span>
          <span className="total-question"> / {AllQuestions.length}</span>
          <div className="user-dashboard">
            <h3>
              {greeting}, {form.name || "Demo"}
            </h3>
          </div>
          {/* <h4 className>Your Scoreboard</h4> */}
          <h6 className="crr-ans-score">
            {" "}
            Correct Answers: {result.correctAnswer}
          </h6>
          <h6 className="wrong-ans-score">
            Wrong Answers: {result.wrongAnswer}
          </h6>
          <h6 className="curr-score">Current Score: {result.score}</h6>
          <h6 className="prev-score"> Prev Score: {result.score}</h6>
          <h6 className="diff-lvl-score">
            Diffucilty Level {showLvlSelectedMsg}
          </h6>
          <p className={ans ? "crrAnsStatus" : "wrongAnsStatus"}>
            {showCrrAnsMsg}
          </p>
          {currentQuestion ? (
            <>
              <h2>{questions}</h2>

              <ul>
                <p>One mark </p>
                {choices.map((choice, index) => (
                  <li
                    key={choice}
                    onClick={() => onAnswerClick(choice, index)}
                    className={answerIndex === index ? "selected-answer" : null}
                    // className={`${
                    //   answerIndex === index ? "selected-answer" : ""
                    // } ${showUserCrrAns ? "correct-answer" : ""}`}
                  >
                    {choice}
                  </li>
                ))}
              </ul>
              <div className="footer">
                <button
                  className="nextQuestionBtn"
                  onClick={handleNextQuestion}
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
          <h3> {form.name}, here is your result</h3>
          <p>
            Your Total Questions: <span> {AllQuestions.length}</span>
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
          </button>{" "}
          <br />
          <button onClick={handTryAsFresh} className=" tryAgainBtn">
            Start as fresh
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;

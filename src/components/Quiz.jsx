import { useState } from "react";
import "./Styles/Quiz.scss";
import { resultInitalState } from "../utils/qnaList";

const Quiz = ({ AllQuestions }) => {
  const [currQuestions, setCurrQuestions] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [ans, setAns] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);

  // Check if AllQuestions is not empty and currQuestions is within the valid index range
  const currentQuestion =
    AllQuestions.length > 0 && currQuestions < AllQuestions.length
      ? AllQuestions[currQuestions]
      : null;

  // If currentQuestion is not defined, return null or handle it appropriately

  const { questions, choices, correctAnswer } = currentQuestion || {};

  const onAnswerClick = (answer, index) => {
    setAnswerIndex(index);
    if (answer === correctAnswer) {
      setAns(true);
    } else {
      setAns(false);
    }
  };

  const handleNextQuestion = () => {
    setAnswerIndex(null);
    setResult((prevVal) =>
      ans
        ? {
            ...prevVal,
            score: prevVal.score + 5,
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
  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <span className="active-question-no">{currQuestions + 1}</span>
          <span className="total-question">/{AllQuestions.length}</span>
          {currentQuestion ? (
            <>
              <h2>{questions}</h2>
              <ul>
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
        <div>Result</div>
      )}
    </div>
  );
};

export default Quiz;

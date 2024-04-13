import React from "react";

const Result = ({
  AllQuestions,
  form,
  result,
  highestScore,
  handleTryAgain,
  handTryAsFresh,
}) => {
  return (
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
  );
};

export default Result;

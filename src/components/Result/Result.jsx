import "../Styles/Result.scss";

const Result = ({
  AllQuestions,
  form,
  result,
  highestScore,
  handleTryAgain,
  handTryAsFresh,
}) => {
  return (
    <>
      <div className="result">
        <h3 className="result-center">
          {form.name.toUpperCase()}, here is your score board
        </h3>
        <table className="result-table">
          <tbody>
            <tr>
              <td>Total Questions </td>
              <td>{AllQuestions.length}</td>
            </tr>
            <tr>
              <td>Attempted Questions </td>
              <td>{result.score}</td>
            </tr>
            <tr>
              <td>Highest Score </td>
              <td>{highestScore}</td>
            </tr>
            <tr>
              <td>Correct Answers </td>
              <td style={{ color: "#20f016" }}>{result.correctAnswer}</td>
            </tr>
            <tr>
              <td>Wrong Answers </td>
              <td style={{ color: "red" }}>{result.wrongAnswer}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="button-container">
        <button className="restartBtn " onClick={handTryAsFresh}>
          Restart
        </button>
        <button className="tryAgainBtn" onClick={handleTryAgain}>
          Try Again
        </button>
      </div>
    </>
  );
};

export default Result;

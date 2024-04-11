import { useState } from "react";
import { qnaList } from "./utils/qnaList";
import WelcomeInput from "./components/WelcomeInput";
import Quiz from "./components/Quiz";
function App() {
  const [isUserLogged, setIsUserLogged] = useState(null);
  const [silderVal, setSilderVal] = useState(24);
  // Filter the qnaList based on the slider value
  const filteredQuestions = qnaList.allQuestions.slice(0, silderVal);

  const handleSliderChange = (val) => {
    setSilderVal(val);
    console.log(silderVal);
  };

  return (
    <>
      {!isUserLogged ? (
        <WelcomeInput
          setIsUserLogged={setIsUserLogged}
          isUserLogged={isUserLogged}
          handleSliderChange={handleSliderChange}
          silderVal={silderVal}
          setSilderVal={setSilderVal}
        />
      ) : (
        <Quiz
          AllQuestions={filteredQuestions}
          setIsUserLogged={setIsUserLogged}
          isUserLogged={isUserLogged}
        />
      )}
    </>
  );
}

export default App;

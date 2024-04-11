import { useState } from "react";
import Quiz from "./components/Quiz";
import { qnaList } from "./utils/qnaList";
import WelcomeInput from "./components/WelcomeInput";

function App() {
  console.log(qnaList);
  const [isUserLogged, setIsUserLogged] = useState(null);

  const [silderVal, setSilderVal] = useState(48);

  // Filter the qnaList based on the slider value
  const filteredQuestions = qnaList.allQuestions.slice(0, silderVal);

  const handleSliderChange = (val) => {
    setSilderVal(val);
    console.log(silderVal);
  };

  console.log(filteredQuestions);
  return (
    <>
      <WelcomeInput
        setIsUserLogged={setIsUserLogged}
        isUserLogged={isUserLogged}
        handleSliderChange={handleSliderChange}
        silderVal={silderVal}
        setSilderVal={setSilderVal}
      />
      <Quiz
        AllQuestions={filteredQuestions}
        setIsUserLogged={setIsUserLogged}
        isUserLogged={isUserLogged}
      />
    </>
  );
}

export default App;

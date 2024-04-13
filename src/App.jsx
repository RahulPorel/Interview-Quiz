import { useState } from "react";
import { qnaList } from "./utils/qnaList";
import WelcomeInput from "./components/WelcomeInput";
import Quiz from "./components/Quiz";

function App() {
  const [isUserLogged, setIsUserLogged] = useState(null);
  const [silderVal, setSilderVal] = useState(24);
  const [userTimerDuration, setUserTimerDuration] = useState(15);

  // Filter the qnaList based on the slider value
  const filteredQuestions = qnaList.allQuestions.slice(0, silderVal);
  const [form, setForm] = useState({
    name: "",
  });
  const [selectedLvl, setSelectedLvl] = useState("");
  const [duration, setDuration] = useState(0);
  const [isExtremeBtnClicked, setIsExtremeBtnClicked] = useState(false);
  const handleSliderChange = (val) => {
    setSilderVal(val);
  };

  const handleTimerDurationSliderCh = (val) => {
    setUserTimerDuration(val);
  };
  console.log(userTimerDuration);
  return (
    <>
      {!isUserLogged ? (
        <WelcomeInput
          setDuration={setDuration}
          duration={duration}
          setForm={setForm}
          form={form}
          setIsUserLogged={setIsUserLogged}
          isUserLogged={isUserLogged}
          handleSliderChange={handleSliderChange}
          silderVal={silderVal}
          setSilderVal={setSilderVal}
          selectedLvl={selectedLvl}
          setSelectedLvl={setSelectedLvl}
          handleTimerDurationSliderCh={handleTimerDurationSliderCh}
          userTimerDuration={userTimerDuration}
          setUserTimerDuration={setUserTimerDuration}
          isExtremeBtnClicked={isExtremeBtnClicked}
          setIsExtremeBtnClicked={setIsExtremeBtnClicked}
        />
      ) : (
        <Quiz
          duration={(duration && userTimerDuration) || 15}
          AllQuestions={filteredQuestions}
          setIsUserLogged={setIsUserLogged}
          form={form}
          selectedLvl={selectedLvl}
          setSelectedLvl={setSelectedLvl}
          userTimerDuration={userTimerDuration}
        />
      )}
    </>
  );
}

export default App;

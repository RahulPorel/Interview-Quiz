import { useState } from "react";
import { qnaList } from "./utils/qnaList";
import WelcomeInput from "./components/WelcomeInput";
import Quiz from "./components/Quiz";
function App() {
  const [isUserLogged, setIsUserLogged] = useState(null);
  const [silderVal, setSilderVal] = useState(24);
  // Filter the qnaList based on the slider value
  const filteredQuestions = qnaList.allQuestions.slice(0, silderVal);
  const [form, setForm] = useState({
    name: "",
  });
  const [selectedLvl, setSelectedLvl] = useState("");
  const handleSliderChange = (val) => {
    setSilderVal(val);
  };

  return (
    <>
      {!isUserLogged ? (
        <WelcomeInput
          setForm={setForm}
          form={form}
          setIsUserLogged={setIsUserLogged}
          isUserLogged={isUserLogged}
          handleSliderChange={handleSliderChange}
          silderVal={silderVal}
          setSilderVal={setSilderVal}
          selectedLvl={selectedLvl}
          setSelectedLvl={setSelectedLvl}
        />
      ) : (
        <Quiz
          AllQuestions={filteredQuestions}
          setIsUserLogged={setIsUserLogged}
          form={form}
          selectedLvl={selectedLvl}
          setSelectedLvl={setSelectedLvl}
        />
      )}
    </>
  );
}

export default App;

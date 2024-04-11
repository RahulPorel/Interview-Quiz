import { useState } from "react";
import Quiz from "./components/Quiz";
import { qnaList } from "./utils/qnaList";
import WelcomeInput from "./components/WelcomeInput";

function App() {
  const [isUser, setIsUser] = useState(null);
  return (
    <>
      {" "}
      <WelcomeInput setIsUser={setIsUser} isUser={isUser} />
      <Quiz
        AllQuestions={qnaList.allQuestions}
        setIsUser={setIsUser}
        isUser={isUser}
      />
    </>
  );
}

export default App;

import Quiz from "./components/Quiz";
import { qnaList } from "./utils/qnaList";

function App() {
  return <Quiz AllQuestions={qnaList.allQuestions} />;
}

export default App;

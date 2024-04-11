import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { qnaList } from "../utils/qnaList";
import QnaDropDown from "./DropDown";

const WelcomeInput = ({
  isUserLogged,
  setIsUserLogged,
  silderVal,
  handleSliderChange,
}) => {
  const [form, setForm] = useState({
    name: "",
  });

  const handleGenerateQuestions = () => {
    if (!form.name === "") {
      setIsUserLogged(true);
      console.log(isUserLogged);
    } else {
      setIsUserLogged(false);
      console.log(isUserLogged);
    }
  };

  return (
    <div>
      <h1>Welcome to Interview Prepartion</h1>
      <h3>We will help you to execel on your technical interview</h3>
      <h2>You can customize your test on your perfrence </h2>
      <h3>Enter your name below to save your score or make a demo user </h3>
      <br />
      <input
        type="text"
        placeholder="Enter Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <br />
      <br />
      <p>Selected Questions: {silderVal}</p>
      <QnaDropDown />

      <br />

      <br />
      <Slider
        min={6}
        max={100}
        step={1}
        value={silderVal}
        defaultValue={48}
        onChange={handleSliderChange}
      />
      <button onClick={handleGenerateQuestions}>Generate Questions </button>
    </div>
  );
};

export default WelcomeInput;

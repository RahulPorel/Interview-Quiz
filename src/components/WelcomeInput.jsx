import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
``;
import QnaDropDown from "./DropDown";
import InputBtnComponent from "./InputBtnC";
import Button from "react-bootstrap/Button";
const WelcomeInput = ({
  isUserLogged,
  setIsUserLogged,
  silderVal,
  handleSliderChange,
  setSilderVal,
}) => {
  const [isBasicClicked, setIsBasicClicked] = useState(false);
  const [isMediumClicked, setIsMediumClicked] = useState(false);
  const [isHardClicked, setIsHardClicked] = useState(false);
  const [isExtremeClicked, setIsExtremeClicked] = useState(false);
  const [isNameFilledEnter, setIsNameFilledEnter] = useState(false);
  const [form, setForm] = useState({
    name: "",
  });

  const handleGenerateQuestions = () => {
    if (!form.name.length < 1) {
      setIsNameFilledEnter(false);
      setIsUserLogged(true);
    } else {
      setIsNameFilledEnter(true);
      setIsUserLogged(false);
    }
  };

  return (
    <div>
      <h2>Welcome to Interview Prepartion</h2>
      <h3>We will help you to execel on your technical interview</h3>
      <p>You can customize your test on your perfrence </p>

      <InputBtnComponent
        isNameFilledEnter={isNameFilledEnter}
        form={form}
        setForm={setForm}
      />

      <p>Selected Questions: {silderVal}</p>
      <QnaDropDown
        setIsBasicClicked={setIsBasicClicked}
        setIsMediumClicked={setIsMediumClicked}
        setIsHardClicked={setIsHardClicked}
        setIsExtremeClicked={setIsExtremeClicked}
        setSilderVal={setSilderVal}
      />

      {isExtremeClicked && (
        <>
          <p>Change your no of questions as per your wish</p>
          <Slider
            min={6}
            max={100}
            step={1}
            value={silderVal}
            defaultValue={48}
            onChange={handleSliderChange}
          />
        </>
      )}

      <Button
        onClick={handleGenerateQuestions}
        variant={isNameFilledEnter ? "danger" : "success"}
      >
        Generate Questions
      </Button>
    </div>
  );
};

export default WelcomeInput;

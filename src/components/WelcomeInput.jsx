import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
``;
import QnaDropDown from "./DropDown";
import InputBtnComponent from "./InputBtnC";
import Button from "react-bootstrap/Button";
const WelcomeInput = ({
  setIsUserLogged,
  silderVal,
  handleSliderChange,
  setSilderVal,
  setForm,
  form,
  selectedLvl,
  setSelectedLvl,
  setDuration,
  duration,

  handleTimerDurationSliderCh,
  userTimerDuration,
  setUserTimerDuration,
}) => {
  const [isBasicClicked, setIsBasicClicked] = useState(false);
  const [isMediumClicked, setIsMediumClicked] = useState(false);
  const [isHardClicked, setIsHardClicked] = useState(false);
  const [isExtremeClicked, setIsExtremeClicked] = useState(false);
  const [isNameFilledEnter, setIsNameFilledEnter] = useState(false);

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
      <p>Selected Durations: {userTimerDuration}</p>
      <QnaDropDown
        setDuration={setDuration}
        duration={duration}
        setIsBasicClicked={setIsBasicClicked}
        setIsMediumClicked={setIsMediumClicked}
        setIsHardClicked={setIsHardClicked}
        setIsExtremeClicked={setIsExtremeClicked}
        setSilderVal={setSilderVal}
        selectedLvl={selectedLvl}
        setSelectedLvl={setSelectedLvl}

        handleTimerDurationSliderCh={handleTimerDurationSliderCh}
        setUserTimerDuration={setUserTimerDuration}
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
          <br /> <br />
          <Slider
            min={6}
            max={60}
            step={1}
            value={userTimerDuration}
            defaultValue={15}
            onChange={handleTimerDurationSliderCh}
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

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import QnaDropDown from "../DropDown/DropDown";
import InputBtnComponent from "../InputBtn/InputBtnC";

import "../Styles/WelcomeInput.scss";

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
  isExtremeBtnClicked,
  setIsExtremeBtnClicked,
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

  console.log(userTimerDuration);
  console.log(duration);

  return (
    <div className="dashboard">
      <h2>Welcome to Interview Quiz's</h2>
      <br />
      <InputBtnComponent
        isNameFilledEnter={isNameFilledEnter}
        form={form}
        setForm={setForm}
      />
      <br />
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
        isExtremeBtnClicked={isExtremeBtnClicked}
        setIsExtremeBtnClicked={setIsExtremeBtnClicked}
      />
      <br />
      {isExtremeClicked && (
        <>
          <span>Change your number of questions: {silderVal}</span>
          <Slider
            min={6}
            max={99}
            step={1}
            value={silderVal}
            defaultValue={48}
            onChange={handleSliderChange}
          />
          <br />
          <span>
            Change your max-duration timeout for each and every questions:{" "}
            {userTimerDuration}'s
          </span>

          <Slider
            min={6}
            max={60}
            step={1}
            value={userTimerDuration}
            defaultValue={15}
            onChange={handleTimerDurationSliderCh}
          />

          <br />
        </>
      )}
      <div className="genBtnM">
        <Button
          onClick={handleGenerateQuestions}
          variant={isNameFilledEnter ? "danger" : "success"}
        >
          Generate Questions
        </Button>
      </div>

      <div className="footer-welcome">
        <p>Selected Questions: {silderVal}</p>
        {isExtremeBtnClicked ? (
          <p>Selected Durations: {userTimerDuration || 15}'s</p>
        ) : (
          <p>Selected Durations: {userTimerDuration ? duration : 15}'s</p>
        )}
      </div>
    </div>
  );
};

export default WelcomeInput;

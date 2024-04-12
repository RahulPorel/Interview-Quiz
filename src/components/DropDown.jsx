import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./Styles/DropDown.scss";

function QnaDropDown({
  setIsBasicClicked,
  setIsMediumClicked,
  setIsExtremeClicked,
  setIsHardClicked,
  setSilderVal,
  selectedLvl,
  setSelectedLvl,
  setDuration,
  duration,
}) {


  const handleBasicLevelBtn = () => {
    console.log("bas");
    setDuration(60);
    setSilderVal(24);
    setIsExtremeClicked(false);
    setIsBasicClicked(true);
  };
  const handleMediumLevelBtn = () => {
    setDuration(45);

    setIsExtremeClicked(false);
    setSilderVal(48);
    setIsMediumClicked(true);
  };
  const handleHardLevelBtn = () => {
    setDuration(25);

    setIsExtremeClicked(false);
    setSilderVal(96);
    setIsHardClicked(true);
  };
  const handleExtremeLevelBtn = () => {
    setDuration(15);

    setIsExtremeClicked(true);
  };

  const handleLvlCh = (e) => {
    const selectedValue = e.target.value;
    setSelectedLvl(selectedValue);
    // Perform actions based on the selected level if needed
    switch (selectedValue) {
      case "1":
        handleBasicLevelBtn();
        break;
      case "2":
        handleMediumLevelBtn();
        break;
      case "3":
        handleHardLevelBtn();
        break;
      case "4":
        handleExtremeLevelBtn();
        break;
      default:
    }
  };

  return (
    <FloatingLabel controlId="floatingSelect" label="Works with selects">
      <Form.Select
        onChange={handleLvlCh}
        value={selectedLvl}
        aria-label="Floating label select example"
      >
        <option>Choose Your Level of Difficulty</option>
        <option className="basic" onClick={handleBasicLevelBtn} value="1">
          Basic
        </option>
        <option className="medium" onClick={handleMediumLevelBtn} value="2">
          Medium
        </option>
        <option className="hard" onClick={handleHardLevelBtn} value="3">
          Hard
        </option>
        <option className="extreme" onClick={handleExtremeLevelBtn} value="4">
          Extreme
        </option>
      </Form.Select>
    </FloatingLabel>
  );
}

export default QnaDropDown;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function InputBtnComponent({ isNameFilledEnter, form, setForm }) {
  const [showSavedMsg, setShowSavedMsg] = useState(false);
  const handleSaveName = () => {
    setShowSavedMsg(!showSavedMsg);
  };

  return (
    <>
      {isNameFilledEnter ? (
        <span style={{ color: "red" }} className="nameRq">
          name is required
        </span>
      ) : null}
      <InputGroup className="mb-1">
        <Form.Control
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Enter Your Name"
          aria-label="Enter Your Name"
          aria-describedby="your-name"
        />
        <div className="hideSaveNaminM">
          <Button
            onClick={handleSaveName}
            variant={showSavedMsg ? "success" : "dark"}
          >
            {showSavedMsg ? "Saved" : "Not Saved"}
          </Button>
        </div>
      </InputGroup>
    </>
  );
}

export default InputBtnComponent;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function InputBtnComponent({ isNameFilledEnter, form, setForm }) {
  const [showSavedMsg, setShowSavedMsg] = useState(false);
  const handleSaveName = () => {
    setShowSavedMsg(!showSavedMsg);
  };
  console.log(form);
  return (
    <>
      <InputGroup className="mb-3 ">
        <Form.Control
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your Name"
          aria-label="Your Name"
          aria-describedby="your-name"
        />
        <Button
          onClick={handleSaveName}
          variant={showSavedMsg ? "outline-success" : "outline-dark"}
        >
          {showSavedMsg ? "Saved" : "Not Saved"}
        </Button>
      </InputGroup>
      {isNameFilledEnter ? (
        <>
          {" "}
          <h5 style={{ color: "red" }}>name is required!</h5>
          <p style={{ color: "darkgreen" }}>
            This helps use to known more about you
          </p>{" "}
        </>
      ) : null}
    </>
  );
}

export default InputBtnComponent;

import React, { useState } from "react";
import Operations from "./Operations";
const Input = () => {
  const [inputValues, setInputValues] = useState({
    firstValue: 0,
    secondValue: 0,
  });

  function numbers(e) {
    const number = Number(e.target.value);
    setInputValues({
      ...inputValues,
      [e.target.name]: number,
    });
  }
  function clear(e) {
    setInputValues({
      ...inputValues,
      [e.target.name]: 0,
    });
  }

  return (
    <div>
      <label>
        <input
          value={inputValues.firstValue}
          onChange={numbers}
          type="number"
          name="firstValue"
        ></input>
      </label>

      <button name="firstValue" onClick={clear}>
        CLEAR
      </button>
      <label>
        <input
          value={inputValues.secondValue}
          onChange={numbers}
          type="number"
          name="secondValue"
        ></input>
      </label>

      <button name="secondValue" onClick={clear}>
        CLEAR
      </button>
      <Operations inputValues={inputValues}></Operations>
    </div>
  );
};

export default Input;

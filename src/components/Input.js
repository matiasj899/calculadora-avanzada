import React, { useState } from "react";
import Operations from "./Operations";
const Input = () => {
  const [inputValues, setInputValues] = useState({
    firstValue: 0,
    secondValue: 0,
  });
  const [error, setError] = useState(false);
  function numbers(e) {
    const number = Number(e.target.value);
    setInputValues({
      ...inputValues,
      [e.target.name]: number,
    });
    setError(false);
  }
  function notNumber(e) {
    console.log(e.keyCode);
    if (e.keyCode > 48 && e.keyCode > 57) {
      setError(true);
    }
  }
  function clear(e) {
    setInputValues({
      ...inputValues,
      [e.target.name]: 0,
    });
  }

  return (
    <div className="second-input-container">
      <div className="third-input-container">
        <div>
          <label>
            <input
              value={inputValues.firstValue}
              onChange={numbers}
              onKeyDown={notNumber}
              type="number"
              name="firstValue"
            ></input>
          </label>

          <button name="firstValue" onClick={clear}>
            CLEAR
          </button>
        </div>
        <div>
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
        </div>
      </div>

      {error ? <p>Debe ingresar un numero</p> : null}
      <Operations inputValues={inputValues}></Operations>
    </div>
  );
};

export default Input;

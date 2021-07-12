import React,{useState} from "react";

const Input = () => {
    const [value,setValue]=useState(0)
    function inputValue(e){
setValue(e.target.value)
    }
  return (
    <div>
      <input value={value} onChange={inputValue}></input>
      <button>CLEAR</button>
    </div>
  );
};

export default Input;

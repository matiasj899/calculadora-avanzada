import React, { useState, useEffect } from "react";

const Operations = ({ inputValues }) => {
  console.log(inputValues);
  const [operations, setOperations] = useState({
    sumar: 0,
    restar: 0,
    multiplicacion: 0,
    division: 0,
    potencia:0,
  });

  useEffect(() => {
    setOperations({
      sumar: inputValues.firstValue + inputValues.secondValue,
      restar: inputValues.firstValue - inputValues.secondValue,
      multiplicacion: inputValues.firstValue * inputValues.secondValue,
      division: inputValues.firstValue / inputValues.secondValue,
      potencia:Math.pow(inputValues.firstValue, inputValues.secondValue)
    });
    if (inputValues.firstValue === 0 && inputValues.secondValue === 0) {
      setOperations({
        sumar: 0,
        restar: 0,
        multiplicacion: 0,
        division: "Indeterminado",
        potencia:0
      });
    }
  }, [inputValues]);

  return (
    <div>
      <h2>suma:{operations.sumar}</h2>
      <h2>resta:{operations.restar}</h2>
      <h2>multiplicacion:{operations.multiplicacion}</h2>
      <h2>division:{operations.division}</h2>
      <h2>potencia:{operations.potencia}</h2>
    </div>
  );
};
export default Operations;

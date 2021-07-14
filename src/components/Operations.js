import React, { useState, useEffect } from "react";
import OperationComponent from "./OperationComponent";
const Operations = ({ inputValues }) => {
  console.log(inputValues);
  const [operations, setOperations] = useState(
    /* sumar: 0,
    restar: 0,
    multiplicacion: 0,
    division: 0,
    potencia: 0,
    raizCuadrada1:0,
    raizCuadrada2:0*/ []
  );

  useEffect(() => {
    setOperations([
      {
        nombre: "suma",
        result: inputValues.firstValue + inputValues.secondValue,
        id: 1,
      },
      {
        nombre: "resta",
        result: inputValues.firstValue - inputValues.secondValue,
        id: 2,
      },
      {
        nombre: "multiplicacion",
        result: inputValues.firstValue * inputValues.secondValue,
        id: 3,
      },
      {
        nombre: "division",
        result: inputValues.firstValue / inputValues.secondValue,
        id: 4,
      },
      {
        nombre: "potencia",
        result: Math.pow(inputValues.firstValue, inputValues.secondValue),
        id: 5,
      },
      {
        nombre: `raiz cuadrada de ${inputValues.firstValue}`,
        result: Math.sqrt(inputValues.firstValue),
        id: 6,
      },
      {
        nombre: `raiz cuadrada de ${inputValues.secondValue}`,
        result: Math.sqrt(inputValues.secondValue),
        id: 7,
      },
      {
        nombre: "hypotenusa",
        result: Math.hypot(inputValues.firstValue, inputValues.secondValue),
        id: 8,
      },
    ]);
    if (inputValues.firstValue === 0 && inputValues.secondValue === 0) {
      setOperations([
        { nombre: "suma", result: 0, id: 1 },
        { nombre: "resta", result: 0, id: 2 },
        { nombre: "multiplicacion", result: 0, id: 3 },
        { nombre: "division", result: "Indeterminado", id: 4 },
        { nombre: "potencia", result: 1, id: 5 },
        {
          nombre: `raiz cuadrada de ${inputValues.firstValue}`,
          result: 0,
          id: 6,
        },
        {
          nombre: `raiz cuadrada de ${inputValues.secondValue}`,
          result: 0,
          id: 7,
        },
        { nombre: "hypotenusa", result: 0, id: 8 },
      ]);
    }
  }, [inputValues]);
  console.log(operations);
  const ops = operations.map((operation) => (
    <OperationComponent
      key={operation.id}
      operation={operation}
    ></OperationComponent>
  ));

  return (
    <div className="list-cn">
      <ul>{ops}</ul>
    </div>
  );
};
export default Operations;

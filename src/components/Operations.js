import React, { useState, useEffect } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
const Operations = ({ inputValues }) => {
  console.log(inputValues);
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    setOperations([
      {
        nombre: "suma",
        result: inputValues.firstValue + inputValues.secondValue,
        id: "1",
      },
      {
        nombre: "resta",
        result: inputValues.firstValue - inputValues.secondValue,
        id: "2",
      },
      {
        nombre: "multiplicacion",
        result: inputValues.firstValue * inputValues.secondValue,
        id: "3",
      },
      {
        nombre: "division",
        result: inputValues.firstValue / inputValues.secondValue,
        id: "4",
      },
      {
        nombre: "potencia",
        result: Math.pow(inputValues.firstValue, inputValues.secondValue),
        id: "5",
      },
      {
        nombre: `raiz cuadrada de ${inputValues.firstValue}`,
        result: Math.sqrt(inputValues.firstValue),
        id: "6",
      },
      {
        nombre: `raiz cuadrada de ${inputValues.secondValue}`,
        result: Math.sqrt(inputValues.secondValue),
        id: "7",
      },
      {
        nombre: "hypotenusa",
        result: Math.hypot(inputValues.firstValue, inputValues.secondValue),
        id: "8",
      },
    ]);
    if (inputValues.firstValue === 0 && inputValues.secondValue === 0) {
      setOperations([
        { nombre: "suma", result: 0, id: "1" },
        { nombre: "resta", result: 0, id: "2" },
        { nombre: "multiplicacion", result: 0, id: "3" },
        { nombre: "division", result: "Indeterminado", id: "4" },
        { nombre: "potencia", result: 1, id: "5" },
        {
          nombre: `raiz cuadrada de ${inputValues.firstValue}`,
          result: 0,
          id: "6",
        },
        {
          nombre: `raiz cuadrada de ${inputValues.secondValue}`,
          result: 0,
          id: "7",
        },
        { nombre: "hypotenusa", result: 0, id: "8" },
      ]);
    }
  }, [inputValues]);
  console.log(operations);

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result;
        if (!destination) {
          return;
        }
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        ) {
          return;
        }
        setOperations((prevOperations) =>
          reorder(prevOperations, source.index, destination.index)
        );
      }}
    >
      <div className="list-cn">
        <Droppable droppableId="operationList">
          {(droppableProvided) => (
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
            >
              {operations.map((operation, index) => (
                <Draggable
                  key={operation.id}
                  draggableId={operation.id}
                  index={index}
                >
                  {(draggableProvided) => (
                    <li
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                    >
                      {operation.nombre} = {operation.result}
                    </li>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};
export default Operations;

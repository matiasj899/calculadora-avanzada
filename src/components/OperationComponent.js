import React from 'react';

const OperationComponent=({operation})=>{
    console.log(operation)
    return(<li>{operation.nombre} = {operation.result}</li>)
}
export default OperationComponent
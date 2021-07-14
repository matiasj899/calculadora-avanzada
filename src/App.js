import Input from "./components/Input";
import { DragDropContext, Droppable,Draggable} from "react-beautiful-dnd";
function App() {
  return (
  <DragDropContext onDragEnd={(result)=>console.log(result)}>
<div id="input-container">
    <Input></Input>
  </div>
  </DragDropContext>
  
  );
}

export default App;

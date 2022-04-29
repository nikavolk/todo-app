import Header from "./Components/Header";
import ToDoInput from "./Components/ToDoInput";
import ToDoList from "./Components/ToDoList";
import { useState } from "react";

function App() {
  const [toDoItems, setToDoItems] = useState([
    { id: 0, text: "ActiveTsfdsfdsf", state: "active" },
    { id: 1, text: "completedadfdaf", state: "completed" },
    { id: 2, text: "completedTsfbbddbdfdsfdsf", state: "completed" },
    { id: 3, text: "ActiveTsfds4234324fdsf", state: "active" },
  ]);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ToDoInput setToDoItems={setToDoItems} />
      </div>
      <div>
        <ToDoList toDoItems={toDoItems} setToDoItems={setToDoItems} />
      </div>
    </div>
  );
}

export default App;

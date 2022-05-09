import Header from "./Components/Header";
import Input from "./Components/Input";
import TodoList from "./Components/TodoList";
import Filter from "./Components/Filter";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("Add input");
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Input
          inputText={inputText}
          setInputText={setInputText}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      </div>
      <div>
        <TodoList todoList={todoList} />
      </div>
      <div>
        <Filter />
      </div>
    </div>
  );
}

export default App;

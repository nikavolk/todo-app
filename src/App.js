import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import TodoList from "./Components/TodoList/TodoList";
import Filter from "./Components/Filter/Filter";
import { useState, useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodoList, setFilteredTodoList] = useState([]);

  // filter by selected status and set new state
  const filterHandler = () => {
    switch (status) {
      case "active":
        setFilteredTodoList(
          todoList.filter((item) => item.completed === false)
        );
        break;
      case "completed":
        setFilteredTodoList(todoList.filter((item) => item.completed === true));
        break;
      default:
        setFilteredTodoList(todoList);
    }
  };

  useEffect(() => {
    filterHandler();
  }, [status, todoList]);

  return (
    <div className="wrapper">
      <div className="main-container">
        <Header />
        <Input
          inputText={inputText}
          setInputText={setInputText}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <div>
          <TodoList
            filteredTodoList={filteredTodoList}
            todoList={todoList}
            setTodoList={setTodoList}
            setStatus={setStatus}
          />
        </div>
        <div className="footer-text">Drag and drop to reorder list</div>
      </div>
    </div>
  );
}

export default App;

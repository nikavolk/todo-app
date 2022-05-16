import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import TodoList from "./Components/TodoList/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState();

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
        <TodoList
          filteredTodoList={filteredTodoList}
          todoList={todoList}
          setTodoList={setTodoList}
          setStatus={setStatus}
          checked={checked}
          setChecked={setChecked}
        />
        {filteredTodoList.length > 0 && (
          <div className="footer-text">Drag and drop to reorder list</div>
        )}
      </div>
    </div>
  );
}

export default App;

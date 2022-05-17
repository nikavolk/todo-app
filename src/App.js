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
  const [theme, setTheme] = useState("light");

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
    <div className={`wrapper ${theme === "dark" ? "dark" : ""}`}>
      <div className="main-container">
        <Header theme={theme} setTheme={setTheme} />
        <Input
          inputText={inputText}
          setInputText={setInputText}
          todoList={todoList}
          setTodoList={setTodoList}
          theme={theme}
        />
        <TodoList
          filteredTodoList={filteredTodoList}
          todoList={todoList}
          setTodoList={setTodoList}
          setStatus={setStatus}
          checked={checked}
          setChecked={setChecked}
          theme={theme}
        />
        {filteredTodoList.length > 0 && (
          <div className={`footer-text ${theme === "dark" ? "dark" : ""}`}>
            Drag and drop to reorder list
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

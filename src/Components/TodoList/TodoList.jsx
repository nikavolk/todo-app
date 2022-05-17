import TodoItem from "../TodoItem/TodoItem";
import "./todolist.component.style.scss";
import Filter from "../Filter/Filter";

const TodoList = ({
  todoList,
  setTodoList,
  filteredTodoList,
  setStatus,
  setFilteredTodoList,
  checked,
  setChecked,
  theme,
}) => {
  return (
    <div className={`list-wrapper ${theme === "dark" ? "dark" : ""}`}>
      {filteredTodoList.map((item) => (
        <TodoItem
          key={item.id}
          todoList={todoList}
          item={item}
          setTodoList={setTodoList}
          checked={checked}
          setChecked={setChecked}
          theme={theme}
        />
      ))}

      <Filter
        setStatus={setStatus}
        filteredTodoList={filteredTodoList}
        setFilteredTodoList={setFilteredTodoList}
        todoList={todoList}
        setTodoList={setTodoList}
        theme={theme}
      />
    </div>
  );
};

export default TodoList;

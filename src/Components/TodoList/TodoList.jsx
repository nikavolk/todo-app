import TodoItem from "../TodoItem/TodoItem";
import "./todolist.component.style.scss";
import Filter from "../Filter/Filter";

const TodoList = ({
  todoList,
  setTodoList,
  filteredTodoList,
  setStatus,
  setFilteredTodoList,
}) => {
  return (
    <div className="list-wrapper">
      {/* {filteredTodoList ? console.log("hi") : console.log("bye")} */}

      {filteredTodoList.map((item) => (
        <TodoItem
          key={item.id}
          todoList={todoList}
          item={item}
          setTodoList={setTodoList}
        />
      ))}

      <Filter
        setStatus={setStatus}
        filteredTodoList={filteredTodoList}
        setFilteredTodoList={setFilteredTodoList}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  );
};

export default TodoList;

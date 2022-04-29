import ToDoItem from "./ToDoItem";
import ToDoFilter from "./ToDoFilter";
import { useState } from "react";

const ToDoList = ({ toDoItems, setToDoItems }) => {
  const [filteredItems, setFilteredItems] = useState(toDoItems);

  return (
    <div>
      <div>
        <ToDoItem
          toDoItems={toDoItems}
          setToDoItems={setToDoItems}
          filteredItems={filteredItems}
          setFilteredItems={setFilteredItems}
        />
      </div>
      <div>
        <ToDoFilter
          toDoItems={toDoItems}
          setToDoItems={setToDoItems}
          filteredItems={filteredItems}
          setFilteredItems={setFilteredItems}
        />
      </div>
    </div>
  );
};

export default ToDoList;

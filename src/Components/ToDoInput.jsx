import { useState } from "react";

const ToDoInput = ({ setToDoItems }) => {
  const [text, setText] = useState("Create a new to-do :)");

  const handleSubmit = (e) => {
    e.preventDefault();
    // reset the input field(text-state) on submit
    setText("");
  };

  const addNewToDo = (e) => {
    // if a user presses Enter, an item gets added to the list
    if (e.key === "Enter") {
      setToDoItems((toDoItems) => [
        ...toDoItems,
        { id: toDoItems.length, text: e.target.value, state: "active" },
      ]);
      handleSubmit(e);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={addNewToDo}
        onFocus={() => {
          setText("");
        }}
      ></input>
    </div>
  );
};

export default ToDoInput;

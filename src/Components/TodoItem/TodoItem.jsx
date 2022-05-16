import "./todoitem.component.style.scss";
import deleteIcon from "../../Assets/Images/icon-cross.svg";
import { useState } from "react";

const TodoItem = ({ todoList, setTodoList, item }) => {
  // hover state for delete button
  const [hover, setHover] = useState(false);
  const handleMouseover = () => {
    setHover(true);
  };
  const handleMouseout = () => {
    setHover(false);
  };

  // delete specific item

  const deleteHandler = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // check to set completed or active

  const checkHandler = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div
          className="item-wrapper"
          onMouseOver={handleMouseover}
          onMouseOut={handleMouseout}
        >
          <div className="item-checkbox">
            <input
              type="checkbox"
              name={item.id}
              id={item.id}
              onClick={() => checkHandler(item.id)}
            />
            <label htmlFor={item.id} className="item-text">
              {item.text}
            </label>
            {hover && (
              <div className="btn-delete">
                <img
                  src={deleteIcon}
                  onClick={() => {
                    deleteHandler(item.id);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoItem;